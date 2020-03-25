import { useState, useEffect } from 'react'
import { exercisesRef } from '../../firebase'
import useServices from './useServices'

export default function useExercise() {
  const { getData, patchData, postData } = useServices()
  const [exercises, setExercises] = useState([])
  const [selectedExercise, setSelectedExercise] = useState([])

  useEffect(() => {
    getData(exercisesRef).then(setExercises)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleExerciseSelect(id) {
    const selectedExercise = exercises.find((exercise) => exercise.id === id)
    setSelectedExercise(selectedExercise)
  }

  function handleExerciseAdd(data) {
    const newExercise = {
      ...data,
      image: '/images/placeholder2.png',
    }
    const filteredExercises = exercises.filter(
      (exercise) => exercise.name === data.name
    )
    if (exercises.some((exercise) => filteredExercises.includes(exercise))) {
      return
    }
    postData(exercisesRef, newExercise).then((newExercise) => {
      const newExercises = [...exercises, newExercise]
      setExercises(newExercises)
    })
    setSelectedExercise(newExercise)
  }

  function handleExerciseChange(exercise) {
    const newExercises = [...exercises]
    const index = newExercises.findIndex(
      (e) => e.name === selectedExercise.name
    )
    newExercises[index] = exercise
    patchData(exercisesRef, exercise.id, exercise).then(
      setExercises(newExercises)
    )
  }

  return {
    exercises,
    selectedExercise,
    handleExerciseSelect,
    handleExerciseAdd,
    handleExerciseChange,
  }
}
