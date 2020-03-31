import React from 'react'
import Details from './Details'
import { useForm } from 'react-hook-form'

export default {
  title: 'Workout/Details',
  component: Details,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  const { register } = useForm()
  return (
    <>
      <Details
        register={register}
        name="Ab Wheel"
        sets="5"
        reps="5"
        weight="10"
        index="1"
      />
    </>
  )
}
