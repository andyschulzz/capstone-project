import React from 'react'
import * as S from './Exercise.styles'
import PropTypes from 'prop-types'
import { useToggle } from 'react-hooks-lib'

Exercise.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  handleWorkoutExercises: PropTypes.func,
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default function Exercise({
  name,
  type,
  handleWorkoutExercises,
  id,
  image,
}) {
  const { on, toggle } = useToggle(false)
  return (
    <S.Exercise data-testid="exercise" onClick={() => handleWorkoutSelect()}>
      {on ? (
        <S.Image
          data-testid="checked"
          isChecked
          src="/icons/checked.png"
          alt=""
        />
      ) : (
        <S.Image src={image} alt="" />
      )}
      <S.Wrapper>
        <S.Text isName>{name}</S.Text>
        <S.Text isType>{type}</S.Text>
      </S.Wrapper>
    </S.Exercise>
  )
  function handleWorkoutSelect() {
    handleWorkoutExercises(id)
    toggle()
  }
}
