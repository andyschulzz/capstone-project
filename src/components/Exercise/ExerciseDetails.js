import React from 'react'
import ButtonBackToHome from '../common/ButtonBackToHome'
import ExerciseButtonEdit from './ExerciseButtonEdit'
import ExerciseText from './ExerciseText'
import * as S from './ExerciseForm.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

ExerciseDetails.propTypes = {
  selectedExercise: PropTypes.object,
}

export default function ExerciseDetails({ name, type, instructions, image }) {
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
        <ExerciseButtonEdit />
      </S.ButtonWrapper>
      <S.Wrapper>
        <ExerciseText register={register} image={image} />
      </S.Wrapper>
    </>
  )
}
