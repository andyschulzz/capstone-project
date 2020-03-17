import styled from 'styled-components/macro'

const Form = styled.form`
  padding: 0 40px 30px;
  overflow-y: auto;
  scroll-behavior: smooth;

  h3 {
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

  h3 {
    margin: 0;
  }
`

export { Form, ButtonWrapper }
