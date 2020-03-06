import React, { useState } from 'react'
import Exercises from './components/pages/Exercises'
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
          />
        </Route>
      </Switch>
    </AppGrid>
  )

  function handleExerciseSelect(id) {
    setSelectedExerciseId(id)
  }

  function handleExerciseAdd(name, type, instructions) {
    console.log(name, 'trigger?')
    const newExercise = {
      id: uuidv4(),
      name,
      type,
      instructions,
    }
    console.log(newExercise, 'newEx')
    const filteredExercises = exercises.filter(
      exercise => exercise.name === name
    )
    if (exercises.some(exercise => filteredExercises.includes(exercise))) {
      return
    }
    const newExercises = [...exercises, newExercise]
    setExercises(newExercises)
  }
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  width: 100%;
  height: 100%;
`
