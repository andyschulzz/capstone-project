import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Wrapper = styled.form`
  display: grid;
  max-height: 100%;
  overflow-y: auto;
  gap: 10px;
  padding: 30px;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 1.1rem;
`
const Textarea = styled.textarea`
  border: none;
  outline: none;
  padding: ${props => (props.isExerciseName ? 0 : 10)}px;
  margin-bottom: 10px;
  width: 100%;
  height: ${props => (props.isTitle ? 40 : 400)}px;
  resize: none;
  font-size: ${props => (props.isExerciseName ? 1.7 : 1)}rem;
  font-weight: ${props => (props.isExerciseName ? 'bold' : 400)};
  background-color: #fff;
  color: #333;
  overflow-y: ${props => (props.isTitle ? 'hidden' : 'auto')};
`
const Image = styled.img`
  width: 25px;
  height: 25px;
`
const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
`

const Exercise = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: #333;

  p:first-child {
    margin-top: 0;
  }
`

const Text = styled.p`
  font-size: ${props => (props.isName ? 1.1 : 0.8)}rem;
  margin-bottom: ${props => (props.isName ? '5px' : '')};
  margin-top: ${props => (props.isName ? '10px' : '')};
  margin: ${props => (props.isName ? '10 0 5 0px' : 0)};
`

export { Wrapper, Textarea, Image, ButtonWrapper, Label, Exercise, Text }
