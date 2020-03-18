import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { MdPlaylistAdd } from 'react-icons/md'
import { IoIosFitness } from 'react-icons/io'

const Anchor = styled(NavLink)`
  flex-grow: 1;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57595d;
  color: #ccc;

  &.active {
    background: hsl(200, 100%, 50%);
    color: #fff;
  }
`
const Fitness = styled(IoIosFitness)`
  font-size: 28px;
  font-weight: bold;
`
const Workouts = styled(MdPlaylistAdd)`
  font-size: 28px;
  font-weight: bold;
`

const Navigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    margin: 0;
    margin-top: -5px;
    padding: 0;
    font-size: 10px;
  }
`

export { Anchor, Navigation, Fitness, Workouts, Wrapper }
