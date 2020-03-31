import React from 'react'
import SearchBox from './SearchBox'
import { useForm } from 'react-hook-form'

export default {
  title: 'SearchBox',
  component: SearchBox,
  decorators: [
    (renderComponent) => (
      <div style={{ padding: 20, width: 400 }}>{renderComponent()}</div>
    ),
  ],
}

export const Default = () => {
  const { register } = useForm()
  return <SearchBox register={register} />
}
