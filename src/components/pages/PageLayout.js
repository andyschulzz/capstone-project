import React from 'react'
import * as S from './PageLayout.styles'
import logo from '../icons/logo2.png'

export default function PageLayout({ title, children }) {
  return (
    <S.Page>
      <S.Header>
        <S.Anchor to="/">
          <img src={logo} alt="" />
        </S.Anchor>
        <S.Wrapper>{title}</S.Wrapper>
      </S.Header>
      {children}
    </S.Page>
  )
}
