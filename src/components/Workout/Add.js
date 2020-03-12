import React from 'react'
import WorkoutExerciseList from './ExerciseList'
import ButtonSubmit from './ButtonSubmit'
import { useHistory } from 'react-router-dom'
import * as S from './Add.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

Add.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
  handleWorkoutSubmit: PropTypes.func.isRequired,
  selectedWorkouts: PropTypes.array.isRequired,
}

export default function Add({
  exercises,
  handleWorkoutAdd,
  handleWorkoutSubmit,
  selectedWorkouts,
}) {
  const history = useHistory()
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  })

  return (
    <>
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
        <WorkoutExerciseList
          exercises={exercises}
          handleWorkoutAdd={handleWorkoutAdd}
        />
      </S.Wrapper>
      <ButtonSubmit
        handleWorkoutSubmit={handleWorkoutSubmit}
        selectedWorkouts={selectedWorkouts}
      />
    </>
  )

  function onSubmit(input) {
    handleWorkoutSubmit(input.name)
    history.push('/workouts')
  }
}
