import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ButtonSave from './ButtonSave'
import { BlueButton } from '../common/Button'
import * as S from './Form.styles'
import Form from './Form'

Edit.propTypes = {
  handleExerciseChange: PropTypes.func.isRequired,
  selectedExercise: PropTypes.object,
}

export default function Edit({
  handleExerciseChange,
  id,
  name,
  type,
  instructions,
  image,
}) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, formState, errors } = useForm({
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
        {(!disabled && <ButtonSave formState={formState} form={'edit'} />) || (
          <BlueButton form="edit" mla onClick={handleChange}>
            Edit
          </BlueButton>
        )}
      </S.ButtonWrapper>
      <Form
        id={'edit'}
        onSubmit={handleSubmit(handleChange)}
        register={register}
        image={image}
        disabled={disabled}
        errors={errors}
      />
    </>
  )

  function handleChange(data) {
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseChange({ id, name, type, instructions, image, ...data })
    }
  }
}
