import React from 'react'
import styled from 'styled-components/macro'
import pageBackIcon from '../icons/back.png'
import { Link } from 'react-router-dom'

export default function ExerciseDetails({ exercise = '' }) {
  return (
    <ExerciseGrid>
      <ButtonWrapper>
        <Link to="/">
          <Image src={pageBackIcon} alt="" />
        </Link>
      </ButtonWrapper>
      <Title
        exerciseTitle
        disabled
        value={exercise.name}
        type="text"
        name="name"
        id="name"
      />
      <Heading>Instructions</Heading>
      <Title
        disabled
        type="text"
        name="instructions"
        id="instructions"
        value={exercise.instructions}
      />
    </ExerciseGrid>
  )
}

const ExerciseGrid = styled.section`
  display: grid;
  max-height: 100%;
  overflow-y: auto;
  border-left: 1px solid black;
  gap: 20px;
  padding: 30px;
`

const Heading = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`
const Title = styled.textarea`
  border: none;
  padding: ${props => (props.exerciseTitle ? 0 : 10)}px;
  outline: none;
  width: 100%;
  height: ${props => (props.exerciseTitle ? 40 : 400)}px;
  resize: none;
  font-size: ${props => (props.exerciseTitle ? 1.7 : 1)}rem;
  font-weight: ${props => (props.exerciseTitle ? 'bold' : 400)};
  background-color: #fff;
  color: #333;
`
const Image = styled.img`
  width: 25px;
  height: 25px;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 25px;
`
