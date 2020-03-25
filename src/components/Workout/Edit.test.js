import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Edit from './Edit.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const handleWorkoutChangeMock = jest.fn()
const selectedWorkoutsMock = {
  id: 1,
  name: 'Test Name',
  type: 'Test Type',
  instructions: 'Test Instructions',
  title: 'Test Title',
}

describe('<Edit />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Edit
          handleWorkoutChange={handleWorkoutChangeMock}
          selectedWorkouts={selectedWorkoutsMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
  it('Form should not be valid if input is missing', () => {
    const { getByTestId } = render(
      <Router>
        <Edit
          handleWorkoutChange={handleWorkoutChangeMock}
          selectedWorkouts={selectedWorkoutsMock}
        />
      </Router>
    )
    const inputNode = getByTestId('edit-form')
    expect(inputNode).not.toBeValid()
  })
})
