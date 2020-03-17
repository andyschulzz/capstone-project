import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

const Page = styled.main`
  display: flex;
  flex-direction: column;
  overflow: auto;
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57595d;
  height: 48px;
  img {
    width: 38px;
    height: 38px;
  }
`
const Anchor = styled(Link)`
  margin: 5px auto 5px 30px;
  display: flex;
  align-items: center;
`

const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #efefef;
  margin-right: 30px;
`

export { Page, Header, Wrapper, Anchor }
