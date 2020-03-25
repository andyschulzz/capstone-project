import { useState, useEffect, useCallback } from 'react'
import { workoutsRef } from '../../firebase'
import useExercise from './useExercise'
import useServices from './useServices'

export default function useWorkout() {
  const [workouts, setWorkouts] = useState([])
  const [selectedWorkouts, setSelectedWorkouts] = useState([])
  const [update, updateState] = useState()
  const { exercises } = useExercise()
  const { getData, deleteData, postWorkout, patchWorkout } = useServices()
  const forceUpdate = useCallback(() => updateState({}), [])

  useEffect(() => {
    getData(workoutsRef).then(setWorkouts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getData(workoutsRef).then(setWorkouts)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [update])

  function handleWorkoutAdd(id) {
    const newExercises = [...exercises]
    const selectedExercise = newExercises.filter(
      (exercise) => exercise.id === id
    )
    const isAlreadyAdded = selectedWorkouts.some((workout) =>
      selectedExercise.includes(workout)
    )
    const newWorkouts = isAlreadyAdded
      ? selectedWorkouts.filter((workout) => workout.id !== id)
      : [...selectedWorkouts, ...selectedExercise]
    setSelectedWorkouts(newWorkouts)
  }

  function handleWorkoutDelete(index) {
    const newWorkouts = [...workouts]
    const workoutToDelete = newWorkouts[index]
    const key = Object.keys(workoutToDelete)[0]
    const documentId = workoutToDelete[key].title
    deleteData(workoutsRef, documentId).then(forceUpdate())
  }

  function handleWorkoutEdit(index) {
    const newWorkouts = [...workouts]
    setSelectedWorkouts(newWorkouts[index])
  }

  function handleWorkoutTitle(title) {
    const addTitle = selectedWorkouts.map((workout) => ({ ...workout, title }))
    setSelectedWorkouts(addTitle)
  }

  function handleWorkoutChange(data) {
    let title
    Object.entries(selectedWorkouts).forEach(([key, value], index) => {
      title = selectedWorkouts[key].title
      selectedWorkouts[key].reps = data.reps[index]
      selectedWorkouts[key].sets = data.sets[index]
      selectedWorkouts[key].weight = data.weight[index]
      selectedWorkouts[key].title = data.name
    })
    patchWorkout(workoutsRef, title, selectedWorkouts)
  }

  function handleWorkoutSubmit(data) {
    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj[[item[key]]] = item), obj), {})

    const addDetails = selectedWorkouts.map((workout, index) => ({
      ...workout,
      reps: data.reps[index],
      sets: data.sets[index],
      weight: data.weight[index],
    }))

    const workout = convertArrayToObject(addDetails, 'id')
    const newWorkoutList = [...workouts, workout]

    postWorkout(workoutsRef, workout).then(setWorkouts(newWorkoutList))
    setSelectedWorkouts({})
  }

  function handleSelectedWorkoutsReset() {
    setSelectedWorkouts({})
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
