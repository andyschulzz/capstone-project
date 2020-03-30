import React, { useState, useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import { GreenButton } from '../common/Button'
import { BlueButton } from '../common/Button'
import * as S from './Form.styles'
import Form from './Form'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'

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
  exercises,
}) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {
      name,
      type,
      instructions,
    },
  })
  const mainRef = useRef(null)
  const { id } = useParams()

  const selectedExercise = exercises.filter((exercise) => exercise.id === id)

  useEffect(() => {
    selectedExercise.forEach((exercise) => {
      setValue('name', exercise.name)
      setValue('type', exercise.type)
      setValue('instructions', exercise.instructions)
    })
  }, [selectedExercise, setValue])

  useEffect(() => {
    mainRef.current.focus()
  }, [disabled])

  return (
    <S.Form id="edit" onSubmit={handleSubmit(handleChange)}>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        {(!disabled && (
          <GreenButton inactive mla>
            Save
          </GreenButton>
        )) || (
          <BlueButton mla onClick={handleChange}>
            Edit
          </BlueButton>
        )}
      </S.ButtonWrapper>
      <Form
        mainRef={mainRef}
        register={register}
        image={image}
        disabled={disabled}
      />
    </S.Form>
  )

  function handleChange(data) {
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseChange({ id, name, type, instructions, image, ...data })
    }
  }
}
