import styled from 'styled-components/macro'
import { MdMoreHoriz } from 'react-icons/md'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  margin: 5px 0;
`

const Span = styled.span`
    font-size: ${(props) => (props.isWeight ? 0.9 : 1.1)}rem;
    margin: 0 ${(props) => (props.isWeight ? 10 : 5)}px;
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #999;
`

const MenuIcon = styled(MdMoreHoriz)`
  font-size: 28px;
  margin-left: auto;
  margin-top: -10px;
  color: hsl(200, 100%, 50%);
  cursor: pointer;
`

const TitleWrapper = styled.div`
  display: flex;
`

const WorkoutWrapper = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;

  h3 {
    margin: 0;
    font-size: 1.4rem;
  }

  span {
    align-self: center;
  }
`

export { Wrapper, DetailsWrapper, Span, MenuIcon, TitleWrapper, WorkoutWrapper }
