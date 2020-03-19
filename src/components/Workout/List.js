import React, { useState, useRef } from 'react'
import * as S from './List.styles'
import PropTypes from 'prop-types'
import WorkoutMenu from './WorkoutMenu'
import useOnclickOutside from 'react-cool-onclickoutside'

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
  const [selectedWorkout, setSelectedWorkout] = useState()
  const [openMenu, setOpenMenu] = useState(false)

  const refOne = useRef()
  const refTwo = useRef()

  useOnclickOutside([refOne, refTwo], () => {
    setOpenMenu(false)
  })

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
        {selectedWorkout === index && openMenu && (
          <WorkoutMenu
            title={title}
            handleWorkoutDelete={handleWorkoutDelete}
            handleWorkoutEdit={handleWorkoutEdit}
            ref={refTwo}
          />
        )}
        <S.TitleWrapper ref={refOne}>
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
    setOpenMenu(!openMenu)
  }

  return <>{renderWorkouts}</>
}
