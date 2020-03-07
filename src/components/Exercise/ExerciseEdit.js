import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import Button from '../common/Button'
import * as S from './Exercise.styles'
import ExerciseButtonSave from './ExerciseButtonSave'
import ExerciseText from './ExerciseText'

ExerciseAdd.propTypes = {
  handleExerciseChange: PropTypes.func.isRequired,
  selectedExercise: PropTypes.object,
}

export default function ExerciseAdd({
  handleExerciseChange,
  selectedExercise = {},
}) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: selectedExercise.name,
      type: selectedExercise.type,
      instructions: selectedExercise.instructions,
    },
  })

  return (
    <section>
      <S.Wrapper onSubmit={handleSubmit(handleChange)}>
        <S.ButtonWrapper>
          <ButtonBackToHome />
          {(!disabled && <ExerciseButtonSave formState={formState} />) || (
            <Button primary mla onClick={() => handleChange}>
              Edit
            </Button>
          )}
        </S.ButtonWrapper>
        <ExerciseText
          register={register}
          selectedExercise={selectedExercise}
          disabled={disabled}
        />
      </S.Wrapper>
    </section>
  )

  function handleChange(data) {
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseChange(selectedExercise.id, {
        ...selectedExercise,
        ...data,
      })
    }
  }
}
