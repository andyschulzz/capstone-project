import React from 'react'
import * as S from './PageLayout.styles'

export default function PageLayout({ title, children }) {
  return (
    <S.Page>
      <S.Header>
        <S.Anchor to="/">
          <S.Image src="/icons/logo2.png" alt="" />
        </S.Anchor>
        <S.Wrapper>{title}</S.Wrapper>
      </S.Header>
      {children}
    </S.Page>
  )
}
