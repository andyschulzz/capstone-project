import React from 'react'
import * as S from './WorkoutMenu.styles'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const WorkoutMenu = React.forwardRef(
  (
    { index, handleWorkoutDelete, handleWorkoutEdit, openMenu, setOpenMenu },
    ref
  ) => {
    const history = useHistory()
    return (
      <S.MenuWrapper ref={ref}>
        <S.MenuIcon onClick={() => setOpenMenu(!openMenu)} />
        {openMenu && (
          <S.Wrapper data-testid="workout-menu">
            <p onClick={handleEdit}>
              <S.EditIcon />
              Edit
            </p>
            <p onClick={handleDelete}>
              <S.DeleteIcon />
              Delete
            </p>
          </S.Wrapper>
        )}
      </S.MenuWrapper>
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
