import React, { useState } from 'react'
import Exercises from './components/pages/Exercises'
import ExerciseDetails from './components/Exercise/ExerciseDetails'
import ExerciseAdd from './components/Exercise/ExerciseAdd'
import { exerciseData } from './components/data/exercises'
import { Route, Switch } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

function App() {
  const [exercises, setExercises] = useState(exerciseData)
  const [selectedExerciseId, setSelectedExerciseId] = useState()

  const selectedExercise = exercises.find(
    exercise => exercise.id === selectedExerciseId
  )
  console.log(exercises, 'on render')
  return (
    <AppGrid>
      <Switch>
        <Route exact path="/">
          <Exercises
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
          />
        </Route>
        <Route path="/details/:id">
          <ExerciseDetails exercise={selectedExercise} />
        </Route>
        <Route path="/add">
          <ExerciseAdd handleExerciseAdd={handleExerciseAdd} />
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
    setExercises([...exercises, newExercise])
  }
}
export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
`
