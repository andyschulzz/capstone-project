import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { firebaseAuth } from '../../firebase'
import { db } from '../../firebase'
import { NewUserProfile } from '../common/NewUserProfile'

const AuthContext = React.createContext()

function AuthProvider({ history, children, profile, setProfile }) {
  const [user, setUser] = useState({})

  useEffect(() => {
    firebaseAuth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
        })
        window.localStorage.setItem('uid', user.uid)
        getUserInformation()
      } else {
        setUser({})
        setProfile(NewUserProfile)
        window.localStorage.removeItem('uid')
      }
    })
  }, [])

  async function getUserInformation() {
    // console.log('Getting user information ...')
    await db
      .collection('users')
      .doc(firebaseAuth.currentUser.uid)
      .get()
      .then((doc) => {
        // console.log('User found in DB:', doc.exists)
        return doc.exists && doc.data()
      })
      .then(async (data) => {
        await setProfile({ ...data })
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  async function sendEmailVerification() {
    const user = await firebaseAuth.currentUser
    user
      .sendEmailVerification()
      .then(() => {
        // console.log('Verification email sent to user.')
      })
      .catch((error) => {
        console.error(`Error sending verification email to user.`, error)
      })
  }

  async function logIn(event) {
    try {
      event.preventDefault()
      await firebaseAuth.signInWithEmailAndPassword(
        profile.email,
        profile.password
      )
      history.push('/')
    } catch (error) {
      console.error(`Error logging in user.`, error)
    }
  }

  async function logOut(event) {
    try {
      event.preventDefault()
      firebaseAuth.signOut()
      setUser({})
      setProfile(NewUserProfile)
      // console.log('User logged out. Profile resetted.')
      history.push('/')
    } catch (err) {}
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        logIn,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export default withRouter(AuthProvider)

export { AuthConsumer }
