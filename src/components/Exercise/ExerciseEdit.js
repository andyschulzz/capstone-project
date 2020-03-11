import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import Button from '../common/Button'
import * as S from './ExerciseForm.styles'
import ExerciseButtonSave from './ExerciseButtonSave'
import ExerciseText from './ExerciseText'

ExerciseEdit.propTypes = {
  handleExerciseChange: PropTypes.func.isRequired,
  selectedExercise: PropTypes.object,
}

export default function ExerciseEdit({
  handleExerciseChange,
  id,
  name,
  type,
  instructions,
  image,
}) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      name,
      type,
      instructions,
    },
  })

  return (
    <>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        {(!disabled && (
          <ExerciseButtonSave formState={formState} form={'edit'} />
        )) || (
          <Button form="edit" primary mla onClick={() => handleChange}>
            Edit
          </Button>
        )}
      </S.ButtonWrapper>
      <S.Wrapper id="edit" onSubmit={handleSubmit(handleChange)}>
        <ExerciseText register={register} image={image} disabled={disabled} />
      </S.Wrapper>
    </>
  )

  function handleChange(data) {
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseChange({ id, name, type, instructions, image, ...data })
    }
  }
}
