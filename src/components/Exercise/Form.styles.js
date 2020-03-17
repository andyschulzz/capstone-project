import styled from 'styled-components/macro'

const Form = styled.form`
  display: grid;
  max-height: 100%;
  overflow-y: auto;
  gap: 10px;
  padding: 30px;
  position: relative;

  img {
    width: 130px;
    height: 130px;
    position: absolute;
    right: 48px;
    top: 64px;
  }

  p {
    margin: 0;
    font-size: 10px;
    color: #ccc;
  }
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
  overflow-y: ${props => (props.isTitle ? 'hidden' : 'auto')};
  color: #333;
`

const Image = styled.img`
  width: 25px;
  height: 25px;
`

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
`

export { Form, Textarea, Image, ButtonWrapper, Label }
