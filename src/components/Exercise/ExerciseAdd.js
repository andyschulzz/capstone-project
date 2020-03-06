import React, { useRef } from 'react'
import Button from '../utils/Button'
import BackButton from '../utils/BackButton'
import useForm from '../utils/hooks/useForm'
import { Styled } from './ExerciseAdd.styles'
import PropTypes from 'prop-types'

ExerciseAdd.propTypes = {
  handleExerciseAdd: PropTypes.func.isRequired,
}

export default function ExerciseAdd({ handleExerciseAdd }) {
  const inputEl = useRef(null)
  const { inputs, handleInputChange, handleSubmit } = useForm(validateInput)

  return (
    <section>
      <Styled.Wrapper onSubmit={handleSubmit}>
        <Styled.ButtonWrapper>
          <BackButton />
          <Button primary mla type="submit">
            save
          </Button>
        </Styled.ButtonWrapper>
        <Styled.Textarea
          ref={inputEl}
          autoFocus
          isTitle
          isExerciseName
          type="text"
          name="name"
          id="name"
          placeholder="Name of the exercise?"
          value={inputs.name}
          onChange={handleInputChange}
          required
        />
        <Styled.Label htmlFor="type">Type</Styled.Label>
        <Styled.Textarea
          isTitle
          type="text"
          name="type"
          id="type"
          placeholder="Type of the exercise?"
          value={inputs.type}
          onChange={handleInputChange}
          required
        />
        <Styled.Label htmlFor="instructions">Instructions</Styled.Label>
        <Styled.Textarea
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Please explain the exercise!"
          value={inputs.instructions}
          onChange={handleInputChange}
          required
        />
      </Styled.Wrapper>
    </section>
  )
  function handleAdd(name, type, instructions) {
    handleExerciseAdd(name, type, instructions)
  }

  function validateInput() {
    const name = inputs.name.trim()
    const type = inputs.type.trim()
    const instructions = inputs.instructions.trim()
    name.length &&
      typeof name === 'string' &&
      name.length >= 4 &&
      type.length &&
      typeof type === 'string' &&
      type.length >= 4 &&
      instructions.length &&
      typeof instructions === 'string' &&
      instructions.length >= 4 &&
      handleAdd(name, type, instructions)
  }
}
