import { useState, useEffect, useCallback } from 'react'
import { workoutsRef } from '../../firebase'
import useExercise from './useExercise'
import useServices from './useServices'

export default function useWorkout() {
  const [workouts, setWorkouts] = useState([])
  const [selectedWorkouts, setSelectedWorkouts] = useState({})
  const [workoutExercises, setWorkoutExercises] = useState([])
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

  console.log(exercises, 'exercisesOnLoad')

  function handleWorkoutExercises(id) {
    const newExercises = [...exercises]
    const selectedExercise = newExercises.filter(
      (exercise) => exercise.id === id
    )
    const isAlreadyAdded = workoutExercises.some((workout) =>
      selectedExercise.includes(workout)
    )
    const newWorkouts = isAlreadyAdded
      ? workoutExercises.filter((workout) => workout.id !== id)
      : [...workoutExercises, ...selectedExercise]
    setWorkoutExercises(newWorkouts)
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
    const workoutTitle = workoutExercises.map((workout) => ({
      ...workout,
      title,
    }))
    setWorkoutExercises(workoutTitle)
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

  function handleWorkoutAdd(data) {
    const convertArrayToObject = (array, key) =>
      // eslint-disable-next-line no-sequences
      array.reduce((obj, item) => ((obj[[item[key]]] = item), obj), {})

    const addDetails = workoutExercises.map((workout, index) => ({
      ...workout,
      reps: data.reps[index],
      sets: data.sets[index],
      weight: data.weight[index],
    }))

    const workout = convertArrayToObject(addDetails, 'id')
    const newWorkoutList = [...workouts, workout]

    postWorkout(workoutsRef, workout).then(setWorkouts(newWorkoutList))
    setWorkoutExercises([])
  }

  function handleSelectedWorkoutsReset() {
    setWorkoutExercises([])
  }

  return {
    workouts,
    exercises,
    selectedWorkouts,
    workoutExercises,
    handleWorkoutExercises,
    handleWorkoutTitle,
    handleWorkoutAdd,
    handleSelectedWorkoutsReset,
    handleWorkoutDelete,
    handleWorkoutEdit,
    handleWorkoutChange,
  }
}
