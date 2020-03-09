import React from 'react'
import PageLayout from './PageLayout'
import WorkoutList from '../Workout/WorkoutList'
import { Switch, Route, useRouteMatch } from 'react-router-dom'

export default function Workouts() {
  let { path } = useRouteMatch()
  return (
    <PageLayout title="Workouts">
      <Switch>
        <Route exact path={path}>
          <WorkoutList />
        </Route>
      </Switch>
    </PageLayout>
  )
}
