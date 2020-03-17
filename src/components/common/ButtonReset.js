import React from 'react'
import * as S from './ButtonReset.styles'
import PropTypes from 'prop-types'

ButtonReset.propTypes = {
  reset: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
}

export default function ButtonReset({ reset, search }) {
  return (
    <>
      {search ? (
        <S.ButtonReset type="submit" onClick={reset}>
          <S.Back />
        </S.ButtonReset>
      ) : (
        <S.ButtonReset disabled>
          <S.Search />
        </S.ButtonReset>
      )}
    </>
  )
}
