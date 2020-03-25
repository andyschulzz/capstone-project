import React from 'react'
import PageLayout from './PageLayout'
import WorkoutList from '../Workout/WorkoutList'
import Add from '../Workout/Add'
import Edit from '../Workout/Edit'
import WorkoutDetails from '../Workout/WorkoutDetails'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'

Workouts.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutExercises: PropTypes.func.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
  handleWorkoutTitle: PropTypes.func.isRequired,
  selectedWorkouts: PropTypes.object.isRequired,
  workouts: PropTypes.array.isRequired,
}

export default function Workouts({
  exercises,
  workouts,
  selectedWorkouts,
  workoutExercises,
  handleWorkoutExercises,
  handleWorkoutAdd,
  handleWorkoutTitle,
  handleWorkoutDelete,
  handleWorkoutEdit,
  handleWorkoutChange,
}) {
  const { path } = useRouteMatch()
  return (
    <PageLayout title="Workouts">
      <Switch>
        <Route exact path={path}>
          <WorkoutList
            workouts={workouts}
            handleWorkoutDelete={handleWorkoutDelete}
            handleWorkoutEdit={handleWorkoutEdit}
          />
        </Route>
        <Route path={`${path}/add`}>
          <Add
            exercises={exercises}
            handleWorkoutExercises={handleWorkoutExercises}
            handleWorkoutTitle={handleWorkoutTitle}
            workoutExercises={workoutExercises}
          />
        </Route>
        <Route path={`${path}/details`}>
          <WorkoutDetails
            workoutExercises={workoutExercises}
            handleWorkoutAdd={handleWorkoutAdd}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <Edit
            selectedWorkouts={selectedWorkouts}
            handleWorkoutChange={handleWorkoutChange}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
