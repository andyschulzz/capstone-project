import React from 'react'
import ExerciseDetails from './ExerciseAdd'

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
  return <ExerciseDetails name={'Test'} type={'Test'} />
}
