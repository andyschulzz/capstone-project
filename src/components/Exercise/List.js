import React from 'react'
import Exercise from './Exercise'
import SearchBox from '../common/SearchBox'
import { useRouteMatch, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import * as S from './List.styles'
import PropTypes from 'prop-types'

List.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
}
const lettersAtoZ = [...Array(26)].map((_, i) =>
  String.fromCharCode('A'.charCodeAt(0) + i)
)

export default function List({
  exercises,
  handleExerciseSelect,
  handleSearch,
  search,
}) {
  const { url } = useRouteMatch()
  const { register, handleSubmit, reset } = useForm({ mode: 'onChange' })

  const renderedExercises = lettersAtoZ.reduce((acc, letter) => {
    const letterExercises = filterExercises(letter)
    if (letterExercises.length) {
      acc.push(<S.Span key={letter}>{letter}</S.Span>)
      letterExercises.forEach((lc) => acc.push(lc))
    }
    return acc
  }, [])
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
        renderedExercises
      ) : (
        <S.Container>No exercise found!</S.Container>
      )}
    </S.Wrapper>
  )

  function filterExercises(letter) {
    const filter = exercises
      .filter((exercise) =>
        String(exercise.name).toUpperCase().startsWith(letter)
      )
      .map((exercise, index) => {
        return (
          <Exercise
            key={exercise.id}
            {...exercise}
            index={index}
            handleExerciseSelect={handleExerciseSelect}
          />
        )
      })
    return filter
  }

  function onSubmit(userInput) {
    handleSearch(userInput)
  }
}
