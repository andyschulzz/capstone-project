import React from 'react'
import List from '../Exercise/List'
import Add from '../Exercise/Add'
import Details from '../Exercise/Details'
import Edit from '../Exercise/Edit'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PageLayout from './PageLayout'

export default function Exercises({
  exercises,
  handleExerciseSelect,
  handleExerciseAdd,
  handleExerciseChange,
  selectedExerciseId,
}) {
  const selectedExercise = exercises.find(
    exercise => exercise.id === selectedExerciseId
  )
  const { path } = useRouteMatch()
  return (
    <PageLayout title="Exercises">
      <Switch>
        <Route exact path={path}>
          <List
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
          />
        </Route>
        <Route path={`${path}/details/:id`}>
          <Details {...selectedExercise} />
        </Route>
        <Route path={`${path}/add`}>
          <Add
            handleExerciseAdd={handleExerciseAdd}
            handleExerciseChange={handleExerciseChange}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <Edit
            {...selectedExercise}
            handleExerciseChange={handleExerciseChange}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
