import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { firebaseAuth } from '../../firebase'
import { db } from '../../firebase'
import { NewUserProfile } from '../common/NewUserProfile'
import PropTypes from 'prop-types'

AuthProvider.propTypes = {
  setProfile: PropTypes.func.isRequired,
  setWorkouts: PropTypes.func.isRequired,
}

const AuthContext = React.createContext()

function AuthProvider({ children, setProfile, setWorkouts }) {
  const [user, setUser] = useState({})
  const history = useHistory()

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
