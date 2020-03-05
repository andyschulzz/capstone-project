import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;

  a {
    color: white;
    text-decoration: none;
  }
`
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  gap: 15px;
  overflow-y: auto;
  scroll-behavior: smooth;
`
export const Styled = {
  ButtonWrapper,
  Wrapper,
}
