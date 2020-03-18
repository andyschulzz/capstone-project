import styled from 'styled-components/macro'
import { BlueButton } from '../common/Button'

const ButtonWrapper = styled.div`
  display: flex;
  padding: 40px 0 30px;
  background: #fff;
  position: sticky;
  top: 0;
`
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 40px 30px;
  overflow-y: auto;
  scroll-behavior: smooth;

  & span:first-child {
    margin-top: 5px;
  }
`

const Span = styled.span`
  font-size: 0.8rem;
  margin: 20px 0 20px 0;
  color: #888;
  font-weight: 300;
`

const Container = styled.div`
  align-self: center;
  margin-top: 50px;
  text-transform: uppercase;
`

const ButtonAdd = styled(BlueButton)`
  margin-right: 36px;
`

export { ButtonWrapper, Wrapper, Span, Container, ButtonAdd }
