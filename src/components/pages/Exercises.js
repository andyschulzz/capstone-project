import React from 'react'
import ExerciseList from '../Exercise/ExerciseList'
import ExerciseAdd from '../Exercise/ExerciseAdd'
import ExerciseDetails from '../Exercise/ExerciseDetails'
import ExerciseEdit from '../Exercise/ExerciseEdit'
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
          <ExerciseList
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
          />
        </Route>
        <Route path={`${path}/details/:id`}>
          <ExerciseDetails {...selectedExercise} />
        </Route>
        <Route path={`${path}/add`}>
          <ExerciseAdd
            handleExerciseAdd={handleExerciseAdd}
            handleExerciseChange={handleExerciseChange}
          />
        </Route>
        <Route path={`${path}/edit`}>
          <ExerciseEdit
            {...selectedExercise}
            handleExerciseChange={handleExerciseChange}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
