import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { MdPlaylistAdd, MdFitnessCenter } from 'react-icons/md'

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
const Fitness = styled(MdFitnessCenter)`
  font-size: 34px;
  font-weight: bold;
`
const Workouts = styled(MdPlaylistAdd)`
  font-size: 36px;
  font-weight: bold;
`

const Navigation = styled.nav`
  display: grid;
  grid-auto-flow: column;
`

export { Anchor, Navigation, Fitness, Workouts }
