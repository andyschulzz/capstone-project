import React from 'react'
import Button from '../utils/Button'
import BackButton from '../utils/BackButton'
import { Styled } from './ExerciseAdd.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

ExerciseAdd.propTypes = {
  handleExerciseAdd: PropTypes.func.isRequired,
}

export default function ExerciseAdd({ handleExerciseAdd }) {
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })

  return (
    <section>
      <Styled.Wrapper onSubmit={handleSubmit(handleAdd)}>
        <Styled.ButtonWrapper>
          <BackButton />
          <Button
            primary
            mla
            disabled={
              !formState.dirty || (formState.dirty && !formState.isValid)
            }
            type="submit"
          >
            save
          </Button>
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
          // value={inputs.name}
          // onChange={handleInputChange}
          required
        />
        <Styled.Label htmlFor="type">Type</Styled.Label>
        <Styled.Textarea
          ref={register({ required: true, minLength: 4 })}
          isTitle
          type="text"
          name="type"
          id="type"
          placeholder="Type of the exercise?"
          // value={inputs.type}
          // onChange={handleInputChange}
          required
        />
        <Styled.Label htmlFor="instructions">Instructions</Styled.Label>
        <Styled.Textarea
          ref={register({ required: true, minLength: 4 })}
          type="text"
          name="instructions"
          id="instructions"
          placeholder="Please explain the exercise!"
          // value={inputs.instructions}
          // onChange={handleInputChange}
          required
        />
      </Styled.Wrapper>
    </section>
  )
  function handleAdd(data) {
    console.log(data)
    // handleExerciseAdd(name, type, instructions)
  }

  // function validateInput() {
  //   const name = inputs.name.trim()
  //   const type = inputs.type.trim()
  //   const instructions = inputs.instructions.trim()
  //   name.length &&
  //     typeof name === 'string' &&
  //     name.length >= 4 &&
  //     type.length &&
  //     typeof type === 'string' &&
  //     type.length >= 4 &&
  //     instructions.length &&
  //     typeof instructions === 'string' &&
  //     instructions.length >= 4 &&
  //     handleAdd(name, type, instructions)
  // }
}
