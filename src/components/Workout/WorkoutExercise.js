import React from 'react'
import * as S from './WorkoutExercise.styles'
import PropTypes from 'prop-types'
import placeholder from '../icons/placeholder.png'
import checked from '../icons/checked.png'
import { useToggle } from 'react-hooks-lib'

WorkoutExercise.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleExerciseSelect: PropTypes.func,
  id: PropTypes.string,
  index: PropTypes.number,
}

export default function WorkoutExercise({
  name,
  type,
  handleWorkoutAdd,
  id,
  image = placeholder,
}) {
  const { on, toggle } = useToggle(false)
  return (
    <S.Exercise onClick={() => handleWorkoutSelect()}>
      {on ? <S.Image src={checked} alt="" /> : <S.Image src={image} alt="" />}
      <S.Wrapper>
        <S.Text isName>{name}</S.Text>
        <S.Text isType>{type}</S.Text>
      </S.Wrapper>
    </S.Exercise>
  )
  function handleWorkoutSelect() {
    handleWorkoutAdd(id)
    toggle()
  }
}
