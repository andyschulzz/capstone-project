import React from 'react'
import * as S from './WorkoutList.styles'
import ButtonNew from './ButtonNew'
import List from './List'
import PropTypes from 'prop-types'

WorkoutList.propTypes = {
  workouts: PropTypes.array.isRequired,
}

export default function WorkoutList({ workouts }) {
  return (
    <>
      <S.ButtonWrapper>
        <h3>Quickstart</h3>
        <ButtonNew />
      </S.ButtonWrapper>
      <S.Wrapper>
        <h3>My Routines</h3>
        {!workouts.length ? (
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
