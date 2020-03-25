import React, { useState } from 'react'
import ExerciseList from './ExerciseList'
import { BlueButton } from '../common/Button'
import { useHistory } from 'react-router-dom'
import * as S from './Add.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

Add.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutExercises: PropTypes.func.isRequired,
  handleWorkoutTitle: PropTypes.func.isRequired,
  workoutExercises: PropTypes.array,
}

export default function Add({
  exercises,
  handleWorkoutExercises,
  handleWorkoutTitle,
  workoutExercises,
}) {
  const history = useHistory()
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const [addMode, setAddMode] = useState(true)

  return (
    <S.Form data-testid="add-form" id="add" onSubmit={handleSubmit(onSubmit)}>
      <S.ButtonWrapper>
        <h3>Build Your Routine</h3>
        {workoutExercises.length && formState.isValid ? (
          <BlueButton mla>Next</BlueButton>
        ) : (
          <BlueButton inactive mla>
            Next
          </BlueButton>
        )}
      </S.ButtonWrapper>
      <S.Wrapper>
        <S.Textarea
          ref={register({ required: true, minLength: 1, maxLength: 30 })}
          autoFocus
          type="text"
          name="name"
          id="name"
          placeholder="Name your workout"
          required
          minLength="1"
          maxLength="30"
        />
        {addMode ? (
          <S.AddButton
            data-testid="add-button"
            primary
            onClick={() => setAddMode(!addMode)}
          >
            Add Exercises
          </S.AddButton>
        ) : (
          <ExerciseList
            exercises={exercises}
            handleWorkoutExercises={handleWorkoutExercises}
          />
        )}
      </S.Wrapper>
    </S.Form>
  )

  function onSubmit(input) {
    handleWorkoutTitle(input.name.trim())
    history.push('/workouts/details')
  }
}
