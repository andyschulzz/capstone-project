import React from 'react'
import styled from 'styled-components/macro'
import Exercise from './Exercise'
import Button from '../utils/Button'
import { Link } from 'react-router-dom'

export default function ExerciseList({ exerciseData, handleExerciseSelect }) {
  const renderExercises = exerciseData.map((exercise, index) => {
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
    <>
      <ButtonWrapper>
        <Button primary>
          <Link to={`/add`}>Add</Link>
        </Button>
      </ButtonWrapper>
      <Wrapper>{renderExercises}</Wrapper>
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  margin: 20px auto 10px 30px;
  top: 0;

  & a {
    color: white;
    text-decoration: none;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 30px 30px;
  gap: 15px;
  overflow-y: auto;
  scroll-behavior: smooth;
`
