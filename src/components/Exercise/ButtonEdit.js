import React from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

export default function ButtonEdit() {
  return (
    <Button mla="true" as={Link} to={`/exercises/edit`}>
      Edit
    </Button>
  )
}
