import React from 'react'
import Button from '../common/Button'

export default function ExerciseSaveButton({ formState }) {
  return (
    <>
      <Button danger mla disabled={!formState.isValid} type="submit">
        Save
      </Button>
    </>
  )
}
