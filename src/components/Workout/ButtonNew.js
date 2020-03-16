import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import * as S from './ButtonNew.styles'

export default function ButtonNew() {
  const { url } = useRouteMatch()
  return (
    <S.ButtonNew primary="true" as={Link} to={`${url}/add`}>
      New Workout
    </S.ButtonNew>
  )
}
