import React from 'react'
import PageLayout from './PageLayout'
import { BlueButton } from '../common/Button'
import { Link } from 'react-router-dom'
import * as S from './NoMatch.styles'

function NoMatch() {
  return (
    <PageLayout>
      <S.ImageContainer>
        <S.Image src="/images/NoMatch.png" />
        <BlueButton as={Link} to="/">
          Go Back Home
        </BlueButton>
      </S.ImageContainer>
    </PageLayout>
  )
}

export default NoMatch
