import { db, firebaseAuth } from '../../firebase'
import { useState } from 'react'
import { NewUserProfile } from '../common/NewUserProfile'

export default function useUserServices() {
  const [profile, setProfile] = useState(NewUserProfile)

  async function signUp({ email, password }) {
    return await firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        addUserToDB(res.user)
        return res
      })
      .catch(function (error) {
        console.error('Error creating new user: ', error)
        return error
      })
  }

  async function addUserToDB(user) {
    return await db
      .collection('users')
      .doc(user.uid)
      .set({
        _id: user.uid,
        email: user.email,
        registered: new Date().getTime(),
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }

  async function logIn({ email, password }) {
    return await firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then((res) => res)
      .catch((error) => error)
  }

  function resetPassword({ email }) {
    firebaseAuth.sendPasswordResetEmail(email)
  }

  return { signUp, logIn, resetPassword, profile, setProfile }
}
