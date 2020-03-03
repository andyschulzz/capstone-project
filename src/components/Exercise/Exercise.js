import React from 'react'
import styled from 'styled-components/macro'

export default function Exercise({ name, type }) {
  return (
    <ExerciseStyled>
      <Name>{name}</Name>
      <Type>{type}</Type>
    </ExerciseStyled>
  )
}

const ExerciseStyled = styled.div`
  display: flex;
  flex-direction: column;
`

const Name = styled.p`
  font-size: 1.1rem;
  margin-bottom: 5px;
`

const Type = styled.p`
  font-size: 0.8rem;
  margin: 0;
`
