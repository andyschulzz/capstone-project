import styled from 'styled-components/macro'

const Wrapper = styled.form`
  padding: 30px;
  overflow-y: auto;
  scroll-behavior: smooth;

  h3 {
    margin-top: 40px;
  }

  h3:first-child {
    margin-top: 0;
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 30px 0;

  h3 {
    margin: 0;
  }
`

export { Wrapper, ButtonWrapper }
