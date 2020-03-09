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
  display: grid;
  grid-template-rows: 48px auto;
  overflow: auto;
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57595d;

  img {
    width: 38px;
    height: 38px;
    margin-right: auto;
    margin-left: 30px;
  }
`

const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #efefef;
  margin-right: 30px;
`
