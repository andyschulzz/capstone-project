import React from 'react'
import * as S from './WorkoutList.styles'
import Button from '../common/Button'
import { useRouteMatch, Link } from 'react-router-dom'

export default function WorkoutList() {
  const { url } = useRouteMatch()
  return (
    <>
      <S.ButtonWrapper>
        <h3>Quickstart</h3>
        <Button as={Link} to={`${url}/add`} primary="true">
          New Workout
        </Button>
      </S.ButtonWrapper>

      <S.Wrapper>
        <div>Legs</div>
        <div>Exercise A</div>
        <div>Exercise B</div>
        <div>Exercise C</div>
        <div>Exercise A</div>
        <div>Exercise B</div>
        <div>Exercise C</div>
      </S.Wrapper>
    </>
  )
}
