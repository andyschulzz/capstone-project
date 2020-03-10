import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  a {
    text-align: center;
  }

  h3 {
    margin: 0;
  }
`

const Wrapper = styled.section`
  display: grid;
  padding: 0 30px 30px;
  gap: 36px;
  overflow-y: auto;
  scroll-behavior: smooth;
  max-height: 100%;

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
