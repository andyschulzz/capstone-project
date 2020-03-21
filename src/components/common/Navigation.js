import React from 'react'
import * as S from './Navigation.styles'

export default function Navigation({ handleSelectedWorkoutsReset }) {
  return (
    <S.Navigation data-testid="navbar">
      <S.Anchor
        data-testid="exercises-link"
        onClick={resetState}
        to="/exercises"
      >
        <S.Wrapper>
          <S.Fitness />
          <p>Exercises</p>
        </S.Wrapper>
      </S.Anchor>
      <S.Anchor data-testid="workouts-link" onClick={resetState} to="/workouts">
        <S.Wrapper>
          <S.Workouts />
          <p>Workouts</p>
        </S.Wrapper>
      </S.Anchor>
    </S.Navigation>
  )

  function resetState() {
    handleSelectedWorkoutsReset()
  }
}
