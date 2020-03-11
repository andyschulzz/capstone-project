import React from 'react'
import * as S from './WorkoutList.styles'
import ButtonNewWorkout from './WorkoutButtonNewWorkout'

export default function WorkoutList({ workouts }) {
  const groupByTitle = workouts.reduce((acc, obj) => {
    const key = obj['title']
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})

  const renderWorkouts = Object.entries(groupByTitle).map(
    ([title, exercises]) => (
      <S.WorkoutWrapper key={title}>
        <h3>{title}</h3>
        {exercises.map((exercise, index) => {
          return <div key={index}>{exercise.name}</div>
        })}
      </S.WorkoutWrapper>
    )
  )
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
          renderWorkouts
        )}
      </S.Wrapper>
    </>
  )
}
