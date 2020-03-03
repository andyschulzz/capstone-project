import React from 'react'
import ExerciseList from './components/pages/ExerciseList'
import { exerciseData } from './components/data/exercises'

function App() {
  return <ExerciseList exerciseData={exerciseData} />
}

export default App
