import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import List from './List.js'
import { MemoryRouter as Router } from 'react-router-dom'
import { exerciseData } from '../data/exercises'

afterEach(cleanup)
const handleWorkoutDeleteMock = jest.fn()
const handleWorkoutEditMock = jest.fn()

describe('<List />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <List
          workouts={exerciseData}
          handleWorkoutDelete={handleWorkoutDeleteMock}
          handleWorkoutEdit={handleWorkoutEditMock}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('Workout menu should be visible when button is clicked', () => {
    const { getByTestId } = render(
      <Router>
        <List
          workouts={exerciseData}
          handleWorkoutDelete={handleWorkoutDeleteMock}
          handleWorkoutEdit={handleWorkoutEditMock}
        />
      </Router>
    )
    fireEvent.click(getByTestId('menu-icon'))
    expect(getByTestId('workout-menu')).toBeVisible()
  })
})
