import React, { useState } from 'react'
import Exercises from './components/pages/Exercises'
import ExerciseDetails from './components/Exercise/ExerciseDetails'
import { exerciseData } from './components/data/exercises'
import { Route, Switch } from 'react-router-dom'

function App() {
  const [exercises, setExercises] = useState(exerciseData)
  const [selectedExerciseId, setSelectedExerciseId] = useState()
  const [selectedExercise, setSelectedExercise] = useState([])

  const selectedEx = exercises.find(
    exercise => exercise.id === selectedExerciseId
  )

  return (
    <Switch>
      <Route exact path="/">
        <Exercises
          exerciseData={exerciseData}
          handleExerciseSelect={handleExerciseSelect}
          selectedExercise={selectedExercise}
        />
      </Route>
      <Route path="/details/:id">
        <ExerciseDetails exercise={selectedEx} />
      </Route>
    </Switch>
  )

  function handleExerciseSelect(id) {
    setSelectedExerciseId(id)
    const selectedExercise = exercises.find(
      exercise => exercise.id === selectedExerciseId
    )
    setSelectedExercise(selectedExercise)
    console.log(id, 'id')
    console.log(selectedExercise, 'selected Exercise')
  }
}

export default App
