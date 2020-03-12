import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import * as S from './ButtonNewWorkout.styles'

export default function ButtonNewWorkout() {
  const { url } = useRouteMatch()
  return (
    <S.NewButton as={Link} to={`${url}/add`} primary="true">
      New Workout
    </S.NewButton>
  )
}
