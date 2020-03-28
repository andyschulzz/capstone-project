import React, { useState } from 'react'
import { BlueButton } from '../common/Button'
import * as S from './UserForm.styles'
import { useForm } from 'react-hook-form'

export default function UserForm({
  profile,
  setProfile,
  logIn,
  resetPassword,
}) {
  const { register, handleSubmit, errors, setError } = useForm()
  const [loginCounter, setLoginCounter] = useState(0)

  return (
    <S.Form onSubmit={handleSubmit(onSubmit)}>
      <S.Logo src="/icons/logo2.png" alt="" />
      <S.InputWrapper>
        <S.MailIcon />
        <S.Input
          ref={register}
          type="email"
          name="email"
          placeholder="Enter your E-Mail"
          required
        />
      </S.InputWrapper>
      {errors.email && errors.email.type === 'notFound' && (
        <S.Error>{errors.email.message}</S.Error>
      )}
      <S.InputWrapper bottom>
        <S.LockIcon />
        <S.Input
          ref={register}
          type="password"
          name="password"
          placeholder="Password"
          required
        />
      </S.InputWrapper>
      {errors.password && errors.password.type === 'wrong' && (
        <S.Error>{errors.password.message}</S.Error>
      )}
      {errors.password && errors.password.type === 'reset' && (
        <S.Error>
          {errors.password.message}
          <span onClick={handleReset}> reset your password?</span>
        </S.Error>
      )}
      {errors.password && errors.password.type === 'tooMany' && (
        <S.Error>{errors.password.message}</S.Error>
      )}
      <BlueButton name="logIn" type="submit">
        Log in
      </BlueButton>
      <S.Paragraph>
        Don't have an account?<S.Anchor to={'/signup'}>Sign up here</S.Anchor>
      </S.Paragraph>
    </S.Form>
  )

  function onSubmit(data) {
    setProfile(data)
    logIn(data)
      .then((res) => {
        if (res.code === 'auth/user-not-found') {
          return setError('email', 'notFound', 'E-mail address not found')
        }
        if (res.code === 'auth/wrong-password' && loginCounter < 1) {
          setLoginCounter(loginCounter + 1)
          return setError(
            'password',
            'wrong',
            'The password you entered is incorrect.'
          )
        }
        if (res.code === 'auth/wrong-password' && loginCounter <= 3) {
          setLoginCounter(loginCounter + 1)
          return setError(
            'password',
            'reset',
            'The password you entered is incorrect. Do you want to'
          )
        }
        if (res.code === 'auth/too-many-requests') {
          return setError(
            'password',
            'tooMany',
            'Too many attempts, please try again later.'
          )
        }
      })
      .catch((error) => {
        console.log(
          'Sorry, there was an error with the server. Please try again later.',
          error
        )
      })
  }

  function handleReset() {
    resetPassword(profile)
  }
}
