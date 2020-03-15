import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  gap: 36px;
  overflow-y: auto;
  scroll-behavior: smooth;

  & span:first-child {
    margin-top: 5px;
  }
`
const Span = styled.span`
  font-size: 0.8rem;
  margin: 20px 0 0;
  color: #888;
  font-weight: 300;
`

const Container = styled.div`
  align-self: center;
  margin-top: 50px;
  text-transform: uppercase;
`

export { ButtonWrapper, Wrapper, Span, Container }
