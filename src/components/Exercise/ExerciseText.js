import React from 'react'
import * as S from './ExerciseForm.styles'

export default function ExerciseText({
  disabled = true,
  register,
  selectedExercise = '',
}) {
  return (
    <>
      <S.Textarea
        ref={register({ required: true, minLength: 4 })}
        autoFocus
        isTitle
        isExerciseName
        type="text"
        name="name"
        id="name"
        placeholder="Name of the exercise?"
        required
        disabled={disabled}
      />
      {selectedExercise.image && <img alt="" src={selectedExercise.image} />}
      <S.Label htmlFor="type">Type</S.Label>
      <S.Textarea
        ref={register({ required: true, minLength: 4 })}
        isTitle
        type="text"
        name="type"
        id="type"
        placeholder="Type of the exercise?"
        required
        disabled={disabled}
      />
      <S.Label htmlFor="instructions">Instructions</S.Label>
      <S.Textarea
        ref={register({ required: true, minLength: 4 })}
        type="text"
        name="instructions"
        id="instructions"
        placeholder="Please explain the exercise!"
        required
        disabled={disabled}
      />
    </>
  )
}
