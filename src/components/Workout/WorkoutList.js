import React from 'react'
import * as S from './WorkoutList.styles'
import ButtonNewWorkout from './ButtonNewWorkout'
import List from './List'

export default function WorkoutList({ workouts }) {
  return (
    <>
      <S.ButtonWrapper>
        <h3>Quickstart</h3>
        <ButtonNewWorkout />
      </S.ButtonWrapper>
      <S.Wrapper>
        <h3>My Routines</h3>
        {workouts.length === 0 ? (
          <S.WorkoutWrapper isPlaceholder>
            Please create a new workout!
          </S.WorkoutWrapper>
        ) : (
          <S.WorkoutWrapper>
            <List workouts={workouts} />
          </S.WorkoutWrapper>
        )}
      </S.Wrapper>
    </>
  )
}
