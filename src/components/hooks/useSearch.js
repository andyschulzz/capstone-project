import { useState } from 'react'

export default function useSearch() {
  const [search, setSearch] = useState('')

  function handleSearch(userInput) {
    setSearch(userInput.search.toLowerCase().trim())
  }

  return {
    handleSearch,
    search,
    setSearch,
  }
}
