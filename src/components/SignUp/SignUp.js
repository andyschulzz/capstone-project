import React from 'react'
import styled from 'styled-components/macro'
import SignUpForm from './SignUpForm'
import PageLayout from '../pages/PageLayout'

export default function SignUp({ profile, setProfile, history }) {
  return (
    <PageLayout>
    <Main>
      <SignUpForm history={history} profile={profile} setProfile={setProfile} />
    </Main>
    </PageLayout>
  )
}

const Main = styled.main`
  background: #fff;
  padding: 20px;
  height: 100%;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
