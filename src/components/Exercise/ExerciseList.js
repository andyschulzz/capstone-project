import React from 'react'
import PropTypes from 'prop-types'
import * as S from './List.styles'
import Exercise from './Exercise'

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
}

function ExerciseList({ exercises }) {
  const lettersAtoZ = [...Array(26)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )

  const renderedExercises = lettersAtoZ.reduce((acc, letter) => {
    const letterExercises = filterExercises(letter)
    if (letterExercises.length) {
      acc.push(<S.Span key={letter}>{letter}</S.Span>)
      letterExercises.forEach((lc) => acc.push(lc))
    }
    return acc
  }, [])

  function filterExercises(letter) {
    const filter = exercises
      .filter((exercise) =>
        String(exercise.name).toUpperCase().startsWith(letter)
      )
      .map((exercise) => {
        return <Exercise key={exercise.id} {...exercise} />
      })
    return filter
  }
  return <>{renderedExercises}</>
}
export default ExerciseList
