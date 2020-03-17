import styled from 'styled-components/macro'

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-left: ${props => (props.mla ? 'auto' : '')};
  padding: 5px 15px;
  font-size: 1rem;
  height: 36px;
  cursor: pointer;
  color: white;
  text-decoration: none;

  a {
    text-decoration: none;
    color: white;
  }
`

const BlueButton = styled(Button)`
  background-color: ${props =>
    props.inactive ? 'hsla(200, 100%, 50%, 0.2)' : 'hsl(200, 100%, 50%)'};
`

const GreenButton = styled(Button)`
  background-color: ${props =>
    props.inactive ? 'hsla(120, 50%, 50%, 0.2)' : 'hsl(120, 50%, 50%)'};
`

const RedButton = styled(Button)`
  background-color: ${props =>
    props.inactive ? 'hsla(0, 100%, 50%, 0.2)' : 'hsl(0, 100%, 50%)'};
`

export { Button, BlueButton, GreenButton, RedButton }
