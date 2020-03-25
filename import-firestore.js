const argv = require('minimist')(process.argv.slice(2))

if (!Object.prototype.hasOwnProperty.call(argv, 'o')) {
  console.error(
    'You missed to set the -o flag to define the import options file path!'
  )
  process.exit()
}

const admin = require('firebase-admin')
const {
  collectionKey,
  importDataPath,
  serviceAccountFilePath,
  databaseURL,
} = require('./import-firestore-options.json')
const importDocuments = require(importDataPath)

const serviceAccount = require(serviceAccountFilePath)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL,
})

const firestore = admin.firestore()

const importCollection = []
let importCount = 0

importDocuments.forEach(doc => {
  importCollection.push(
    firestore
      .collection(collectionKey)
      .add(doc)
      .then(docRef => {
        const documentId = docRef.id

        firestore
          .collection(collectionKey)
          .doc(documentId)
          .update({
            id: documentId,
          })

        return documentId
      })
  )
  ++importCount
})

Promise.all(importCollection)
  .then(() => {
    console.info(
      `Imported ${importCount} items into the collection ${collectionKey}`
    )
  })
  .catch(e => console.error('Ops, something went wrong with your import!', e))
