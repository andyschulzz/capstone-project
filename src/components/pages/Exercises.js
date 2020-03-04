import React from 'react'
import ExerciseList from '../Exercise/ExerciseList'
import ExerciseAdd from '../Exercise/ExerciseAdd'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PageLayout from './PageLayout'

export default function Exercises({ exercises, handleExerciseSelect }) {
  let { path } = useRouteMatch()
  console.log(exercises, 'Exercises')
  return (
    <PageLayout title="Exercises">
      <Switch>
        <Route exact path={path}>
          <ExerciseList
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
