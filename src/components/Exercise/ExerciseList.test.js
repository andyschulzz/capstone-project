import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ExerciseList from './Exercise.js'
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

describe('<ExerciseList />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <ExerciseList exercises={exercisesMock} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
