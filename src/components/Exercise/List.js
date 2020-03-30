import React from 'react'
import SearchBox from '../common/SearchBox'
import { useRouteMatch, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as S from './List.styles'
import PropTypes from 'prop-types'
import ExerciseList from './ExerciseList'

List.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
}

export default function List({
  exercises,
  handleExerciseSelect,
  handleSearch,
  search,
}) {
  const { url } = useRouteMatch()
  const { register, handleSubmit, reset } = useForm({ mode: 'onChange' })

  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <S.ButtonAdd as={Link} to={`${url}/add`}>
          Add
        </S.ButtonAdd>
        <SearchBox
          register={register}
          onSubmit={handleSubmit(onSubmit)}
          reset={reset}
          search={search}
        />
      </S.ButtonWrapper>
      {exercises.length ? (
        <ExerciseList
          exercises={exercises}
          handleExerciseSelect={handleExerciseSelect}
        />
      ) : (
        <S.Container>No exercise found!</S.Container>
      )}
    </S.Wrapper>
  )

  function onSubmit(userInput) {
    handleSearch(userInput)
  }
}
