import React from 'react'
import submit from '../icons/submitone.png'
import * as S from './ButtonSubmit.styles'

export default function ButtonSubmit({ selectedWorkouts }) {
  return (
    <S.SubmitWrapper>
      {selectedWorkouts.length !== 0 && (
        <input
          type="image"
          name="submitbutton"
          src={submit}
          alt=""
          form="add"
        />
      )}
    </S.SubmitWrapper>
  )
}
