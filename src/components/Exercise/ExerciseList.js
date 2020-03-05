import React from 'react'
import Exercise from './Exercise'
import Button from '../utils/Button'
import { useRouteMatch, Link } from 'react-router-dom'
import { Styled } from './ExerciseList.styles'

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
      <Styled.ButtonWrapper>
        <Button primary>
          <Link to={`${url}/add`}>Add</Link>
        </Button>
      </Styled.ButtonWrapper>
      <Styled.Wrapper>{renderExercises}</Styled.Wrapper>
    </section>
  )
}
