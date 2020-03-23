export default function useServices() {
  function getData(dataRef) {
    return fetchData(dataRef)
  }

  function postData(dataRef, data) {
    return dataRef
      .add(data)
      .then(docRef => {
        const documentId = docRef.id
        dataRef.doc(documentId).update({
          id: documentId,
        })
        return documentId
      })
      .then(documentId => {
        return dataRef
          .doc(documentId)
          .get()
          .then(doc => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function postWorkout(dataRef, data) {
    return dataRef.add(data).then(docRef => {
      const documentId = docRef.id
      return dataRef
        .doc(documentId)
        .get()
        .then(doc => {
          if (doc.exists) {
            return doc.data()
          }
        })
    })
  }

  function patchData(dataRef, documentId, data) {
    return dataRef
      .doc(documentId)
      .update(data)
      .then(() => {
        return dataRef
          .doc(documentId)
          .get()
          .then(doc => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function fetchData(dataRef, data) {
    return dataRef.get().then(querySnapshot => {
      data = []
      querySnapshot.forEach(doc => {
        data.push(doc.data())
      })
      return data
    })
  }

  return {
    getData,
    postData,
    postWorkout,
    patchData,
    fetchData,
  }
}
