import React, { useState } from 'react'
import ExerciseList from './ExerciseList'
import { BlueButton } from '../common/Button'
import { useHistory } from 'react-router-dom'
import * as S from './Add.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

Add.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
  handleWorkoutTitle: PropTypes.func.isRequired,
  selectedWorkouts: PropTypes.array.isRequired,
}

export default function Add({
  exercises,
  handleWorkoutAdd,
  handleWorkoutTitle,
  selectedWorkouts,
}) {
  const history = useHistory()
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const [addMode, setAddMode] = useState(true)

  return (
    <>
      <S.ButtonWrapper>
        <h3>Build your Routine</h3>
        {selectedWorkouts.length && formState.isValid ? (
          <BlueButton mla type="submit" form="add">
            Next
          </BlueButton>
        ) : (
          <BlueButton inactive mla type="submit" form="add">
            Next
          </BlueButton>
        )}
      </S.ButtonWrapper>
      <S.Form id="add" onSubmit={handleSubmit(onSubmit)}>
        <S.Textarea
          ref={register({ required: true, minLength: 3, maxLength: 30 })}
          autoFocus
          type="text"
          name="name"
          id="name"
          placeholder="Name your workout"
          required
        />
      </S.Form>
      {addMode ? (
        <S.AddButton primary onClick={() => setAddMode(!addMode)}>
          Add Exercises
        </S.AddButton>
      ) : (
        <S.Wrapper>
          <ExerciseList
            exercises={exercises}
            handleWorkoutAdd={handleWorkoutAdd}
          />
        </S.Wrapper>
      )}
    </>
  )

  function onSubmit(input) {
    handleWorkoutTitle(input.name.trim())
    history.push('/workouts/details')
  }
}
