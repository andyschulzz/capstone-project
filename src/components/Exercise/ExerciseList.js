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
  const { url } = useRouteMatch()

  function filterExercises(letter) {
    const filter = exercises
      .filter(exercise => String(exercise.name).startsWith(letter))
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

  const lettersAtoZ = [...Array(26)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )

  const renderExercises = lettersAtoZ.reduce((acc, letter) => {
    const letterExercises = filterExercises(letter)
    if (letterExercises.length !== 0) {
      acc.push(<S.Heading key={letter}>{letter}</S.Heading>)
      letterExercises.forEach(lc => acc.push(lc))
    }
    return acc
  }, [])

  return (
    <>
      <S.ButtonWrapper>
        <Button as={Link} to={`${url}/add`} primary="true">
          Add
        </Button>
      </S.ButtonWrapper>
      <S.Wrapper>{renderExercises}</S.Wrapper>
    </>
  )
}
