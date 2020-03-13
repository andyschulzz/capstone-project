import React from 'react'
import PageLayout from './PageLayout'
import WorkoutList from '../Workout/WorkoutList'
import Add from '../Workout/Add'
import WorkoutDetails from '../Workout/WorkoutDetails'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'

Workouts.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
  handleWorkoutSubmit: PropTypes.func.isRequired,
  handleWorkoutTitle: PropTypes.func.isRequired,
  selectedWorkouts: PropTypes.array.isRequired,
  workouts: PropTypes.array.isRequired,
}

export default function Workouts({
  exercises,
  handleWorkoutAdd,
  handleWorkoutSubmit,
  handleWorkoutTitle,
  selectedWorkouts,
  workouts,
}) {
  const { path } = useRouteMatch()
  return (
    <PageLayout title="Workouts">
      <Switch>
        <Route exact path={path}>
          <WorkoutList workouts={workouts} />
        </Route>
        <Route path={`${path}/add`}>
          <Add
            exercises={exercises}
            handleWorkoutAdd={handleWorkoutAdd}
            handleWorkoutTitle={handleWorkoutTitle}
            selectedWorkouts={selectedWorkouts}
          />
        </Route>
        <Route path={`${path}/details`}>
          <WorkoutDetails
            selectedWorkouts={selectedWorkouts}
            handleWorkoutSubmit={handleWorkoutSubmit}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
