import React from 'react'
import styled from 'styled-components/macro'

export default function ExerciseList({ exerciseData }) {
  return (
    <Wrapper>
      {exerciseData.map(exercise => {
        return <div>{exercise.name}</div>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 20px 30px;
  gap: 15px;
  overflow-y: auto;
  scroll-behavior: smooth;
`
