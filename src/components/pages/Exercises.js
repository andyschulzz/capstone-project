import React from 'react'
import ExerciseList from '../Exercise/ExerciseList'
import ExerciseAdd from '../Exercise/ExerciseAdd'
import ExerciseDetails from '../Exercise/ExerciseDetails'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PageLayout from './PageLayout'

export default function Exercises({
  exercises,
  handleExerciseSelect,
  handleExerciseAdd,
  selectedExercise,
}) {
  let { path } = useRouteMatch()
  console.log(path, 'path?')
  return (
    <PageLayout title="Exercises">
      <Switch>
        <Route exact path={path}>
          <ExerciseList
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
          />
        </Route>
        <Route path={`${path}/details/:id`}>
          <ExerciseDetails selectedExercise={selectedExercise} />
        </Route>
        <Route path={`${path}/add`}>
          <ExerciseAdd handleExerciseAdd={handleExerciseAdd} />
        </Route>
      </Switch>
    </PageLayout>
  )
}
