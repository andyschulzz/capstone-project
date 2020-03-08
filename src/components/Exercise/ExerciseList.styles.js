import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  padding: 30px;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 30px 30px;
  gap: 30px;
  overflow-y: auto;
  scroll-behavior: smooth;
`

export { ButtonWrapper, Wrapper }
