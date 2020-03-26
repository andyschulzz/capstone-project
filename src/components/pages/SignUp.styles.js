import styled from 'styled-components/macro'
import { GoMail, GoLock } from 'react-icons/go'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  > * {
    margin: 0;
  }
`
const Input = styled.input`
  border: none;
  outline: none;
  padding: 10px 10px 6px 10px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
`

const MailIcon = styled(GoMail)`
  font-size: 16px;
`

const LockIcon = styled(GoLock)`
  font-size: 16px;
`

const InputWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  margin-bottom: ${(props) => (props.bottom ? '40px' : '20px')};
  display: flex;
  align-items: center;
`

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  button:first-child {
    margin-right: 20px;
  }
`

const Main = styled.main`
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export { Form, Input, ButtonWrapper, Main, InputWrapper, MailIcon, LockIcon }
