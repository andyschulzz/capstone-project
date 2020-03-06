import React, { useState } from 'react'
import Button from '../utils/Button'
import BackButton from '../utils/BackButton'
import { Styled } from './ExerciseEdit.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

ExerciseAdd.propTypes = {
  handleExerciseChange: PropTypes.func.isRequired,
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
      <Styled.Wrapper onSubmit={handleSubmit(handleChange)}>
        <Styled.ButtonWrapper>
          <BackButton />
          {(!disabled && (
            <Button danger mla disabled={!formState.isValid} type="submit">
              Save
            </Button>
          )) || (
            <Button primary mla onClick={() => handleChange}>
              Edit
            </Button>
          )}
        </Styled.ButtonWrapper>
        <Styled.Textarea
          ref={register({ required: true, minLength: 4 })}
          autoFocus
          isTitle
          isExerciseName
          type="text"
          name="name"
          id="name"
          required
          disabled={disabled}
        />
        <Styled.Label htmlFor="type">Type</Styled.Label>
        <Styled.Textarea
          ref={register({ required: true, minLength: 4 })}
          isTitle
          type="text"
          name="type"
          id="type"
          required
          disabled={disabled}
        />
        <Styled.Label htmlFor="instructions">Instructions</Styled.Label>
        <Styled.Textarea
          ref={register({ required: true, minLength: 4 })}
          type="text"
          name="instructions"
          id="instructions"
          required
          disabled={disabled}
        />
      </Styled.Wrapper>
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
