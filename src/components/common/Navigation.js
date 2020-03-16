import React from 'react'
import * as S from './Navigation.styles'

export default function Navigation() {
  return (
    <S.Navigation>
      <S.Anchor to="/exercises">
        <S.Fitness />
      </S.Anchor>
      <S.Anchor to="/workouts">
        <S.Workouts />
      </S.Anchor>
    </S.Navigation>
  )
}
