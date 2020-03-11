import React from 'react'
import * as S from './Exercise.styles'
import { useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import placeholder from '../icons/placeholder.png'

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleExerciseSelect: PropTypes.func,
  id: PropTypes.string,
  index: PropTypes.number,
}

export default function Exercise({
  name,
  type,
  handleExerciseSelect,
  id,
  index,
  image = placeholder,
}) {
  const { url } = useRouteMatch()
  return (
    <S.Exercise
      to={`${url}/details/${index + 1}`}
      onClick={() => handleExerciseSelect(id)}
    >
      <S.Image src={image} alt="" />
      <S.Wrapper>
        <S.Text isName>{name}</S.Text>
        <S.Text isType>{type}</S.Text>
      </S.Wrapper>
    </S.Exercise>
  )
}
