import React from 'react'
import pageBackIcon from '../icons/back.png'
import { Link } from 'react-router-dom'
import { Styled } from './ExerciseDetails.styles'

export default function ExerciseDetails({ selectedExercise = '' }) {
  return (
    <Styled.Wrapper>
      <Styled.ButtonWrapper>
        <Link to="/">
          <Styled.Image src={pageBackIcon} alt="" />
        </Link>
      </Styled.ButtonWrapper>
      <div>
        <Styled.Textarea
          isTitle
          isExerciseName
          disabled
          value={selectedExercise.name}
          type="text"
          name="name"
          id="name"
        />
        <Styled.Label htmlFor="type">Type</Styled.Label>
        <Styled.Textarea
          isTitle
          type="text"
          name="type"
          id="type"
          placeholder="Type of the exercise?"
          value={selectedExercise.type}
          disabled
        />
        <Styled.Label htmlFor="instructions">Instructions</Styled.Label>
        <Styled.Textarea
          disabled
          type="text"
          name="instructions"
          id="instructions"
          value={selectedExercise.instructions}
        />
      </div>
    </Styled.Wrapper>
  )
}
