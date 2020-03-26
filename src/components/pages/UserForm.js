import React from 'react'
import { BlueButton } from '../common/Button'
import * as S from './UserForm.styles'
import { useForm } from 'react-hook-form'
import useUserServices from '../hooks/useUserServices'

export default function UserForm() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const { logIn, setProfile, profile } = useUserServices()

  return (
    <S.Form onChange={handleSubmit(onSubmit)}>
      <S.Logo src="/icons/logo2.png" alt="" />
      <S.InputWrapper>
        <S.MailIcon />
        <S.Input
          ref={register}
          type="email"
          name="email"
          placeholder="Enter your E-Mail"
        />
      </S.InputWrapper>
      <S.InputWrapper bottom>
        <S.LockIcon />
        <S.Input
          ref={register}
          type="password"
          name="password"
          placeholder="Password"
        />
      </S.InputWrapper>
      <BlueButton name="logIn" onClick={(e) => handleSignup(e)} type="submit">
        Login
      </BlueButton>
      <S.Paragraph>
        Don't have an account?<S.Anchor to={'/signup'}>Sign up here</S.Anchor>
      </S.Paragraph>
    </S.Form>
  )

  function onSubmit(data) {
    setProfile({ ...profile, email: data.email, password: data.password })
  }

  function handleSignup(e) {
    e.preventDefault()
    logIn(profile)
  }
}
