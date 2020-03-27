import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
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
  width: 100%;
`

const InputWrapper = styled.div`
  border-bottom: 1px solid #ccc;
  width: 100%;
  margin-bottom: ${(props) => (props.bottom ? '40px' : '20px')};
  display: flex;
  align-items: center;
`

const MailIcon = styled(GoMail)`
  font-size: 16px;
`

const LockIcon = styled(GoLock)`
  font-size: 16px;
`

const ButtonWrapper = styled.div`
  display: flex;
`

const Anchor = styled(NavLink)`
  width: 100%;
  border: none;
  padding: 8px;
  text-align: center;
  font-size: 1rem;
  color: hsl(200, 100%, 50%);
  text-decoration: none;
  align-self: center;
  cursor: pointer;
`

const Logo = styled.img`
  width: 150px;
  height: 150px;
  opacity: 0.8;
  margin: 42px;
`

const Paragraph = styled.p`
  margin-top: 40px;
`

const Error = styled.p`
  color: #bf1650;
  font-size: 0.8rem;
  align-self: start;
  margin-bottom: 10px;

  &::before {
    display: inline;
    content: '⚠ ';
  }
`

export {
  Form,
  ButtonWrapper,
  Input,
  Anchor,
  Logo,
  Paragraph,
  InputWrapper,
  MailIcon,
  LockIcon,
  Error,
}
