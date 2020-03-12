import { useState } from 'react'
import { exerciseData } from '../data/exercises'
import { v4 as uuidv4 } from 'uuid'

export default function useExercise() {
  const [exercises, setExercises] = useState(exerciseData)
  const [selectedExerciseId, setSelectedExerciseId] = useState()

  function handleExerciseSelect(id) {
    setSelectedExerciseId(id)
  }

  function handleExerciseAdd(data) {
    const newExercise = {
      id: uuidv4(),
      ...data,
    }
    console.log(newExercise)
    const filteredExercises = exercises.filter(
      exercise => exercise.name === data.name
    )
    if (exercises.some(exercise => filteredExercises.includes(exercise))) {
      return
    }
    const newExercises = [...exercises, newExercise]
    setSelectedExerciseId(newExercise.id)
    setExercises(newExercises)
  }

  function handleExerciseChange(exercise) {
    const newExercises = [...exercises]
    const index = newExercises.findIndex(e => e.id === selectedExerciseId)
    newExercises[index] = exercise
    setExercises(newExercises)
  }

  return {
    exercises,
    selectedExerciseId,
    handleExerciseSelect,
    handleExerciseAdd,
    handleExerciseChange,
  }
}
