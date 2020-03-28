import React from 'react'
import ButtonReset from './ButtonReset'

export default {
  title: 'ButtonReset',
  component: ButtonReset,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  return <ButtonReset />
}
