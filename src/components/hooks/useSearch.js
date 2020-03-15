import { useState } from 'react'
import useExercise from './useExercise'

export default function useSearch() {
  const [search, setSearch] = useState('')
  const { exercises } = useExercise()

  const searchedExercise = exercises.filter(exercise =>
    exercise.name
      .toLowerCase()
      .trim()
      .includes(search)
  )

  function handleSearch(userInput) {
    setSearch(userInput.search.toLowerCase().trim())
  }

  return {
    searchedExercise,
    handleSearch,
    search,
  }
}
