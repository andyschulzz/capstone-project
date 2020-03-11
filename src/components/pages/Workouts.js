import React from 'react'
import PageLayout from './PageLayout'
import WorkoutList from '../Workout/WorkoutList'
import WorkoutAdd from '../Workout/WorkoutAdd'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

export default function Workouts({
  exercises,
  handleExerciseSelect,
  handleWorkoutAdd,
  handleWorkoutSubmit,
  selectedWorkouts,
  workouts,
}) {
  let { path } = useRouteMatch()
  return (
    <PageLayout title="Workouts">
      <Switch>
        <Route exact path={path}>
          <WorkoutList workouts={workouts} />
        </Route>
        <Route path={`${path}/add`}>
          <WorkoutAdd
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
            handleWorkoutAdd={handleWorkoutAdd}
            handleWorkoutSubmit={handleWorkoutSubmit}
            selectedWorkouts={selectedWorkouts}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
