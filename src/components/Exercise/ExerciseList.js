import React from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'

export default function ExerciseList({ exerciseData, handleExerciseSelect }) {
  return (
    <ExerciseListStyled>
      {exerciseData.map((exercise, index) => {
        return (
          <Exercise
            key={exercise.id}
            {...exercise}
            index={index}
            handleExerciseSelect={handleExerciseSelect}
          />
        )
      })}
    </ExerciseListStyled>
  )
}

const ExerciseListStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 30px 0 30px 30px;
  gap: 15px;
  overflow-y: auto;
  scroll-behavior: smooth;
`
