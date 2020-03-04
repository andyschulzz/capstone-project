import React from 'react'
import styled from 'styled-components/macro'
import PageLayout from '../pages/PageLayout'

export default function ExerciseDetails({ exercise }) {
  return (
    <PageLayout title="Exercises">
      <ExerciseGrid>
        <Title>Name</Title>
        <Text disabled value={exercise.name} />
        <Title description>Instructions</Title>
        <Text description disabled value={exercise.instructions} />
      </ExerciseGrid>
    </PageLayout>
  )
}

const ExerciseGrid = styled.section`
  display: grid;
  max-height: 100%;
  overflow-y: auto;
  border-left: 1px solid black;
  margin-bottom: 20px;
  padding: 30px;
`

const Title = styled.div`
  font-weight: bold;
`

const Text = styled.textarea`
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  font-size: inherit;
  padding: 5px 10px;
  outline: none;
  width: 100%;
  height: ${props => (props.description ? '400px' : '50px')};
  resize: none;
  background-color: #fff;
  color: #333;
`
