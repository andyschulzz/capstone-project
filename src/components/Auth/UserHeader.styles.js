import styled from 'styled-components/macro'
import { GiExitDoor } from 'react-icons/gi'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #efefef;
  margin-right: 30px;
  height: 48px;
`

const LogoutIcon = styled(GiExitDoor)`
  font-size: 20px;
  margin-right: 30px;
  cursor: pointer;
`

export { Wrapper, LogoutIcon }
