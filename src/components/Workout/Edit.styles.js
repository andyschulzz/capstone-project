import styled from 'styled-components/macro'

const Form = styled.form`
  padding: 0 40px 30px;
  overflow-y: auto;
  scroll-behavior: smooth;

  h3:first-child {
    margin: 0;
  }

  h3 h3 {
    margin-top: 0;
  }

  &:valid button {
    background: hsl(120, 50%, 50%);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background: #fff;
  align-items: center;
  padding: 40px 0 30px;
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

export { Form, ButtonWrapper, Textarea }
