import React from 'react'
import ExerciseList from './ExerciseList'

const exercises = [
  {
    id: 1,
    name: 'example',
    type: 'example',
    instructions: 'example',
    image: '/images/deadlift.png',
  },
  {
    id: 2,
    name: 'example',
    type: 'example',
    instructions: 'example',
    image: '/images/deadlift.png',
  },
]

export default {
  title: 'Exercise/ExerciseList',
  component: ExerciseList,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return <ExerciseList exercises={exercises} />
}
