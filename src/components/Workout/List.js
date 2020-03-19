import React, { useState } from 'react'
import * as S from './List.styles'
import PropTypes from 'prop-types'
import WorkoutMenu from './WorkoutMenu'
import { useToggle } from 'react-hooks-lib'

List.propTypes = {
  workouts: PropTypes.array.isRequired,
  handleWorkoutDelete: PropTypes.func.isRequired,
  handleWorkoutEdit: PropTypes.func.isRequired,
}

export default function List({
  workouts,
  handleWorkoutDelete,
  handleWorkoutEdit,
}) {
  const { on, toggle } = useToggle(false)
  const [selectedWorkout, setSelectedWorkout] = useState()

  const groupByTitle = workouts.reduce((acc, obj) => {
    const key = obj['title']
    if (!acc[key]) {
      acc[key] = []
    }
    acc[key].push(obj)
    return acc
  }, {})
  const renderWorkouts = Object.entries(groupByTitle).map(
    ([title, exercises], index) => (
      <S.WorkoutWrapper key={title}>
        {selectedWorkout === index && on && (
          <WorkoutMenu
            title={title}
            handleWorkoutDelete={handleWorkoutDelete}
            handleWorkoutEdit={handleWorkoutEdit}
            toggle={toggle}
          />
        )}
        <S.TitleWrapper>
          <h3>{title}</h3>
          <S.MenuIcon onClick={() => handleToggle(index)} />
        </S.TitleWrapper>
        {exercises.map((exercise, index) => {
          return (
            <S.Wrapper key={index}>
              {exercise.name}
              <S.DetailsWrapper>
                {exercise.reps}
                <S.Span>&times;</S.Span>
                {exercise.sets}
                {exercise.weight && (
                  <S.Span isWeight>{`(${exercise.weight} kg)`}</S.Span>
                )}
              </S.DetailsWrapper>
            </S.Wrapper>
          )
        })}
      </S.WorkoutWrapper>
    )
  )
  function handleToggle(selectedWorkout) {
    setSelectedWorkout(selectedWorkout)
    toggle()
  }

  return <>{renderWorkouts}</>
}
