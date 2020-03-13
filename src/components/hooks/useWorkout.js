import { useState } from 'react'
import useExercise from './useExercise'

export default function useWorkout() {
  const [workouts, setWorkouts] = useState([])
  const [selectedWorkouts, setSelectedWorkouts] = useState([])
  const { exercises } = useExercise()

  function handleWorkoutAdd(id) {
    const newExercises = [...exercises]
    const selectedExercise = newExercises.filter(exercise => exercise.id === id)
    if (selectedWorkouts.some(workout => selectedExercise.includes(workout))) {
      return setSelectedWorkouts(
        selectedWorkouts.filter(workout => workout.id !== id)
      )
    }
    const newWorkout = [...selectedWorkouts, ...selectedExercise]
    setSelectedWorkouts(newWorkout)
  }

  function handleWorkoutTitle(title) {
    const addTitle = selectedWorkouts.map(workout => ({ ...workout, title }))
    setSelectedWorkouts(addTitle)
  }

  function handleWorkoutSubmit(data) {
    const addDetails = selectedWorkouts.map((workout, index) => ({
      ...workout,
      reps: data.reps[index],
      sets: data.sets[index],
      weight: data.weight[index],
    }))
    const newWorkoutList = [...workouts, ...addDetails]
    setWorkouts(newWorkoutList)
    setSelectedWorkouts([])
  }

  return {
    workouts,
    exercises,
    selectedWorkouts,
    handleWorkoutAdd,
    handleWorkoutTitle,
    handleWorkoutSubmit,
  }
}
