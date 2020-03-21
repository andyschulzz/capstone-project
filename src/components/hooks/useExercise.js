import { useState, useEffect } from 'react'
import { exerciseData } from '../data/exercises'
import { v4 as uuidv4 } from 'uuid'
import { exercisesRef } from '../../firebase'

export default function useExercise() {
  const [exercises, setExercises] = useState(exerciseData)
  const [selectedExerciseId, setSelectedExerciseId] = useState()

  function handleExerciseSelect(id) {
    setSelectedExerciseId(id)
  }

  function handleExerciseAdd(data) {
    const newExercise = {
      ...data,
    }
    const filteredExercises = exercises.filter(
      exercise => exercise.name === data.name
    )
    if (exercises.some(exercise => filteredExercises.includes(exercise))) {
      return
    }
    // const newExercises = [...exercises, newExercise]
    postExercise(newExercise).then(exercise => {
      setExercises([...exercises, exercise])
    })
    setSelectedExerciseId(newExercise.id)
    // setExercises(newExercises)
  }

  function handleExerciseChange(exercise) {
    const newExercises = [...exercises]
    const index = newExercises.findIndex(e => e.id === selectedExerciseId)
    newExercises[index] = exercise
    setExercises(newExercises)
  }

  function getExercises() {
    return fetchExercises()
  }

  function postExercise(data) {
    return exercisesRef
      .add(data)
      .then(docRef => {
        const documentId = docRef.id

        exercisesRef.doc(documentId).update({
          _id: documentId,
        })

        return documentId
      })
      .then(documentId => {
        return exercisesRef
          .doc(documentId)
          .get()
          .then(doc => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function patchExercises(documentId, data) {
    return exercisesRef
      .doc(documentId)
      .update(data)
      .then(() => {
        return exercisesRef
          .doc(documentId)
          .get()
          .then(doc => {
            if (doc.exists) {
              return doc.data()
            }
          })
      })
  }

  function fetchExercises() {
    return exercisesRef.get().then(querySnapshot => {
      let exercisesData = []
      querySnapshot.forEach(doc => {
        exercisesData.push(doc.data())
      })

      return exercisesData
    })
  }

  return {
    exercises,
    selectedExerciseId,
    handleExerciseSelect,
    handleExerciseAdd,
    handleExerciseChange,
    fetchExercises,
    patchExercises,
    postExercise,
    getExercises,
  }
}
