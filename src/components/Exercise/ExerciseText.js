import React from 'react'
import * as S from './Exercise.styles'

export default function ExerciseText({ disabled = true, register }) {
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
