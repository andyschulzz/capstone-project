import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0 30px;

  a {
    text-align: center;
  }

  h3:first-child {
    margin-top: 0;
  }
`

const Wrapper = styled.section`
  display: grid;
  padding: 0 40px 30px;
  gap: 10px;
  max-height: 100%;
`

const WorkoutWrapper = styled.div`
  padding: 40px 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
  font-size: 1.1rem;
  position: relative;
`

export { ButtonWrapper, Wrapper, WorkoutWrapper }
