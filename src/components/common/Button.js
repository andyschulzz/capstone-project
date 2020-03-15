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
  background-color: ${props =>
    props.danger
      ? 'hsl(0, 100%, 50%)'
      : props.primary
      ? 'hsl(200, 100%, 50%)'
      : ''};

  &:hover {
    background-color: ${props =>
      props.danger
        ? 'hsl(0, 100%, 50%)'
        : props.primary
        ? 'hsl(200, 100%, 50%)'
        : ''};
  }

  &:disabled {
    background: ${props =>
      props.danger
        ? 'hsla(0, 100%, 50%, 0.2)'
        : props.primary
        ? 'hsla(200, 100%, 50%, 0.2)'
        : ''};
  }

  a {
    text-decoration: none;
    color: white;
  }
`

const ButtonEmpty = styled(Button)`
  justify-content: end;
  padding: 5px 2px;
  background-color: '';
  color: '';
`
export { Button, ButtonEmpty }
