import React from 'react'
import * as S from './ButtonReset.styles'
import { ButtonEmpty } from './Button'
import PropTypes from 'prop-types'

ButtonReset.propTypes = {
  reset: PropTypes.func.isRequired,
  form: PropTypes.string.isRequired,
  search: PropTypes.string.isRequired,
}

export default function ButtonReset({ reset, form, search }) {
  return (
    <>
      {search.length !== 0 ? (
        <ButtonEmpty type="submit" form={form} onClick={reset}>
          <S.Back />
        </ButtonEmpty>
      ) : (
        <ButtonEmpty disabled>
          <S.Search />
        </ButtonEmpty>
      )}
    </>
  )
}
