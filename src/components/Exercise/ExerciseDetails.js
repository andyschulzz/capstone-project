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

export default function ExerciseDetails({ selectedExercise = '' }) {
  const { register } = useForm({
    defaultValues: {
      name: selectedExercise.name,
      type: selectedExercise.type,
      instructions: selectedExercise.instructions,
    },
  })
  return (
    <>
      <S.ButtonWrapper>
        <ButtonBackToHome />
        <ExerciseButtonEdit />
      </S.ButtonWrapper>
      <S.Wrapper>
        {selectedExercise.image && <img alt="" src={selectedExercise.image} />}
        <ExerciseText register={register} selectedExercise={selectedExercise} />
      </S.Wrapper>
    </>
  )
}
