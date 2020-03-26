import React from 'react'
import { AuthConsumer } from './AuthContext'

const Header = () => (
  <header>
    <AuthConsumer>
      {({ user, logOut }) => (
        <React.Fragment>
          {user.id ? (
            <React.Fragment>
              <small>user: {user.email}</small>
              <button onClick={(e) => logOut(e)}>Log out</button>
            </React.Fragment>
          ) : (
            <small>Please sign in</small>
          )}
        </React.Fragment>
      )}
    </AuthConsumer>
  </header>
)

export default Header