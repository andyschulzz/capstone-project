import React from 'react'
import ExerciseAdd from './ExerciseAdd'

export default {
  title: 'Exercise/ExerciseAdd',
  component: ExerciseAdd,
  decorators: [
    renderComponent => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return <ExerciseAdd />
}
