import React from 'react'
import { render, cleanup } from '@testing-library/react'
import WorkoutList from './WorkoutList.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const handleWorkoutDeleteMock = jest.fn()
const handleWorkoutEditMock = jest.fn()
const workoutsMock = [
  {
    id: 1,
    name: 'Test',
    type: 'Test',
    instructions: 'Test',
    title: 'Test',
  },
]
describe('<WorkoutList />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <WorkoutList
          workouts={workoutsMock}
          handleWorkoutDelete={handleWorkoutDeleteMock}
          handleWorkoutEdit={handleWorkoutEditMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show placeholder if no workouts are created', () => {
    const { getByTestId } = render(
      <Router>
        <WorkoutList
          workouts={[]}
          handleWorkoutDelete={handleWorkoutDeleteMock}
          handleWorkoutEdit={handleWorkoutEditMock}
        />
      </Router>
    )
    expect(getByTestId('placeholder')).toBeVisible()
  })
})
