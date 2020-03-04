import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Exercise({
  name,
  type,
  handleExerciseSelect,
  id,
  index,
}) {
  return (
    <ExerciseStyled
      to={`/details/${index + 1}`}
      onClick={() => handleExerciseSelect(id)}
    >
      <Name>{name}</Name>
      <Type>{type}</Type>
    </ExerciseStyled>
  )
}

const ExerciseStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #333;

  p:first-child {
    margin-top: 0;
  }
`

const Name = styled.p`
  font-size: 1.1rem;
  margin-bottom: 5px;
  margin-top: 10px;
`

const Type = styled.p`
  font-size: 0.8rem;
  margin: 0;
`
