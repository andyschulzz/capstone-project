import React from 'react'
import PageLayout from './PageLayout'
import { useForm } from 'react-hook-form'
import { RedButton } from '../common/Button'
import { BlueButton } from '../common/Button'
import * as S from './SignUp.styles'
import { useHistory } from 'react-router-dom'

export default function SignUp({ setProfile, signUp }) {
  const { register, handleSubmit, errors, setError } = useForm()
  const history = useHistory()

  return (
    <PageLayout>
      <S.Main>
        <p>Sign up. It's for free.</p>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputWrapper>
            <S.MailIcon />
            <S.Input
              ref={register({
                required: true,
                pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                minLength: 5,
                maxLength: 50,
              })}
              type="email"
              name="email"
              placeholder="Enter your E-Mail"
            />
          </S.InputWrapper>
          {((errors.email && errors.email.type === 'required') ||
            (errors.email && errors.email.type === 'pattern')) && (
            <S.Error>Please enter a valid e-mail address.</S.Error>
          )}
          {errors.email && errors.email.type === 'inUse' && (
            <S.Error>{errors.email.message}</S.Error>
          )}
          <S.InputWrapper>
            <S.LockIcon />
            <S.Input
              ref={register({ required: true, minLength: 6 })}
              type="password"
              name="password"
              placeholder="Password"
            />
          </S.InputWrapper>
          {errors.password && (
            <S.Error>Password must be at least 6 characters long.</S.Error>
          )}
          <S.ButtonWrapper>
            <RedButton onClick={handleCancel} name="cancel">
              Cancel
            </RedButton>
            <BlueButton name="signUp" type="submit">
              Sign Up
            </BlueButton>
          </S.ButtonWrapper>
        </S.Form>
      </S.Main>
    </PageLayout>
  )

  function onSubmit(data) {
    setProfile(data)
    signUp(data)
      .then((res) => {
        if (res.code === 'auth/email-already-in-use') {
          return setError('email', 'inUse', 'E-mail address already in use')
        }
        setTimeout(history.push('/'), 3000)
      })
      .catch((error) => {
        console.log(
          'Sorry, there was an error with the server. Please try again later.',
          error
        )
      })
  }

  function handleCancel() {
    history.push('/')
  }
}
