import React from 'react'
import { BlueButton } from '../common/Button'
import * as S from './UserForm.styles'
import PageLayout from './PageLayout'
import { useForm } from 'react-hook-form'
import useUserServices from '../hooks/useUserServices'

export default function UserForm() {
  const { register, handleSubmit, formState } = useForm({
    mode: 'onChange',
  })
  const { logIn, setProfile, profile } = useUserServices()

  return (
    <PageLayout>
      <S.Form onChange={handleSubmit(onSubmit)}>
        <S.Input
          ref={register}
          type="email"
          name="email"
          placeholder="Enter your E-Mail"
        />
        <S.Input
          ref={register}
          type="password"
          name="password"
          placeholder="Password"
        />
        <S.ButtonWrapper>
          <BlueButton
            name="logIn"
            onClick={(e) => handleSignup(e)}
            type="submit"
          >
            Login
          </BlueButton>
          <S.Anchor name="signUp" to={'/signup'}>
            Sign Up
          </S.Anchor>
        </S.ButtonWrapper>
      </S.Form>
    </PageLayout>
  )

  function onSubmit(data) {
    setProfile({ ...profile, email: data.email, password: data.password })
  }

  function handleSignup(e) {
    e.preventDefault()
    logIn(profile)
  }
}
