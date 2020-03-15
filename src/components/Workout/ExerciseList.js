import React from 'react'
import Exercise from './Exercise'
import * as S from './ExerciseList.styles'
import PropTypes from 'prop-types'

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
}

export default function ExerciseList({ exercises, handleWorkoutAdd }) {
  const lettersAtoZ = [...Array(26)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )

  const renderExercises = lettersAtoZ.reduce((acc, letter) => {
    const letterExercises = filterExercises(letter)
    if (letterExercises.length !== 0) {
      acc.push(<S.Wrapper key={letter}>{letter}</S.Wrapper>)
      letterExercises.forEach(lc => acc.push(lc))
    }
    return acc
  }, [])

  return <>{renderExercises}</>

  function filterExercises(letter) {
    const filter = exercises
      .filter(exercise => String(exercise.name).startsWith(letter))
      .map((exercise, index) => {
        return (
          <Exercise
            key={exercise.id}
            {...exercise}
            handleWorkoutAdd={handleWorkoutAdd}
          />
        )
      })
    return filter
  }
}
