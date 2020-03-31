import React from 'react'
import { BlueButton, Button, GreenButton } from './Button'
import ButtonBackToHome from './ButtonBackToHome'

export default {
  title: 'Button',
  component: Button,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const blue = () => {
  return <BlueButton>Next</BlueButton>
}

export const green = () => {
  return <GreenButton>Save</GreenButton>
}

export const back = () => {
  return <ButtonBackToHome />
}
