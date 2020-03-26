import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

const Form = styled.form`
  display: grid;
  grid-gap: 12px;
  width: 100%;
  max-width: 400px;
  > * {
    margin: 0;
  }
`
const Input = styled.input`
  border: 1px solid #ccc;
  border-radius: 0;
  padding: 8px 8px 4px 8px;
  font-family: inherit;
  font-size: 1rem;
  font-weight: inherit;
  :focus,
  :invalid {
    box-shadow: 0 0 2px 2px #888;
  }
`
const ButtonWrapper = styled.section`
  display: grid;
  grid-gap: 8px;
  grid-template: 1fr / 1fr 1fr;
`


const Anchor = styled(NavLink)`
  margin: 12px 0;
  width: 100%;
  border: none;
  padding: 8px;
  text-align: center;
  font-size: 1rem;
  color: #888;
  text-decoration: none;
  align-self: center;
  cursor: pointer;
  background: #999;
`


export { Form, ButtonWrapper, Input,  Anchor }
