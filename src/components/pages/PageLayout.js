import React from 'react'
import styled from 'styled-components/macro'
import logo from '../icons/logo2.png'

export default function PageLayout({ title, children }) {
  return (
    <PageStyled>
      <Header>
        <img src={logo} alt="" />
        <Wrapper>{title}</Wrapper>
      </Header>
      {children}
    </PageStyled>
  )
}

const PageStyled = styled.main`
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
    margin: 5px auto 5px 30px;
  }
`

const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #efefef;
  margin-right: 30px;
`
