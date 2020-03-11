import React from 'react'
import { useRouteMatch, Link } from 'react-router-dom'
import * as S from './WorkoutButtonNewWorkout.styles'

export default function WorkoutButtonNewWorkout() {
  const { url } = useRouteMatch()
  return (
    <S.NewButton as={Link} to={`${url}/add`} primary="true">
      New Workout
    </S.NewButton>
  )
}
