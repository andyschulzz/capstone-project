import React from 'react'
import * as S from './Exercise.styles'
import { useRouteMatch } from 'react-router-dom'
import PropTypes from 'prop-types'

Exercise.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string,
}

export default function Exercise({ name, type, id, image }) {
  const { url } = useRouteMatch()
  return (
    <S.Exercise to={`${url}/details/${id}`}>
      <S.Image src={image} alt="" />
      <S.Wrapper>
        <S.Text isName>{name}</S.Text>
        <S.Text isType>{type}</S.Text>
      </S.Wrapper>
    </S.Exercise>
  )
}
