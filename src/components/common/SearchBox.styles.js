import styled from 'styled-components/macro'
import { MdBackspace } from 'react-icons/md'

const Input = styled.input`
  font-size: inherit;
  padding: 5px 0 5px 10px;
  outline: none;
  flex-grow: 2;
  border: none;
  border-radius: 5px;
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

export { Input, Form }
