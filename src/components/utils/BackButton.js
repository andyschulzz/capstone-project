import React from 'react'
import { Link } from 'react-router-dom'
import pageBackIcon from '../icons/back.png'
import { Styled } from './BackButton.styles'

export default function BackButton(page) {
  return (
    <Link to="/">
      <Styled.Image src={pageBackIcon} alt="" />
    </Link>
  )
}
