import styled from 'styled-components/macro'
import { BlueButton } from '../common/Button'

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
const Form = styled.form`
  display: grid;
  padding: 30px;
`

const Textarea = styled.textarea`
  margin-bottom: 10px;
  padding: 0;
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
  resize: none;
  font-size: 1.5rem;
  background-color: #fff;
  color: #333;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 30px 0;

  h3 {
    margin: 0;
  }
`

const AddButton = styled(BlueButton)`
  margin: 0 30px 10px 30px;
  text-transform: uppercase;
`

export { Wrapper, Textarea, ButtonWrapper, AddButton, Form }
