import React from 'react'
import * as S from './WorkoutList.styles'
import ButtonNew from './ButtonNew'
import List from './List'
import PropTypes from 'prop-types'

WorkoutList.propTypes = {
  workouts: PropTypes.array.isRequired,
  handleWorkoutDelete: PropTypes.func.isRequired,
  handleWorkoutEdit: PropTypes.func.isRequired,
}

export default function WorkoutList({
  workouts,
  handleWorkoutDelete,
  handleWorkoutEdit,
}) {
  return (
    <S.Wrapper>
      <S.ButtonWrapper>
        <h3>Quickstart</h3>
        <ButtonNew />
      </S.ButtonWrapper>
      <h3>My Routines</h3>
      {!workouts.length ? (
        <S.WorkoutWrapper data-testid="placeholder" isPlaceholder>
          Please create a new workout!
        </S.WorkoutWrapper>
      ) : (
        <List
          workouts={workouts}
          handleWorkoutDelete={handleWorkoutDelete}
          handleWorkoutEdit={handleWorkoutEdit}
        />
      )}
    </S.Wrapper>
  )
}
