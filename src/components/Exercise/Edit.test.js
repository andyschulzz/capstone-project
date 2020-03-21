import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Edit from './Edit.js'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)
const handleExerciseChangeMock = jest.fn()

describe('<Edit />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Edit
          id="1"
          name="Arnold Press"
          type="Shoulder"
          instructions="Test"
          handleExerciseChange={handleExerciseChangeMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
