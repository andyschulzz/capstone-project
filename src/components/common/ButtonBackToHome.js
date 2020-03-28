import React from 'react'
import { Link } from 'react-router-dom'
import * as S from '../common/ButtonBackToHome.styles'

export default function ButtonBackToHome() {
  return (
    <Link to="/exercises">
      <S.Image src="/icons/back.png" alt="" />
    </Link>
  )
}
