import React from 'react'
import PageLayout from './PageLayout'
import { useForm } from 'react-hook-form'
import { RedButton } from '../common/Button'
import { GreenButton } from '../common/Button'
import * as S from './SignUp.styles'
import { useHistory } from 'react-router-dom'
import useUserServices from '../hooks/useUserServices'

export default function SignUp() {
  const { register, handleSubmit } = useForm({
    mode: 'onChange',
  })
  const history = useHistory()
  const { signUp, setProfile, profile } = useUserServices()
  return (
    <PageLayout>
      <S.Main>
        <p>Sign up. It's for free.</p>
        <S.Form onChange={handleSubmit(onSubmit)}>
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
          <S.ButtonWrapper>
            <RedButton onClick={handleCancel} name="cancel">
              Cancel
            </RedButton>
            <GreenButton
              onClick={() => handleSignup(profile)}
              name="signUp"
              type="submit"
            >
              Sign Up
            </GreenButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.Main>
    </PageLayout>
  )
  function onSubmit(data) {
    setProfile({ ...profile, email: data.email, password: data.password })
  }

  function handleSignup(profile) {
    signUp(profile)
    history.push('/exercises')
  }

  function handleCancel() {
    history.push('/')
  }
}
