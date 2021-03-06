import React from 'react'
import { render } from '@testing-library/react'
import Exercise from './Exercise.js'
import { MemoryRouter as Router } from 'react-router-dom'

describe('<Exercise />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Exercise name="Arnold Press" type="Shoulder" />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
