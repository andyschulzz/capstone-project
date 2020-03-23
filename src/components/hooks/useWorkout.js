import { useState, useEffect } from 'react'
import { workoutsRef } from '../../firebase'
import useExercise from './useExercise'
import useServices from './useServices'

export default function useWorkout() {
  const [workouts, setWorkouts] = useState([])
  const [selectedWorkouts, setSelectedWorkouts] = useState([])
  const { exercises } = useExercise()
  const { getData, patchData, postWorkout } = useServices()

  useEffect(() => {
    getData(workoutsRef).then(setWorkouts)
    console.log(workouts, 'workouts')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  function handleWorkoutDelete(title) {
    const newWorkouts = [...workouts]
    const removeWorkout = newWorkouts.filter(workout => workout.title !== title)
    setWorkouts(removeWorkout)
  }

  function handleWorkoutEdit(title) {
    const newWorkouts = [...workouts]
    const selectedWorkout = newWorkouts.filter(
      workout => workout.title === title
    )
    setSelectedWorkouts(selectedWorkout)
  }

  function handleWorkoutTitle(title) {
    const addTitle = selectedWorkouts.map(workout => ({ ...workout, title }))
    setSelectedWorkouts(addTitle)
  }

  function handleWorkoutChange(data) {
    const editWorkout = selectedWorkouts.map((workout, index) => ({
      ...workout,
      title: data.name,
      reps: data.reps[index],
      sets: data.sets[index],
      weight: data.weight[index],
    }))
    const newWorkouts = editWorkout.map(
      (workout, index) => (workouts[index] = workout)
    )
    setWorkouts(newWorkouts)
  }

  function handleWorkoutSubmit(data) {
    const convertArrayToObject = (array, key) =>
      array.reduce((obj, item) => ((obj[[item[key]]] = item), obj), {})

    const addDetails = selectedWorkouts.map((workout, index) => ({
      ...workout,
      reps: data.reps[index],
      sets: data.sets[index],
      weight: data.weight[index],
    }))

    const workout = convertArrayToObject(addDetails, 'id')
    console.log(workout, 'obj')
    const newWorkoutList = [...workouts, workout]
    console.log(newWorkoutList)

    postWorkout(workoutsRef, workout).then(setWorkouts(newWorkoutList))
    setSelectedWorkouts([])
  }

  function handleSelectedWorkoutsReset() {
    setSelectedWorkouts([])
  }

  return {
    workouts,
    exercises,
    selectedWorkouts,
    handleWorkoutAdd,
    handleWorkoutTitle,
    handleWorkoutSubmit,
    handleSelectedWorkoutsReset,
    handleWorkoutDelete,
    handleWorkoutEdit,
    handleWorkoutChange,
  }
}
