import React from 'react'
import * as S from './WorkoutList.styles'
import ButtonNewWorkout from './ButtonNewWorkout'
import List from './List'

export default function WorkoutList({ workouts }) {
  return (
    <>
      <S.ButtonWrapper>
        <p>Quickstart</p>
        <ButtonNewWorkout />
      </S.ButtonWrapper>
      <S.Wrapper>
        <p>My Routines</p>
        {workouts.length === 0 ? (
          <S.WorkoutWrapper isPlaceholder>
            Please create a new workout!
          </S.WorkoutWrapper>
        ) : (
          <List workouts={workouts} />
        )}
      </S.Wrapper>
    </>
  )
}
