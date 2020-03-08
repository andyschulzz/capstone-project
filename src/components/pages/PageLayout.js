import React from 'react'
import styled from 'styled-components/macro'

export default function PageLayout({ title, children }) {
  return (
    <PageStyled>
      <Header>
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
    width: 35px;
    height: 35px;
    margin-right: auto;
    margin-left: 20px;
  }
`

const Wrapper = styled.div`
  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #efefef;
  margin-right: 20px;
`
