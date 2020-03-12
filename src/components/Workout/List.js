import React from 'react'
import * as S from './WorkoutList.styles'

export default function List({ workouts }) {
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
  return <S.WorkoutWrapper>{renderWorkouts}</S.WorkoutWrapper>
}
