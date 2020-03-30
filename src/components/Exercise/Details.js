import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ButtonEdit from './ButtonEdit'
import Form from './Form'
import * as S from './Form.styles'
import PropTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { BlueButton, GreenButton } from '../common/Button'

Details.propTypes = {
  handleExerciseChange: PropTypes.func.isRequired,
  exercises: PropTypes.array.isRequired,
  name: PropTypes.string,
  type: PropTypes.string,
  instructions: PropTypes.string,
  image: PropTypes.string,
}

export default function Details({ handleExerciseChange, exercises }) {
  const { id } = useParams()
  const { register, setValue, handleSubmit } = useForm()
  const [disabled, setDisabled] = useState(true)
  const [image, setImage] = useState()
  const mainRef = useRef(null)

  const selectedExercise = exercises.filter((exercise) => exercise.id === id)

  useEffect(() => {
    selectedExercise.forEach((exercise) => {
      setValue('name', exercise.name)
      setValue('type', exercise.type)
      setValue('instructions', exercise.instructions)
      setImage(exercise.image)
    })
  }, [selectedExercise, setValue])

  useEffect(() => {
    mainRef.current.focus()
  }, [disabled])

  return (
    <S.Form
      onSubmit={handleSubmit(handleChange)}
      data-testid="details"
      id="details"
    >
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
      handleExerciseChange({ id, ...data })
    }
  }
}
