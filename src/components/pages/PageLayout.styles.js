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
  positon: relative;
`

const Image = styled.img`
  position: absolute;
  top: 10px;
  width: 52px;
  height: 52px;
  z-index: 2;
`

const Anchor = styled(Link)`
  margin: 5px auto 5px 30px;
  display: flex;
  align-items: center;
`

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

export { Page, Header, Wrapper, Anchor, Image }
