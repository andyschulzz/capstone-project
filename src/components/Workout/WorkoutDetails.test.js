import React from 'react'
import { render, cleanup } from '@testing-library/react'
import WorkoutDetails from './WorkoutDetails.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

const handleWorkoutSubmitMock = jest.fn()
const selectedWorkoutsMock = [
  {
    id: 1,
    name: 'Test',
    type: 'Test',
    instructions: 'Test',
    title: 'Test',
  },
]
describe('<WorkoutDetails />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <WorkoutDetails
          selectedWorkouts={selectedWorkoutsMock}
          handleWorkoutSubmit={handleWorkoutSubmitMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Form should not be valid if input is missing', () => {
    const { getByTestId } = render(
      <Router>
        <WorkoutDetails
          selectedWorkouts={selectedWorkoutsMock}
          handleWorkoutSubmit={handleWorkoutSubmitMock}
        />
      </Router>
    )
    const inputNode = getByTestId('details-form')
    expect(inputNode).not.toBeValid()
  })
})
