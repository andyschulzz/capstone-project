import React from 'react'
import { render, cleanup } from '@testing-library/react'
import WorkoutMenu from './WorkoutMenu.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const handleWorkoutDeleteMock = jest.fn()
const handleWorkoutEditMock = jest.fn()

describe('<WorkoutMenu />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <WorkoutMenu
          title="Test"
          handleWorkoutDelete={handleWorkoutDeleteMock}
          handleWorkoutEdit={handleWorkoutEditMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
