import React, { useState, useRef } from 'react'
import Button from '../utils/Button'
import BackButton from '../utils/BackButton'
import { Styled } from './ExerciseAdd.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

ExerciseAdd.propTypes = {
  handleExerciseAdd: PropTypes.func.isRequired,
}

export default function ExerciseAdd({ handleExerciseAdd }) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })
  const mainRef = useRef(null)

  return (
    <section>
      <Styled.Wrapper onSubmit={handleSubmit(handleAdd)}>
        <Styled.ButtonWrapper>
          <BackButton />
          {(!disabled && (
            <Button
              danger
              mla
              disabled={
                !formState.dirty || (formState.dirty && !formState.isValid)
              }
              type="submit"
            >
              Save
            </Button>
          )) || (
            <Button primary mla onClick={() => handleAdd}>
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
          placeholder="Name of the exercise?"
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
          placeholder="Type of the exercise?"
          required
          disabled={disabled}
        />
        <Styled.Label htmlFor="instructions">Instructions</Styled.Label>
        <Styled.Textarea
          ref={register({ required: true, minLength: 4 })}
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Please explain the exercise!"
          required
          disabled={disabled}
        />
      </Styled.Wrapper>
    </section>
  )
  function handleAdd(data) {
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseAdd(data.name, data.type, data.instructions)
    }
  }
}
