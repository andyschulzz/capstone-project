import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ButtonEdit from './ButtonEdit'
import Form from './Form'
import * as S from './Form.styles'
import PropTypes from 'prop-types'

Details.propTypes = {
  selectedExercise: PropTypes.object,
}

export default function Details({ name, type, instructions, image }) {
  const { register } = useForm({
    defaultValues: {
      name,
      type,
      instructions,
    },
  })
  return (
    <>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        <ButtonEdit />
      </S.ButtonWrapper>
      <S.Wrapper>
        <Form register={register} image={image} />
      </S.Wrapper>
    </>
  )
}
