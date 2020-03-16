import styled from 'styled-components/macro'
import { MdBackspace } from 'react-icons/md'

const Input = styled.input`
  font-size: inherit;
  padding: 5px 10px;
  outline: none;
  width: 150px;
  flex-grow: 2;
  border: none;
`

const Form = styled.form`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: auto;

  input:focus {
    outline: none;
  }
`
const Back = styled(MdBackspace)`
  font-size: 36px;
  margin-right: 5px;
  color: hsla(200, 100%, 50%, 0.5);
`

export { Input, Form, Back }
