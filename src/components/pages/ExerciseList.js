import React from 'react'
import Exercise from '../Exercise/Exercise.js'
import PageLayout from './PageLayout'
import styled from 'styled-components/macro'

export default function ExerciseList({ exerciseData }) {
  return (
    <PageLayout title="Exercises">
      <ExerciseListStyled>
        {exerciseData.map(exercise => {
          return <Exercise key={exercise.id} {...exercise} />
        })}
      </ExerciseListStyled>
    </PageLayout>
  )
}

const ExerciseListStyled = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 30px;
  gap: 15px;
  overflow-y: auto;
  scroll-behavior: smooth;
`
