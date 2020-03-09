import React from 'react'
import { action } from '@storybook/addon-actions'
import Exercise from './Exercise'
import { BrowserRouter } from 'react-router-dom'
import GlobalStyles from '../utils/GlobalStyles'

export default {
  title: 'Exercise',
  component: Exercise,
}

export const Default = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Exercise name="Ab Wheel" type="Core" />
    </BrowserRouter>
  )
}
