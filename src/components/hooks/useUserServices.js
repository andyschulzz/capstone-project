import { db, firebaseAuth } from '../../firebase'

function getUser(id) {
  // console.log('Getting user information ...')
  return db
    .collection('users')
    .doc(id)
    .get()
    .then(doc => {
      // console.log('User found in DB:', doc.exists)
      return doc.exists && doc.data()
    })
    .then(data => {
      return data
    })
    .catch(error => {
      console.error('Error writing document: ', error)
    })
}

async function signUp({ email, password, firstName, lastName }) {
  return await firebaseAuth
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      addUserToDB(res.user, firstName, lastName)
      return res
    })
    .catch(function(error) {
      console.error('Error creating new user: ', error)
      return error
    })
}

async function addUserToDB(user, firstName, lastName) {
  return await db
    .collection('users')
    .doc(user.uid)
    .set({
      _id: user.uid,
      firstName: firstName,
      lastName: lastName,
      email: user.email,
      registered: new Date().getTime(),
      emailVerified: user.emailVerified,
    })
    .then(function() {
      // console.log('User successfully stored in DB!')
      updateUsersDisplayName(firstName, lastName)
    })
    .catch(function(error) {
      console.error('Error writing document: ', error)
    })
}

async function updateUsersDisplayName(firstName, lastName) {
  return await firebaseAuth.currentUser
    .updateProfile({
      displayName: `${firstName} ${lastName}`,
    })
    .then(() => {
      // console.log("User's display name successfully updated.")
    })
    .then(() => {
      firebaseAuth.currentUser.sendEmailVerification()
    })
    .catch(error => {
      console.error(`Error updating user's display name:`, error)
    })
}

async function logIn({ email, password }) {
  return await firebaseAuth
    .signInWithEmailAndPassword(email, password)
    .then(res => res)
    .catch(error => error)
}

function updateUser(profile) {
  db.collection('users')
    .doc(profile._id)
    .set({
      ...profile,
    })
    .then(function() {
      // console.log('User successfully updated!')
    })
    .catch(function(error) {
      console.error('Error writing document: ', error)
    })
}
function updateAbout(profile) {
  db.collection('users')
    .doc(profile._id)
    .update({
      about: profile.about,
    })
    .then(function() {
      // console.log('User successfully updated!')
    })
    .catch(function(error) {
      console.error('Error writing document: ', error)
    })
}


export {
  signUp,
  updateUser,
  updateAbout,
  getUser,
  logIn,
}