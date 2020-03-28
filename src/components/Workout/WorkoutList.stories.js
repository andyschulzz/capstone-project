import React from 'react'
import WorkoutList from './WorkoutList'

const workouts = [
  {
    v8SmM94nv4ipsTS2aRlL: {
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
  },
  {
    JkxGyMTtho4U5FTMJrwO: {
      id: 'JkxGyMTtho4U5FTMJrwO',
      image: '/images/placeholder2.png',
      instructions: 'Example',
      name: 'Example Exercise ',
      reps: '1',
      sets: '1',
      title: 'Example Workout Two',
      type: 'Arms',
      weight: '1',
    },
  },
]

export default {
  title: 'Workout/WorkoutList',
  component: WorkoutList,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <WorkoutList workouts={workouts} />
    </>
  )
}
