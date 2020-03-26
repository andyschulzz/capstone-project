import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import { GreenButton } from '../common/Button'
import { BlueButton } from '../common/Button'
import * as S from './Form.styles'
import Form from './Form'

Edit.propTypes = {
  handleExerciseChange: PropTypes.func.isRequired,
  exercises: PropTypes.array,
  name: PropTypes.string,
  type: PropTypes.string,
  instructions: PropTypes.string,
  image: PropTypes.string,
}

export default function Edit({
  handleExerciseChange,
  name,
  image,
  type,
  instructions,
  id,
}) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name,
      type,
      instructions,
    },
  })

  return (
    <S.Form id="edit" onSubmit={handleSubmit(handleChange)}>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        {(!disabled && (
          <GreenButton mla inactive>
            Save
          </GreenButton>
        )) || (
          <BlueButton mla onClick={handleChange}>
            Edit
          </BlueButton>
        )}
      </S.ButtonWrapper>
      <Form register={register} image={image} disabled={disabled} />
    </S.Form>
  )

  function handleChange(data) {
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseChange({ id, name, type, instructions, image, ...data })
    }
  }
}
