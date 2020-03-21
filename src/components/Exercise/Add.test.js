import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Add from './Add.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

const handleExerciseAddMock = jest.fn()
describe('<Add />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Add handleExerciseAdd={handleExerciseAddMock} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should be empty', () => {
    const { getByPlaceholderText } = render(
      <Router>
        <Add handleExerciseAdd={handleExerciseAddMock} />
      </Router>
    )
    const inputNode = getByPlaceholderText('Name of the exercise?')
    expect(inputNode).toBeVisible()
  })
})
