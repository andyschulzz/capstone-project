import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Details from './Details.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

describe('<Details />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Details name="Arnold Press" type="Shoulder" instructions="Test" />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
