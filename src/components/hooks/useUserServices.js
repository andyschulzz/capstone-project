import { db, firebaseAuth } from '../../firebase'
import { useState } from 'react'
import { NewUserProfile } from '../common/NewUserProfile'

export default function useWorkout() {
  const [profile, setProfile] = useState(NewUserProfile)

  function getUser(id) {
    // console.log('Getting user information ...')
    return db
      .collection('users')
      .doc(id)
      .get()
      .then((doc) => {
        // console.log('User found in DB:', doc.exists)
        return doc.exists && doc.data()
      })
      .then((data) => {
        return data
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  async function signUp({ email, password }) {
    await firebaseAuth
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

  function updateUser(profile) {
    db.collection('users')
      .doc(profile._id)
      .set({
        ...profile,
      })
      .then(function () {
        // console.log('User successfully updated!')
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }
  function updateAbout(profile) {
    db.collection('users')
      .doc(profile._id)
      .update({
        about: profile.about,
      })
      .then(function () {
        // console.log('User successfully updated!')
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }

  return {
    signUp,
    logIn,
    profile,
    setProfile,
  }
}
