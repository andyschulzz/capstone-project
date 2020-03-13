import { useState } from 'react'
import useExercise from './useExercise'

export default function useWorkout() {
  const [workouts, setWorkouts] = useState([])
  const [selectedWorkouts, setSelectedWorkouts] = useState([])
  const { exercises } = useExercise()

  function handleWorkoutAdd(id) {
    const newExercises = [...exercises]
    const selectedExercise = newExercises.filter(exercise => exercise.id === id)
    const isAlreadyAdded = selectedWorkouts.some(workout =>
      selectedExercise.includes(workout)
    )
    const newWorkouts = isAlreadyAdded
      ? selectedWorkouts.filter(workout => workout.id !== id)
      : [...selectedWorkouts, ...selectedExercise]
    setSelectedWorkouts(newWorkouts)
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
