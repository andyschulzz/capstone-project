import React from 'react'
import Edit from './Edit'

const exercises = {
  v8SmM94nv4ipsTS2aRlL: {
    id: 'v8SmM94nv4ipsTS2aRlL',
    image: '/images/placeholder2.png',
    instructions: 'test',
    name: 'Example',
    reps: '2',
    sets: '2',
    title: 'Example',
    type: 'test',
    weight: '2',
  },
}

export default {
  title: 'Workout/Edit',
  component: Edit,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <Edit selectedWorkouts={exercises} />
    </>
  )
}
