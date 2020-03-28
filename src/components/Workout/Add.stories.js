import React from 'react'
import Add from './Add'

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
  title: 'Workout/Add',
  component: Add,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <Add exercises={exercises} workoutExercises={exercises} />
    </>
  )
}
