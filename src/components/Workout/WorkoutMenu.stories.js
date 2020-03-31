import React from 'react'
import WorkoutMenu from './WorkoutMenu'

export default {
  title: 'Workout/WorkoutMenu',
  component: WorkoutMenu,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 150, position: 'relative' }}>
        {renderComponent()}
      </div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <WorkoutMenu />
    </>
  )
}
