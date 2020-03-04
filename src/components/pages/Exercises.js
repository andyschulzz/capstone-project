import React from 'react'
import ExerciseList from '../Exercise/ExerciseList'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PageLayout from './PageLayout'

export default function Exercises({
  exerciseData,
  handleExerciseSelect,
  selectedExercise,
}) {
  let { path } = useRouteMatch()

  return (
    <PageLayout title="Exercises">
      <Switch>
        <Route exact path={path}>
          <ExerciseList
            exerciseData={exerciseData}
            handleExerciseSelect={handleExerciseSelect}
            selectedExercise={selectedExercise}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
