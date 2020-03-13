import React from 'react'
import ExerciseList from './ExerciseList'
import ButtonSave from './ButtonSave'
import { useHistory } from 'react-router-dom'
import * as S from './Add.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

Add.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
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

  return (
    <>
      <S.ButtonWrapper>
        <h3>Build your Routine</h3>
        {selectedWorkouts.length === 0 ? (
          <ButtonSave form={'add'} formState={false} />
        ) : (
          <ButtonSave form={'add'} formState={formState} />
        )}
      </S.ButtonWrapper>
      <form id="add" onSubmit={handleSubmit(onSubmit)}>
        <S.Textarea
          ref={register({ required: true })}
          autoFocus
          type="text"
          name="name"
          id="name"
          placeholder="Name your workout"
        />
      </form>
      <S.Wrapper>
        <ExerciseList
          exercises={exercises}
          handleWorkoutAdd={handleWorkoutAdd}
        />
      </S.Wrapper>
    </>
  )

  function onSubmit(input) {
    handleWorkoutTitle(input.name)
    history.push('/workouts/details')
  }
}
