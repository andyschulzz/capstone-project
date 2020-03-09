import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
`
const Wrapper = styled.section`
  display: grid;
  padding: 0 30px 30px;
  gap: 36px;
  overflow-y: auto;
  scroll-behavior: smooth;

  & span:first-child {
    margin-top: 5px;
  }
`
const Heading = styled.span`
  font-size: 0.8rem;
  margin: 20px 0 0;
  color: #888;
  font-weight: 300;
`

export { ButtonWrapper, Wrapper, Heading }
