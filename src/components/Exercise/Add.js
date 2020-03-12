import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Form from './Form'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ButtonEdit from './ButtonEdit'
import ButtonSave from './ButtonSave'
import * as S from './Form.styles'
import PropTypes from 'prop-types'

Add.propTypes = {
  handleExerciseAdd: PropTypes.func.isRequired,
}

export default function Add({ handleExerciseAdd }) {
  const [disabled, setDisabled] = useState(false)
  const { register, handleSubmit, formState } = useForm({ mode: 'onChange' })

  return (
    <>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        {(!disabled && <ButtonSave formState={formState} form={'add'} />) || (
          <ButtonEdit />
        )}
      </S.ButtonWrapper>
      <S.Wrapper id="add" onSubmit={handleSubmit(handleAdd)}>
        <Form register={register} disabled={disabled} />
      </S.Wrapper>
    </>
  )
  function handleAdd(data) {
    Object.keys(data).map(key => (data[key] = data[key].trim()))
    setDisabled(!disabled)
    if (!disabled) {
      handleExerciseAdd(data.name, data.type, data.instructions)
    }
  }
}
