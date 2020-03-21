import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from './Form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ButtonEdit from './ButtonEdit'
import { GreenButton } from '../common/Button'
import * as S from './Form.styles'
import PropTypes from 'prop-types'

Add.propTypes = {
  handleExerciseAdd: PropTypes.func.isRequired,
}

export default function Add({ handleExerciseAdd }) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit } = useForm()

  return (
    <S.Form data-testid="add-form" id="add" onSubmit={handleSubmit(handleAdd)}>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        {(!disabled && (
          <GreenButton mla inactive>
            Save
          </GreenButton>
        )) || <ButtonEdit />}
      </S.ButtonWrapper>
      <S.Wrapper>
        <Form register={register} disabled={disabled} />
      </S.Wrapper>
    </S.Form>
  )
  function handleAdd(data) {
    Object.keys(data).map(key => (data[key] = data[key].trim()))
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseAdd(data)
    }
  }
}
