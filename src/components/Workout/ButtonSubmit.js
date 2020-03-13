import React from 'react'
import submit from '../icons/submitone.png'
import * as S from './ButtonSubmit.styles'

export default function ButtonSubmit({ form }) {
  return (
    <S.SubmitWrapper>
      <input type="image" name="submitbutton" src={submit} alt="" form={form} />
    </S.SubmitWrapper>
  )
}
