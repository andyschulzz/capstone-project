import React from 'react'
import Exercises from './components/pages/Exercises'
import Workouts from './components/pages/Workouts'
import Navigation from './components/common/Navigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import useExercise from './components/hooks/useExercise'
import useWorkout from './components/hooks/useWorkout'
import useSearch from './components/hooks/useSearch'

function App() {
  const {
    exercises,
    selectedExercise,
    currentExercise,
    handleExerciseSelect,
    handleExerciseAdd,
    handleExerciseChange,
  } = useExercise()

  const {
    workouts,
    selectedWorkouts,
    handleWorkoutAdd,
    handleWorkoutTitle,
    handleWorkoutSubmit,
    handleSelectedWorkoutsReset,
    handleWorkoutDelete,
    handleWorkoutEdit,
    handleWorkoutChange,
  } = useWorkout()

  const { handleSearch, search } = useSearch()

  const searchedExercise = exercises.filter((exercise) =>
    exercise.name.toLowerCase().trim().includes(search)
  )

  return (
    <AppGrid>
      <Switch>
        <Redirect exact from="/" to="exercises" />
        <Route path="/exercises">
          <Exercises
            exercises={searchedExercise}
            search={search}
            selectedExercise={selectedExercise}
            currentExercise={currentExercise}
            handleExerciseSelect={handleExerciseSelect}
            handleExerciseAdd={handleExerciseAdd}
            handleExerciseChange={handleExerciseChange}
            handleSearch={handleSearch}
          />
        </Route>
        <Route path="/workouts">
          <Workouts
            exercises={searchedExercise}
            workouts={workouts}
            handleWorkoutAdd={handleWorkoutAdd}
            handleWorkoutTitle={handleWorkoutTitle}
            handleWorkoutSubmit={handleWorkoutSubmit}
            selectedWorkouts={selectedWorkouts}
            handleWorkoutDelete={handleWorkoutDelete}
            handleWorkoutEdit={handleWorkoutEdit}
            handleWorkoutChange={handleWorkoutChange}
          />
        </Route>
      </Switch>
      <Navigation handleSelectedWorkoutsReset={handleSelectedWorkoutsReset} />
    </AppGrid>
  )
}

export default App

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: auto 48px;
  position: fixed;
  width: 100%;
  height: 100%;
`
