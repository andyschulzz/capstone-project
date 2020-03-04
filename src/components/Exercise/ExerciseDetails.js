import React from 'react'
import styled from 'styled-components/macro'
import pageBackIcon from '../icons/back.png'
import { Link } from 'react-router-dom'

export default function ExerciseDetails({ exercise = '' }) {
  return (
    <ExerciseGrid>
      <Link exact to="/">
        <Image src={pageBackIcon} alt="" />
      </Link>
      <Title disabled value={exercise.name} />
      <Heading description>Instructions</Heading>
      <Text description disabled value={exercise.instructions} />
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
  margin-top: 15px;
  border: none;
  padding: 0;
  outline: none;
  width: 100%;
  height: 40px;
  resize: none;
  font-size: 1.7rem;
  font-weight: bold;
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
