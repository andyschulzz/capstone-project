import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { firebaseAuth } from '../../firebase'
import { db } from '../../firebase'
import { NewUserProfile } from '../common/NewUserProfile'

const AuthContext = React.createContext()

function AuthProvider({ history, children, setProfile, setWorkouts }) {
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
        fetchWorkouts().then(setWorkouts)
      } else {
        setUser({})
        setProfile(NewUserProfile)
        window.localStorage.removeItem('uid')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getUserInformation() {
    await db
      .collection('users')
      .doc(firebaseAuth.currentUser.uid)
      .get()
      .then((doc) => {
        return doc.exists && doc.data()
      })
      .then(async (data) => {
        await setProfile({ ...data })
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  function fetchWorkouts() {
    return db
      .collection('users')
      .doc(firebaseAuth.currentUser.uid)
      .collection('workouts')
      .get()
      .then((querySnapshot) => {
        const data = []
        querySnapshot.docs.forEach((doc) => {
          data.push(doc.data())
        })
        return data
      })
  }

  async function sendEmailVerification() {
    const user = await firebaseAuth.currentUser
    user
      .sendEmailVerification()
      .then(() => {})
      .catch((error) => {
        console.error(`Error sending verification email to user.`, error)
      })
  }

  async function logOut(event) {
    try {
      event.preventDefault()
      firebaseAuth.signOut()
      setUser({})
      setProfile(NewUserProfile)
      history.push('/')
    } catch (err) {}
  }

  return (
    <AuthContext.Provider
      value={{
        user,
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
