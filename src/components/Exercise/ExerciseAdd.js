import React, { useState } from 'react'
import ExerciseText from './ExerciseText'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ExerciseButtonEdit from './ExerciseButtonEdit'
import ExerciseButtonSave from './ExerciseButtonSave'
import * as S from './ExerciseForm.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

ExerciseAdd.propTypes = {
  handleExerciseAdd: PropTypes.func.isRequired,
}

export default function ExerciseAdd({ handleExerciseAdd }) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })

  return (
    <>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        {(!disabled && (
          <ExerciseButtonSave formState={formState} form={'add'} />
        )) || <ExerciseButtonEdit />}
      </S.ButtonWrapper>
      <S.Wrapper id="add" onSubmit={handleSubmit(handleAdd)}>
        <ExerciseText register={register} disabled={disabled} />
      </S.Wrapper>
    </>
  )
  function handleAdd(data) {
    Object.keys(data).map(key => (data[key] = data[key].trim()))
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseAdd(data.name, data.type, data.instructions)
    }
  }
}
