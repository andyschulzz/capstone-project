import React, { useEffect, useState } from 'react'
import List from '../Exercise/List'
import Add from '../Exercise/Add'
import Details from '../Exercise/Details'
import Edit from '../Exercise/Edit'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import PageLayout from './PageLayout'
import PropTypes from 'prop-types'

Exercises.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
  handleExerciseAdd: PropTypes.func.isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
  selectedExerciseId: PropTypes.string,
}

export default function Exercises({
  exercises,
  currentExercise,
  handleExerciseSelect,
  handleExerciseAdd,
  handleExerciseChange,
  selectedExercise,
  search,
  handleSearch,
}) {
  const { path } = useRouteMatch()
  return (
    <PageLayout title="Exercises">
      <Switch>
        <Route exact path={path}>
          <List
            exercises={exercises}
            handleExerciseSelect={handleExerciseSelect}
            handleSearch={handleSearch}
            search={search}
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
            exercises={exercises}
          />
        </Route>
      </Switch>
    </PageLayout>
  )
}
