import React from 'react'
import { render, cleanup } from '@testing-library/react'
import List from './Exercise.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

const exercisesMock = [
  {
    id: 1,
    name: 'Test',
    type: 'Test',
    instructions: 'Test',
    title: 'Test',
  },
]

describe('<List />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <List exercises={exercisesMock} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
