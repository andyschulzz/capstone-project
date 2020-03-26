import React from 'react'
import Exercises from './components/pages/Exercises'
import Workouts from './components/pages/Workouts'
import Navigation from './components/common/Navigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import useExercise from './components/hooks/useExercise'
import useWorkout from './components/hooks/useWorkout'
import useSearch from './components/hooks/useSearch'
import AuthProvider, { AuthConsumer } from './components/Auth/AuthContext'
import UserForm from './components/pages/UserForm'
import SignUp from './components/pages/SignUp'
import useUserServices from './components/hooks/useUserServices'

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
    workoutExercises,
    selectedWorkouts,
    handleWorkoutExercises,
    handleWorkoutTitle,
    handleWorkoutAdd,
    handleSelectedWorkoutsReset,
    handleWorkoutDelete,
    handleWorkoutEdit,
    handleWorkoutChange,
  } = useWorkout()

  const { handleSearch, search } = useSearch()

  const { profile, setProfile } = useUserServices()

  const searchedExercise = exercises.filter((exercise) =>
    exercise.name.toLowerCase().trim().includes(search)
  )

  return (
    <AuthProvider profile={profile} setProfile={setProfile}>
      <AuthConsumer>
        {({ user }) => (
          <AppGrid>
            <Switch>
              <Redirect exact from="/" to="exercises" />
              <Route path="/exercises">
                {user && user.id ? (
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
                ) : (
                  <UserForm profile={profile} setProfile={setProfile} />
                )}
              </Route>
              <Route path="/workouts">
                {user && user.id ? (
                  <Workouts
                    exercises={searchedExercise}
                    workouts={workouts}
                    workoutExercises={workoutExercises}
                    selectedWorkouts={selectedWorkouts}
                    handleWorkoutExercises={handleWorkoutExercises}
                    handleWorkoutTitle={handleWorkoutTitle}
                    handleWorkoutAdd={handleWorkoutAdd}
                    handleWorkoutDelete={handleWorkoutDelete}
                    handleWorkoutEdit={handleWorkoutEdit}
                    handleWorkoutChange={handleWorkoutChange}
                  />
                ) : (
                  <UserForm profile={profile} setProfile={setProfile} />
                )}
              </Route>
              <Route exact path="/signup">
                <SignUp profile={profile} setProfile={setProfile} />
              </Route>
            </Switch>
            {user && user.id && (
              <Navigation
                handleSelectedWorkoutsReset={handleSelectedWorkoutsReset}
              />
            )}
          </AppGrid>
        )}
      </AuthConsumer>
    </AuthProvider>
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
