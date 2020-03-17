import React from 'react'
import { GreenButton } from '../common/Button'

export default function ButtonSave({ formState, form }) {
  return (
    <>
      {formState.isValid ? (
        <GreenButton mla type="submit" form={form}>
          Save
        </GreenButton>
      ) : (
        <GreenButton inactive mla type="submit" form={form}>
          Save
        </GreenButton>
      )}
    </>
  )
}
