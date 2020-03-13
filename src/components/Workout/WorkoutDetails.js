import React from 'react'
import Details from './Details.js'
import ButtonSave from './ButtonSave'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as S from './WorkoutDetails.styles'

export default function WorkoutDetails({
  selectedWorkouts,
  handleWorkoutSubmit,
}) {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const history = useHistory()

  return (
    <>
      <S.ButtonWrapper>
        <h3>Workout Volume</h3>
        <ButtonSave form={'details'} formState={formState} />
      </S.ButtonWrapper>
      <S.Wrapper id="details" onSubmit={handleSubmit(handleDetails)}>
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
      </S.Wrapper>
    </>
  )

  function handleDetails(data) {
    handleWorkoutSubmit(data)
    history.push('/workouts')
  }
}
