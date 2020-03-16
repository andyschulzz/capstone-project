import React from 'react'
import Details from './Details'

export default {
  title: 'Exercise/Details',
  component: Details,
  decorators: [
    renderComponent => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return (
    <Details
      name={'Example Name'}
      type={'Example Type'}
      instructions={'Example Instructions'}
    />
  )
}
