import React from 'react'
import styled from 'styled-components/macro'
import pageBackIcon from '../icons/back.png'
import { Link } from 'react-router-dom'
import Button from '../utils/Button'

export default function ExerciseAdd({ handleExerciseAdd }) {
  return (
    <ExerciseGrid>
      <ButtonWrapper>
        <Link to="/">
          <Image src={pageBackIcon} alt="" />
        </Link>
        <Button primary>save</Button>
      </ButtonWrapper>
      <Title
        exerciseTitle
        type="text"
        name="name"
        id="name"
        placeholder="Name of the exercise?"
        onChange={e => handleChange({ name: e.target.value })}
      />
      <Heading>Type</Heading>
      <Title
        type="text"
        name="type"
        id="type"
        placeholder="Type of the exercise?"
        onChange={e => handleChange({ type: e.target.value })}
      />
      <Heading description>Instructions</Heading>
      <Text
        description
        type="text"
        name="instructions"
        id="instructions"
        placeholder="Please exlpain the exercise!"
        onChange={e => handleChange({ instructions: e.target.value })}
      />
    </ExerciseGrid>
  )

  function handleChange(name, type, instructions) {
    handleExerciseAdd(name, type, instructions)
  }
}

const ExerciseGrid = styled.section`
  display: grid;
  max-height: 100%;
  overflow-y: auto;
  gap: 10px;
  padding: 30px;
`
const Heading = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
`
const Title = styled.textarea`
  margin-top: 0;
  margin-bottom: 10px;
  border: none;
  padding: ${props => (props.exerciseTitle ? 0 : 10)}px;
  outline: none;
  width: 100%;
  height: 40px;
  resize: none;
  font-size: ${props => (props.exerciseTitle ? 1.7 : 1)}rem;
  font-weight: ${props => (props.exerciseTitle ? 'bold' : 400)};
  background-color: #fff;
  color: #333;
`
const Text = styled.textarea`
  border: none;
  outline: none;
  width: 100%;
  height: 400px;
  resize: none;
  font-size: inherit;
  background-color: #fff;
  color: #333;
  padding: 10px;
`
const Image = styled.img`
  width: 25px;
  height: 25px;
`
const ButtonWrapper = styled.div`
  display: flex;
  margin-bottom: 35px;
`
