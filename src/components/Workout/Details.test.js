import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Details from './Details.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const registerMock = jest.fn()

describe('<Details />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Details
          register={registerMock}
          name="Arnold Press"
          index={1}
          reps="5"
          sets="5"
          weight="10"
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
