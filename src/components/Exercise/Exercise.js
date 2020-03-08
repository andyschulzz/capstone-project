import React from 'react'
import * as S from './Exercise.styles'
import { useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'
import placeholder from '../icons/placeholder.png'

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleExerciseSelect: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
}

export default function Exercise({
  name,
  type,
  handleExerciseSelect,
  id,
  index,
  image,
}) {
  const { url } = useRouteMatch()
  return (
    <S.Exercise
      to={`${url}/details/${index + 1}`}
      onClick={() => handleExerciseSelect(id)}
    >
      {image ? (
        <S.Image src={image} alt="" />
      ) : (
        <S.Image isPlaceholder src={placeholder} alt="" />
      )}
      <S.Wrapper>
        <S.Text isName>{name}</S.Text>
        <S.Text isType>{type}</S.Text>
      </S.Wrapper>
    </S.Exercise>
  )
}
