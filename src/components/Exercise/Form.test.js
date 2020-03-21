import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Form from './Exercise.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

describe('<Form />', () => {
  it('should render correctly', () => {
    const registerMock = jest.fn()
    const { asFragment } = render(
      <Router>
        <Form disabled="true" register={registerMock} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
