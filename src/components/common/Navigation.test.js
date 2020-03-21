import React from 'react'
import { Router } from 'react-router-dom'
import { render, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from 'history'
import Navigation from './Navigation'

const renderWithRouter = component => {
  const history = createMemoryHistory()
  return {
    ...render(<Router history={history}>{component}</Router>),
  }
}
const handleSelectedWorkoutsReset = jest.fn()

it('should render the home page', () => {
  const { container, getByTestId } = renderWithRouter(
    <Navigation handleSelectedWorkoutsReset={handleSelectedWorkoutsReset} />
  )
  const navbar = getByTestId('navbar')
  const link = getByTestId('exercises-link')

  expect(container.innerHTML).toMatch('Exercises')
  expect(navbar).toContainElement(link)
})

it('should navigate to the workouts page', () => {
  const { container, getByTestId } = renderWithRouter(
    <Navigation handleSelectedWorkoutsReset={handleSelectedWorkoutsReset} />
  )

  fireEvent.click(getByTestId('workouts-link'))

  expect(container.innerHTML).toMatch('Workouts')
})
