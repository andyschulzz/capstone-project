import React, { useState } from 'react'
import Exercises from './components/pages/Exercises'
import Workouts from './components/pages/Workouts'
import { exerciseData } from './components/data/exercises'
import { Route, Switch, Redirect } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

function App() {
  const [exercises, setExercises] = useState(exerciseData)
  const [selectedExerciseId, setSelectedExerciseId] = useState()

  const selectedExercise = exercises.find(
    exercise => exercise.id === selectedExerciseId
  )
  return (
    <AppGrid>
      <Switch>
        <Redirect exact from="/" to="exercises" />
        <Route path="/exercises">
          <Exercises
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
            selectedExercise={selectedExercise}
            handleExerciseAdd={handleExerciseAdd}
            handleExerciseChange={handleExerciseChange}
          />
        </Route>
        <Route path="/workouts">
          <Workouts />
        </Route>
      </Switch>
    </AppGrid>
  )

  function handleExerciseSelect(id) {
    setSelectedExerciseId(id)
  }

  function handleExerciseAdd(name, type, instructions) {
    const newExercise = {
      id: uuidv4(),
      name,
      type,
      instructions,
    }
    const filteredExercises = exercises.filter(
      exercise => exercise.name === name
    )
    if (exercises.some(exercise => filteredExercises.includes(exercise))) {
      return
    }
    const newExercises = [...exercises, newExercise]
    setSelectedExerciseId(newExercise.id)
    setExercises(newExercises)
  }

  function handleExerciseChange(id, exercise) {
    const newExercises = [...exercises]
    const index = newExercises.findIndex(e => e.id === selectedExerciseId)
    newExercises[index] = exercise
    setExercises(newExercises)
  }
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  width: 100%;
  height: 100%;
`
