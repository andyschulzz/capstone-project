import React from 'react'
import * as S from './WorkoutMenu.styles'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const WorkoutMenu = React.forwardRef(
  ({ index, handleWorkoutDelete, handleWorkoutEdit }, ref) => {
    const history = useHistory()
    return (
      <S.Wrapper data-testid="workout-menu" ref={ref}>
        <p onClick={handleEdit}>
          <S.EditIcon />
          Edit
        </p>
        <p onClick={handleDelete}>
          <S.DeleteIcon />
          Delete
        </p>
      </S.Wrapper>
    )

    function handleDelete() {
      handleWorkoutDelete(index)
    }

    function handleEdit() {
      handleWorkoutEdit(index)
      history.push('/workouts/edit')
    }
  }
)

WorkoutMenu.propTypes = {
  handleWorkoutDelete: PropTypes.func.isRequired,
  handleWorkoutEdit: PropTypes.func.isRequired,
  index: PropTypes.number,
}

export default WorkoutMenu
