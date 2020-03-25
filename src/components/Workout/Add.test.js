import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Add from './Add.js'
import { MemoryRouter as Router } from 'react-router-dom'

const mockHistoryPush = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}))

const handleWorkoutExercisesMock = jest.fn()
const handleWorkoutTitleMock = jest.fn()
const exercisesMock = [
  {
    id: '1',
    name: 'Test',
    type: 'Test',
    instructions: 'Test',
    title: 'Test',
  },
]

afterEach(cleanup)

describe('<Add />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <Add
          exercises={exercisesMock}
          handleWorkoutExercises={handleWorkoutExercisesMock}
          handleWorkoutTitle={handleWorkoutTitleMock}
          workoutExercises={[]}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  it('should show exercises if button is clicked', () => {
    const { getByTestId } = render(
      <Router>
        <Add
          exercises={exercisesMock}
          handleWorkoutExercises={handleWorkoutExercisesMock}
          handleWorkoutTitle={handleWorkoutTitleMock}
          workoutExercises={[]}
        />
      </Router>
    )
    fireEvent.click(getByTestId('add-button'))
    const inputNode = getByTestId('exercise')
    expect(inputNode).toBeVisible()
  })

  it('Form should not be valid if input is missing', () => {
    const { getByTestId } = render(
      <Router>
        <Add
          exercises={exercisesMock}
          handleWorkoutExercises={handleWorkoutExercisesMock}
          handleWorkoutTitle={handleWorkoutTitleMock}
          workoutExercises={[]}
        />
      </Router>
    )
    const inputNode = getByTestId('add-form')
    expect(inputNode).not.toBeValid()
  })

  it('Should show checkmark when exercise is clicked', () => {
    const { getByTestId } = render(
      <Router>
        <Add
          exercises={exercisesMock}
          handleWorkoutExercises={handleWorkoutExercisesMock}
          handleWorkoutTitle={handleWorkoutTitleMock}
          workoutExercises={[]}
        />
      </Router>
    )
    fireEvent.click(getByTestId('add-button'))
    fireEvent.click(getByTestId('exercise'))
    expect(getByTestId('checked')).toBeVisible()
  })
})
