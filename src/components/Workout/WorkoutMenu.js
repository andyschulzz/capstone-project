import React from 'react'
import * as S from './WorkoutMenu.styles'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'
import OnOutsiceClick from 'react-outclick'

WorkoutMenu.propTypes = {
  handleWorkoutDelete: PropTypes.func.isRequired,
  handleWorkoutEdit: PropTypes.func.isRequired,
  selectedWorkouts: PropTypes.number,
}

export default function WorkoutMenu({
  title,
  handleWorkoutDelete,
  handleWorkoutEdit,
  toggle,
}) {
  const history = useHistory()
  const ref = React.useRef()
  return (
    <S.Wrapper ref={ref}>
      <p onClick={handleEdit}>
        <S.EditIcon />
        Edit
      </p>
      <p onClick={handleDelete}>
        <S.DeleteIcon />
        Delete
      </p>
      <OnOutsiceClick container={ref} onOutsideClick={click} />
    </S.Wrapper>
  )

  function handleDelete() {
    handleWorkoutDelete(title)
  }

  function handleEdit() {
    handleWorkoutEdit(title)
    history.push('/workouts/edit')
  }

  function click() {
    toggle(false)
  }
}
