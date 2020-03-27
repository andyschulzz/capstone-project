import styled from 'styled-components/macro'
import { IoIosLogOut } from 'react-icons/io'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #efefef;
  margin-right: 30px;
  height: 48px;
`

const LogoutIcon = styled(IoIosLogOut)`
  font-size: 20px;
  margin-right: 30px;
  cursor: pointer;
  color: #efefef;
`

export { Wrapper, LogoutIcon }
