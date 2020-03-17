import React from 'react'
import * as S from './Navigation.styles'

export default function Navigation({ handleSelectedWorkoutsReset }) {
  return (
    <S.Navigation>
      <S.Anchor onClick={resetState} to="/exercises">
        <S.Fitness />
      </S.Anchor>
      <S.Anchor onClick={resetState} to="/workouts">
        <S.Workouts />
      </S.Anchor>
    </S.Navigation>
  )

  function resetState() {
    handleSelectedWorkoutsReset()
  }
}
