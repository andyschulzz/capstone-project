import { useState } from 'react'
// import useExercise from './useExercise'

export default function useSearch() {
  const [search, setSearch] = useState('')
  // const { exercises } = useExercise()

  function handleSearch(userInput) {
    setSearch(userInput.search.toLowerCase().trim())
  }

  return {
    handleSearch,
    search,
  }
}
