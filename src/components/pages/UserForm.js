import React, { useEffect } from 'react'
import { BlueButton } from '../common/Button'
import * as S from './UserForm.styles'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'

export default function UserForm({ setProfile, logIn }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const history = useHistory()

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
      })
      .catch((error) => {
        console.log(
          'Sorry, there was an error with the server. Please try again later.',
          error
        )
      })
  }
}
