import styled from 'styled-components/macro'
import { BlueButton } from '../common/Button'

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  scroll-behavior: smooth;

  & span:first-child {
    margin-top: 5px;
  }
`
const Form = styled.form`
  overflow-y: auto;
  padding: 0 40px 30px;
`

const Textarea = styled.textarea`
  margin-top: 20px;
  width: 100%;
  border: none;
  outline: none;
  height: 40px;
  resize: none;
  font-size: 1.4rem;
  background-color: #fff;
  color: #333;

  ::placeholder {
    font-weight: 300;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background: #fff;
  padding: 40px 0 30px;

  h3 {
    margin: 0;
    font-weight: bold;
  }
`

const AddButton = styled(BlueButton)`
  margin: 30px;
  text-transform: uppercase;
`

export { Wrapper, Textarea, ButtonWrapper, AddButton, Form }
