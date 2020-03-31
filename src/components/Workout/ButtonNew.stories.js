import React from 'react'
import ButtonNew from './ButtonNew'

export default {
  title: 'Workout/ButtonNew',
  component: ButtonNew,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <>
      <ButtonNew />
    </>
  )
}
