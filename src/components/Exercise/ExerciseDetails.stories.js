import React from 'react'
import ExerciseDetails from './ExerciseDetails'

export default {
  title: 'Exercise/ExerciseDetails',
  component: ExerciseDetails,
  decorators: [
    renderComponent => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <ExerciseDetails
      name={'Example Name'}
      type={'Example Type'}
      instructions={'Example Instructions'}
    />
  )
}
