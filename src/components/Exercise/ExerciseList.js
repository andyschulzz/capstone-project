import React from 'react'
import Exercise from './Exercise'
import Button from '../common/Button'
import { useRouteMatch, Link } from 'react-router-dom'
import * as S from './ExerciseList.styles'
import PropTypes from 'prop-types'

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
}

export default function ExerciseList({ exercises, handleExerciseSelect }) {
  let { url } = useRouteMatch()
  const renderExercises = exercises.map((exercise, index) => {
    return (
      <Exercise
        key={exercise.id}
        {...exercise}
        index={index}
        handleExerciseSelect={handleExerciseSelect}
      />
    )
  })

  return (
    <section>
      <S.ButtonWrapper>
        <Button primary>
          <Link to={`${url}/add`}>Add</Link>
        </Button>
      </S.ButtonWrapper>
      <S.Wrapper>{renderExercises}</S.Wrapper>
    </section>
  )
}
