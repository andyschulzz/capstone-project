import React from 'react'
import { AuthConsumer } from './AuthContext'
import * as S from './UserHeader.styles'

const Header = () => (
  <AuthConsumer>
    {({ user, logOut }) => (
      <React.Fragment>
        {user.id ? (
          <React.Fragment>
            {/*<small>user: {user.email}</small>*/}
            <S.LogoutIcon onClick={(e) => logOut(e)}>Log out</S.LogoutIcon>
          </React.Fragment>
        ) : (
          <S.Wrapper>Pumpele</S.Wrapper>
        )}
      </React.Fragment>
    )}
  </AuthConsumer>
)

export default Header
