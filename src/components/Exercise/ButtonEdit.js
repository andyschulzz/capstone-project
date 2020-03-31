import React from 'react'
import { BlueButton } from '../common/Button'
import { Link } from 'react-router-dom'

export default function ButtonEdit({ id }) {
  return (
    <BlueButton mla="true" as={Link} to={`/exercises/${id}/edit`}>
      Edit
    </BlueButton>
  )
}
