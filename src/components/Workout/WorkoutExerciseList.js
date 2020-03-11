import React from 'react'
import WorkoutExercise from './WorkoutExercise'
import * as S from './WorkoutExerciseList.styles'

export default function WorkoutExerciseList({
  exercises,
  handleExerciseSelect,
  handleWorkoutAdd,
}) {
  const lettersAtoZ = [...Array(26)].map((_, i) =>
    String.fromCharCode('A'.charCodeAt(0) + i)
  )

  const renderExercises = lettersAtoZ.reduce((acc, letter) => {
    const letterExercises = filterExercises(letter)
    if (letterExercises.length !== 0) {
      acc.push(<S.Group key={letter}>{letter}</S.Group>)
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
          <WorkoutExercise
            key={exercise.id}
            {...exercise}
            handleExerciseSelect={handleExerciseSelect}
            handleWorkoutAdd={handleWorkoutAdd}
          />
        )
      })
    return filter
  }
}
