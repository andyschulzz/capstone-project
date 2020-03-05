import React from 'react'
import { Styled } from './Exercise.styles'
import { useRouteMatch } from 'react-router-dom'

export default function Exercise({
  name,
  type,
  handleExerciseSelect,
  id,
  index,
}) {
  let { url } = useRouteMatch()
  return (
    <Styled.Exercise
      to={`${url}/details/${index + 1}`}
      onClick={() => handleExerciseSelect(id)}
    >
      <Styled.Name>{name}</Styled.Name>
      <Styled.Type>{type}</Styled.Type>
    </Styled.Exercise>
  )
}
