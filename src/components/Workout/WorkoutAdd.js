import React from 'react'
import WorkoutExercise from './WorkoutExercise'
import Button from '../common/Button'
import { useRouteMatch, Link } from 'react-router-dom'
import * as S from './WorkoutAdd.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

WorkoutAdd.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
}

export default function WorkoutAdd({ exercises, handleExerciseSelect }) {
  const { url } = useRouteMatch()
  const { register } = useForm()

  function filterExercises(letter) {
    const filter = exercises
      .filter(exercise => String(exercise.name).startsWith(letter))
      .map((exercise, index) => {
        return (
          <WorkoutExercise
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
        <S.Textarea
          ref={register({ required: true })}
          type="text"
          name="name"
          id="name"
          placeholder="Name your workout"
        />
      </S.ButtonWrapper>
      <S.Wrapper>{renderExercises}</S.Wrapper>
    </>
  )
}
