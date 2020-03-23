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

  const title = workouts.map((workout, index) =>
    Object.entries(workout).map(([id, item], index) => item.title)
  )

  console.log(openMenu)

  const renderWorkouts = workouts.map((workout, index) => (
    <S.WorkoutWrapper key={index}>
      {selectedWorkout === index && openMenu && (
        <WorkoutMenu
          title={title[index][0]}
          handleWorkoutDelete={handleWorkoutDelete}
          handleWorkoutEdit={handleWorkoutEdit}
          ref={refTwo}
        />
      )}
      <S.TitleWrapper ref={refOne}>
        <h3>{title[index][0]}</h3>
        <S.MenuIcon
          data-testid="menu-icon"
          onClick={() => handleToggle(index)}
        />
      </S.TitleWrapper>
      {Object.entries(workout).map(([id, item], index) => (
        <S.Wrapper key={index}>
          {item.name}
          <S.DetailsWrapper>
            {item.reps}
            <S.Span>&times;</S.Span>
            {item.sets}
            {item.weight && <S.Span isWeight>{`(${item.weight} kg)`}</S.Span>}
          </S.DetailsWrapper>
        </S.Wrapper>
      ))}
    </S.WorkoutWrapper>
  ))

  function handleToggle(selectedWorkout) {
    setSelectedWorkout(selectedWorkout)
    setOpenMenu(!openMenu)
    console.log('test')
  }

  return <>{renderWorkouts}</>
}
