import React from 'react'
import GoBack from '../utils/BackButton'
import Button from '../utils/Button'
import { Styled } from './ExerciseDetails.styles'
import PropTypes from 'prop-types'
import { Link, useRouteMatch } from 'react-router-dom'

ExerciseDetails.propTypes = {
  selectedExercise: PropTypes.object,
}

export default function ExerciseDetails({ selectedExercise = {} }) {
  return (
    <Styled.Wrapper>
      <Styled.ButtonWrapper>
        <GoBack />
        <Button primary mla>
          <Link to={`/exercises/edit`}>Edit</Link>
        </Button>
      </Styled.ButtonWrapper>

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
    </Styled.Wrapper>
  )
}
