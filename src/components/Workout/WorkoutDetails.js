import React from 'react'
import Details from './Details.js'
import { GreenButton } from '../common/Button'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as S from './WorkoutDetails.styles'
import PropTypes from 'prop-types'

WorkoutDetails.propTypes = {
  workoutExercises: PropTypes.array.isRequired,
  handleWorkoutAdd: PropTypes.func.isRequired,
}

export default function WorkoutDetails({ handleWorkoutAdd, workoutExercises }) {
  const { register, handleSubmit } = useForm()
  const history = useHistory()

  return (
    <S.Form
      data-testid="details-form"
      id="details"
      onSubmit={handleSubmit(handleDetails)}
    >
      <S.ButtonWrapper>
        <h3>Workout Volume</h3>
        <GreenButton inactive mla>
          Save
        </GreenButton>
      </S.ButtonWrapper>
      {workoutExercises.map((workout, index) => {
        return (
          <Details
            register={register}
            key={workout.id}
            {...workout}
            index={index}
          />
        )
      })}
    </S.Form>
  )

  function handleDetails(data) {
    handleWorkoutAdd(data)
    history.push('/workouts')
  }
}
