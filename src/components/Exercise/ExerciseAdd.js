import React, { useRef } from 'react'
import pageBackIcon from '../icons/back.png'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'
import useForm from '../utils/hooks/useForm'
import { Styled } from './ExerciseAdd.styles'

export default function ExerciseAdd({ handleExerciseAdd }) {
  const inputEl = useRef(null)
  const { inputs, handleInputChange, handleSubmit } = useForm(handleAdd)

  return (
    <section>
      <Styled.Wrapper onSubmit={handleSubmit}>
        <Styled.ButtonWrapper>
          <Link to="/">
            <Styled.Image src={pageBackIcon} alt="" />
          </Link>
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
  function handleAdd() {
    handleExerciseAdd(inputs.name, inputs.type, inputs.instructions)
  }
}
