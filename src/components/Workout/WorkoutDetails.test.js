import React from 'react'
import { render, cleanup } from '@testing-library/react'
import WorkoutDetails from './WorkoutDetails.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

const handleWorkoutAddMock = jest.fn()
const workoutExercisesMock = [
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
          workoutExercises={workoutExercisesMock}
          handleWorkoutAdd={handleWorkoutAddMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Form should not be valid if input is missing', () => {
    const { getByTestId } = render(
      <Router>
        <WorkoutDetails
          workoutExercises={workoutExercisesMock}
          handleWorkoutAdd={handleWorkoutAddMock}
        />
      </Router>
    )
    const inputNode = getByTestId('details-form')
    expect(inputNode).not.toBeValid()
  })
})
