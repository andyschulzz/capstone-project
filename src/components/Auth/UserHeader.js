import React from 'react'
import { AuthConsumer } from './AuthContext'
import * as S from './UserHeader.styles'

const Header = () => (
  <AuthConsumer>
    {({ user, logOut }) => (
      <React.Fragment>
        {user.id ? (
          <S.LogoutIcon onClick={(e) => logOut(e)} />
        ) : (
          <S.Wrapper>Pumpele</S.Wrapper>
        )}
      </React.Fragment>
    )}
  </AuthConsumer>
)

export default Header
