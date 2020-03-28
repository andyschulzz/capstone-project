import React from 'react'
import { useForm } from 'react-hook-form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ButtonEdit from './ButtonEdit'
import Form from './Form'
import * as S from './Form.styles'
import PropTypes from 'prop-types'

Details.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  instructions: PropTypes.string,
  image: PropTypes.string,
}

export default function Details({ name, image, type, instructions }) {
  const { register } = useForm({
    defaultValues: {
      name,
      type,
      instructions,
    },
  })

  return (
    <S.Form data-testid="details" id="details">
      <S.ButtonWrapper>
        <ButtonBackToHome />
        <ButtonEdit />
      </S.ButtonWrapper>
      <Form register={register} image={image} />
    </S.Form>
  )
}
