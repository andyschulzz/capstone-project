import styled from 'styled-components/macro'

const Form = styled.form`
  padding: 30px;
  overflow-y: auto;
  scroll-behavior: smooth;

  h3 {
    margin-top: 40px;
  }

  h3:first-child {
    margin-top: 0;
  }

  &:valid button {
    background: hsl(120, 50%, 50%);
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;

  h3 {
    margin: 0;
  }
`

export { Form, ButtonWrapper }
