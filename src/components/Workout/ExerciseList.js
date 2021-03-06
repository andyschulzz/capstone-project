import React from 'react'
import Exercise from './Exercise'
import * as S from './ExerciseList.styles'
import PropTypes from 'prop-types'

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutExercises: PropTypes.func,
}

const lettersAtoZ = [...Array(26)].map((_, i) =>
  String.fromCharCode('A'.charCodeAt(0) + i)
)

export default function ExerciseList({ exercises, handleWorkoutExercises }) {
  const renderExercises = lettersAtoZ.reduce((acc, letter) => {
    const letterExercises = filterExercises(letter)
    if (letterExercises.length !== 0) {
      acc.push(<S.Wrapper key={letter}>{letter}</S.Wrapper>)
      letterExercises.forEach((lc) => acc.push(lc))
    }
    return acc
  }, [])

  return <>{renderExercises}</>

  function filterExercises(letter) {
    const filter = exercises
      .filter((exercise) =>
        String(exercise.name).toUpperCase().startsWith(letter)
      )
      .map((exercise) => {
        return (
          <Exercise
            key={exercise.id}
            {...exercise}
            handleWorkoutExercises={handleWorkoutExercises}
          />
        )
      })
    return filter
  }
}
