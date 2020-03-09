import React from 'react'
import ExerciseList from './ExerciseList'

export default {
  title: 'Exercise/ExerciseList',
  component: ExerciseList,
  decorators: [
    renderComponent => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  const exercises = [
    { id: 1, name: 'example', type: 'example', instructions: 'example' },
    { id: 2, name: 'example', type: 'example', instructions: 'example' },
  ]
  return <ExerciseList exercises={exercises} />
}
