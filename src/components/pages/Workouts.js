import React from 'react'
import PageLayout from './PageLayout'
import WorkoutList from '../Workout/WorkoutList'
import WorkoutAdd from '../Workout/WorkoutAdd'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

export default function Workouts({
  exercises,
  handleExerciseSelect,
  handleExerciseAdd,
  handleExerciseChange,
  selectedExercise,
}) {
  let { path } = useRouteMatch()
  return (
    <PageLayout title="Workouts">
      <Switch>
        <Route exact path={path}>
          <WorkoutList />
        </Route>
        <Route path={`${path}/add`}>
          <WorkoutAdd.js
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
