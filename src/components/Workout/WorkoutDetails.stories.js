import React from 'react'
import WorkoutDetails from './WorkoutDetails'

const workoutExercises = [
  {
    id: 'v8SmM94nv4ipsTS2aRlL',
    image: '/images/placeholder2.png',
    instructions: 'Example',
    name: 'Example Exercise',
    reps: '2',
    sets: '2',
    title: 'Example Workout One',
    type: 'Core',
    weight: '2',
  },
]

export default {
  title: 'Workout/WorkoutDetails',
  component: WorkoutDetails,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <WorkoutDetails workoutExercises={workoutExercises} />
    </>
  )
}
