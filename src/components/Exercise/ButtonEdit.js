import React from 'react'
import { BlueButton } from '../common/Button'
import { Link } from 'react-router-dom'

export default function ButtonEdit() {
  return (
    <BlueButton mla="true" as={Link} to={`/exercises/edit`}>
      Edit
    </BlueButton>
  )
}
