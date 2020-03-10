import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
`
const Wrapper = styled.section`
  display: grid;
  padding: 0 30px 30px;
  gap: 36px;
  overflow-y: auto;
  scroll-behavior: smooth;

  & span:first-child {
    margin-top: 5px;
  }
`
const Heading = styled.span`
  font-size: 0.8rem;
  margin: 20px 0 0;
  color: #888;
  font-weight: 300;
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

export { ButtonWrapper, Wrapper, Heading, Textarea }
