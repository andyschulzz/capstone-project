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
  exercises: PropTypes.array.isRequired,
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
      <S.Wrapper>
        <Form register={register} image={image} disabled={disabled} />
      </S.Wrapper>
    </S.Form>
  )

  function handleChange(data) {
    setDisabled(!disabled)
    if (!disabled) {
      // const selectedExercise = Object.assign(
      //   {},
      //   exercises.filter(exercise => exercise.name === name).map(e => e.id)
      // )
      // handleExerciseChange({
      //   id: selectedExercise[0],
      //   name,
      //   type,
      //   instructions,
      //   image,
      //   ...data,
      // })
      handleExerciseChange({ id, name, type, instructions, image, ...data })
    }
  }
}
