import React, { useEffect } from 'react'
import List from '../Exercise/List'
import Add from '../Exercise/Add'
import Details from '../Exercise/Details'
import Edit from '../Exercise/Edit'
import { Switch, Route, useRouteMatch, useLocation } from 'react-router-dom'
import PageLayout from './PageLayout'
import PropTypes from 'prop-types'

Exercises.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
  handleExerciseAdd: PropTypes.func.isRequired,
  handleExerciseChange: PropTypes.func.isRequired,
  selectedExercise: PropTypes.object,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
}

export default function Exercises({
  exercises,
  handleExerciseSelect,
  handleExerciseAdd,
  handleExerciseChange,
  selectedExercise,
  search,
  setSearch,
  handleSearch,
}) {
  const { path } = useRouteMatch()
  const location = useLocation()

  const searchedExercise = exercises.filter((exercise) =>
    exercise.name.toLowerCase().trim().includes(search)
  )

  useEffect(() => {
    setSearch('')
  }, [location, setSearch])

  return (
    <PageLayout title="Exercises">
      <Switch>
        <Route exact path={path}>
          <List
            exercises={searchedExercise}
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
            setSearch={setSearch}
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
