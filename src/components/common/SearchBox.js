import React from 'react'
import * as S from './SearchBox.styles'
import ButtonReset from './ButtonReset'
import PropTypes from 'prop-types'

SearchBox.propTypes = {
  register: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

export default function SearchBox({ register, onSubmit, reset, search }) {
  return (
    <S.Form
      data-testid="searchbar"
      onChange={onSubmit}
      onSubmit={onSubmit}
      id="search"
    >
      <S.Input
        ref={register({ maxLength: 50 })}
        name="search"
        type="search"
        placeholder="search"
        maxLength="50"
      />
      <ButtonReset reset={reset} search={search} />
    </S.Form>
  )
}
