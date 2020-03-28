import React, { useEffect } from 'react'
import Details from './Details.js'
import { GreenButton } from '../common/Button'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import * as S from './Edit.styles'
import PropTypes from 'prop-types'

Edit.propTypes = {
  selectedWorkouts: PropTypes.object.isRequired,
  handleWorkoutChange: PropTypes.func.isRequired,
}

export default function Edit({ selectedWorkouts, handleWorkoutChange }) {
  const { register, handleSubmit, setValue } = useForm()
  useEffect(() => {
    Object.entries(selectedWorkouts).forEach(([id, workout], index) => {
      setValue('name', workout.title)
      setValue(`weight[${index}]`, workout.weight)
      setValue(`reps[${index}]`, workout.reps)
      setValue(`sets[${index}]`, workout.sets)
    })
  }, [selectedWorkouts, setValue])

  const history = useHistory()
  console.log(selectedWorkouts)

  return (
    <S.Form
      data-testid="edit-form"
      id="details"
      onSubmit={handleSubmit(handleEdit)}
    >
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
      {Object.entries(selectedWorkouts).map(([id, item], index) => {
        return (
          <Details register={register} key={index} {...item} index={index} />
        )
      })}
    </S.Form>
  )

  function handleEdit(data) {
    handleWorkoutChange(data)
    history.push('/workouts')
  }
}
