import React from 'react'
import WorkoutExerciseList from './WorkoutExerciseList'
import WorkoutButtonSubmit from './WorkoutButtonSubmit'
import { useHistory } from 'react-router-dom'
import * as S from './WorkoutAdd.styles'
import PropTypes from 'prop-types'
import { useForm } from 'react-hook-form'

WorkoutAdd.propTypes = {
  exercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
  handleWorkoutSubmit: PropTypes.func.isRequired,
  selectedWorkouts: PropTypes.array.isRequired,
}

export default function WorkoutAdd({
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
      <WorkoutButtonSubmit
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
