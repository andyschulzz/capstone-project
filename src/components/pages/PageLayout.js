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
  align-content: flex-start;
  overflow: auto;
`
const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #57595d;
`

const Wrapper = styled.div`
  margin-left: 10px;
  text-transform: uppercase;
  font-weigth: 300;
  letter-spacing: 0.1em;
`
