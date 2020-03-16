import React from 'react'
import { Button } from '../common/Button'

export default function ButtonSave({ formState, form }) {
  return (
    <Button danger mla disabled={!formState.isValid} type="submit" form={form}>
      Save
    </Button>
  )
}
