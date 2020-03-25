import React from 'react'
import Add from './Add'

export default {
  title: 'Exercise/Add',
  component: Add,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return <Add />
}
