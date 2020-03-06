import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

const Button = styled(Link)`
  background: none;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-left: ${props => (props.mla ? 'auto' : '')};
  padding: 5px 15px;
  font-size: 1rem;
  cursor: pointer;
  color: white;
  background-color: ${props => props.danger && 'hsl(0, 100%, 50%)'}
    ${props => props.primary && 'hsl(200, 100%, 50%)'};

  &:hover {
    background-color: ${props => props.danger && 'hsl(0, 100%, 35%)'}
      ${props => props.primary && 'hsl(200, 100%, 35%)'};
  }
`

const Image = styled.img`
  width: 25px;
  height: 25px;
`

export const Styled = {
  Button,
  Image,
}
