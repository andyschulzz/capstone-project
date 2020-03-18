import styled from 'styled-components/macro'

const Input = styled.input`
  flex-grow: 2;
  font-size: inherit;
  width: 75%;
  padding: 5px 0 5px 10px;
  outline: none;
  border: none;
  border-radius: 5px;
`

const Form = styled.form`
  display: flex;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-left: auto;
  flex-grow: 1;
  max-width: 300px;

  input:focus {
    outline: none;
  }
`

export { Input, Form }
