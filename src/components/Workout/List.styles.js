import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  margin: 5px 0;
}
`

const Span = styled.span`
    font-size: ${props => (props.isWeight ? 0.9 : 1.1)}rem;
    margin: 0 ${props => (props.isWeight ? 10 : 5)}px;
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
`

export { Wrapper, DetailsWrapper, Span }
