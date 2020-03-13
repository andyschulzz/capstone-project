import React from 'react'
import * as S from './List.styles'

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
      <React.Fragment key={title}>
        <h3>{title}</h3>
        {exercises.map((exercise, index) => {
          return (
            <S.Wrapper key={index}>
              {exercise.name}
              <S.DetailsWrapper>
                {exercise.reps}
                <S.Span>&times;</S.Span>
                {exercise.sets}
                {exercise.weight && (
                  <S.Span isWeight>({exercise.weight} kg)</S.Span>
                )}
              </S.DetailsWrapper>
            </S.Wrapper>
          )
        })}
      </React.Fragment>
    )
  )
  return <>{renderWorkouts}</>
}
