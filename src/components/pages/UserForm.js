import React, { useEffect } from 'react'
import { AuthConsumer } from '../Auth/AuthContext'
import { Button } from '../common/Button'
import * as S from './UserForm.styles'
import PageLayout from './PageLayout'
import { useForm } from 'react-hook-form'

export default function UserForm({ profile, setProfile }) {
  const { register, handleSubmit, formState, setValue } = useForm({
    mode: 'onChange',
  })

  // useEffect(() => {
  //     setValue('email', profile.email)
  //     setValue('password', profile.password)
  //   },[profile])

  return (
    <AuthConsumer>
      {({ logIn }) => (
        <PageLayout>
          <S.Form onSubmit={logIn}>
            <S.Input
              type="email"
              name="email"
              placeholder="Enter your E-Mail"
              value={profile.email}
              onChange={handleChange}
            />
            <S.Input
              type="password"
              name="password"
              placeholder="Password"
              value={profile.password}
              onChange={handleChange}
            />
            <S.ButtonWrapper>
              <Button
                name="logIn"
                callback={(event) => handleClick(event, logIn)}
                text="Login"
                color="tertiary"
              />
              <S.Anchor name="signUp" to={'/signup'}>
                Sign Up
              </S.Anchor>
            </S.ButtonWrapper>
          </S.Form>
        </PageLayout>
      )}
    </AuthConsumer>
  )
  function handleChange(event) {
    event.target.name === 'email' &&
      setProfile({ ...profile, email: event.target.value })
    event.target.name === 'password' &&
      setProfile({ ...profile, password: event.target.value })
  }
  function handleClick(event, callback) {
    event.preventDefault()
    event.target.name = 'logIn' && callback(event)
  }
}
