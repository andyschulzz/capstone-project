import React from 'react'
import { Link } from 'react-router-dom'
import backToHome from '../icons/back.png'
import * as S from '../common/ButtonBackToHome.styles'

export default function ButtonBackToHome() {
  return (
    <Link to="/">
      <S.Image src={backToHome} alt="" />
    </Link>
  )
}
