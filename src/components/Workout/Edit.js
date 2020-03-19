import React from 'react'
import Details from './Details.js'
import { GreenButton } from '../common/Button'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as S from './Edit.styles'
import PropTypes from 'prop-types'

WorkoutDetails.propTypes = {
  selectedWorkouts: PropTypes.array.isRequired,
  handleWorkoutChange: PropTypes.func.isRequired,
}

export default function WorkoutDetails({
  selectedWorkouts,
  handleWorkoutChange,
}) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: selectedWorkouts[0].title,
    },
  })
  const history = useHistory()

  return (
    <S.Form id="details" onSubmit={handleSubmit(handleEdit)}>
      <S.ButtonWrapper>
        <h3>Edit Your Workout</h3>
        <GreenButton inactive mla>
          Save
        </GreenButton>
      </S.ButtonWrapper>
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
      {selectedWorkouts.map((workout, index) => {
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

  function handleEdit(data) {
    handleWorkoutChange(data)
    history.push('/workouts')
  }
}
