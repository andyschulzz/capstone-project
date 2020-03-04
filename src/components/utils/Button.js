import styled from 'styled-components/macro'

export default styled.button`
  background: none;
  border: none;
  outline: none;
  border-radius: 5px;
  margin-left: auto;
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