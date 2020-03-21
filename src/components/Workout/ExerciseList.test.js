import React from 'react'
import { render, cleanup } from '@testing-library/react'
import ExerciseList from './ExerciseList.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const handleWorkoutAddMock = jest.fn()
const exercisesMock = [
  {
    id: '1',
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
        <ExerciseList
          exercises={exercisesMock}
          handleWorkoutAdd={handleWorkoutAddMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
