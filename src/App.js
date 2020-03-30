import React from 'react'
import Exercises from './components/pages/Exercises'
import Workouts from './components/pages/Workouts'
import UserForm from './components/pages/UserForm'
import NoMatch from './components/pages/NoMatch'
import SignUp from './components/pages/SignUp'
import Navigation from './components/common/Navigation'
import { Route, Switch, Redirect } from 'react-router-dom'
import styled from 'styled-components/macro'
import useExercise from './components/hooks/useExercise'
import useWorkout from './components/hooks/useWorkout'
import useSearch from './components/hooks/useSearch'
import AuthProvider, { AuthConsumer } from './components/Auth/AuthContext'
import useUserServices from './components/hooks/useUserServices'

function App() {
  const {
    exercises,
    selectedExercise,
    currentExercise,
    handleExerciseAdd,
    handleExerciseChange,
  } = useExercise()

  const {
    workouts,
    setWorkouts,
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

  const { handleSearch, search, setSearch } = useSearch()

  const {
    signUp,
    logIn,
    resetPassword,
    profile,
    setProfile,
  } = useUserServices()

  return (
    <AuthProvider setProfile={setProfile} setWorkouts={setWorkouts}>
      <AuthConsumer>
        {({ user }) => (
          <AppGrid>
            <Switch>
              <Redirect exact from="/" to="exercises" />
              <Route path="/exercises">
                {user && user.id ? (
                  <Exercises
                    exercises={exercises}
                    search={search}
                    setSearch={setSearch}
                    selectedExercise={selectedExercise}
                    currentExercise={currentExercise}
                    handleExerciseAdd={handleExerciseAdd}
                    handleExerciseChange={handleExerciseChange}
                    handleSearch={handleSearch}
                  />
                ) : (
                  <UserForm
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route path="/workouts">
                {user && user.id ? (
                  <Workouts
                    exercises={exercises}
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
                  <UserForm
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route exact path="/signup">
                <SignUp
                  signUp={signUp}
                  profile={profile}
                  setProfile={setProfile}
                />
              </Route>
              <Route>
                <NoMatch />
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

  @media only screen and (min-device-width: 770px) {
    justify-content: center;
  }
`
