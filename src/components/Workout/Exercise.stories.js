import React from 'react'
import Exercise from './Exercise'

export default {
  title: 'Workout/Exercise',
  component: Exercise,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <Exercise name="Ab Wheel" type="Core" image="/images/Abwheel.png" />
    </>
  )
}
