import { firebaseAuth } from '../../firebase'

export default function useServices() {
  function getData(dataRef) {
    return fetchData(dataRef)
  }

  function postData(dataRef, data) {
    return dataRef
      .add(data)
      .then((docRef) => {
        const documentId = docRef.id
        dataRef.doc(documentId).update({
          id: documentId,
        })
        return documentId
      })
      .then((documentId) => {
        return dataRef
          .doc(documentId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function postWorkout(dataRef, data) {
    const key = Object.keys(data)[0]
    const documentId = data[key].title
    return dataRef
      .doc(firebaseAuth.currentUser.uid)
      .collection('workouts')
      .doc(documentId)
      .set(data)
      .then(() => {
        dataRef
          .doc(documentId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function patchWorkout(dataRef, userId, documentId, data) {
    const key = Object.keys(data)[0]
    const newId = data[key].title
    return dataRef
      .doc(userId)
      .collection('workouts')
      .doc(newId)
      .set(data)
      .then(() => {
        if (documentId !== newId) {
          return dataRef
            .doc(userId)
            .collection('workouts')
            .doc(documentId)
            .delete()
        }
      })
      .then(() => {
        return dataRef
          .doc(documentId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function deleteData(dataRef, userId, documentId) {
    return dataRef.doc(userId).collection('workouts').doc(documentId).delete()
  }

  function patchData(dataRef, documentId, data) {
    return dataRef
      .doc(documentId)
      .update(data)
      .then(() => {
        return dataRef
          .doc(documentId)
          .get()
          .then((doc) => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function fetchData(dataRef, data) {
    return dataRef.get().then((querySnapshot) => {
      data = []
      querySnapshot.forEach((doc) => {
        data.push(doc.data())
      })
      return data
    })
  }

  return {
    getData,
    postData,
    postWorkout,
    patchWorkout,
    patchData,
    fetchData,
    deleteData,
  }
}
