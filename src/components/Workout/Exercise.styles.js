import styled from 'styled-components/macro'

const Exercise = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 36px 10px;
  text-decoration: none;
  cursor: pointer;

  p:first-child {
    margin-top: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child {
    margin-top: 0;
  }
`

const Text = styled.p`
  font-size: ${props => (props.isName ? 1.1 : 0.8)}rem;
  margin: ${props => (props.isName ? '10px 0 0 0' : 0)};
  font-weight: ${props => props.isType && 300};
  color: ${props => props.isType && '#999'};
`

const Image = styled.img`
  width: ${props => (props.isChecked ? 40 : 46)}px;
  height: ${props => (props.isChecked ? 40 : 46)}px;
  margin: ${props => (props.isChecked ? '3px 39px 3px 3px' : '0 36px 0 0')};
`

export { Exercise, Text, Wrapper, Image }
