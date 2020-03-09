import React from 'react'
import Button from './Button'

export default {
  title: 'Exercise/Button',
  component: Button,
  decorators: [
    renderComponent => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const primary = () => {
  return <Button primary>Primary</Button>
}

export const danger = () => {
  return <Button danger>Danger</Button>
}
