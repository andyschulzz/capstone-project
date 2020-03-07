import React from 'react'
import Button from '../common/Button'
import { Link } from 'react-router-dom'

export default function ExerciseButtonEdit() {
  return (
    <Button primary="true" mla="true" as={Link} to={`/exercises/edit`}>
      Edit
    </Button>
  )
}
