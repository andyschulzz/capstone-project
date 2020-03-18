import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Exercise = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 0 36px 10px;
  text-decoration: none;

  p:first-child {
    margin-top: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: #333;

  p:first-child {
    margin-top: 0;
  }
`

const Text = styled.p`
  font-size: ${props => (props.isName ? 1 : 0.8)}rem;
  margin: ${props => (props.isName ? '10px 0 0 0' : 0)};
  font-weight: ${props => props.isType && 300};
  color: ${props => props.isType && '#999'};
`

const Image = styled.img`
  width: ${props => (props.isPlaceholder ? 32 : 46)}px;
  height: ${props => (props.isPlaceholder ? 32 : 46)}px;
  margin-right: ${props => (props.isPlaceholder ? 44 : 36)}px;
`

export { Exercise, Text, Wrapper, Image }
