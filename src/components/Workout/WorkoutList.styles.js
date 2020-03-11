import styled from 'styled-components/macro'

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;

  a {
    text-align: center;
  }

  p {
    margin: 0 0 10px;
    font-size: 1.1rem;
  }
`

const Wrapper = styled.section`
  display: grid;
  padding: 0 30px 30px;
  gap: 10px;
  overflow-y: auto;
  scroll-behavior: smooth;
  max-height: 100%;

  p {
    padding: 20px 0 10px;
    margin: 0;
    font-size: 1.1rem;
  }
`

const WorkoutWrapper = styled.div`
  padding: ${props => props.isPlaceholder && '40px'} 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: ${props => props.isPlaceholder && 'center'};
  font-size: ${props => props.isPlaceholder && 1.1}rem;

  h3 {
    margin: 0;
  }
`

const Heading = styled.span`
  font-size: 0.8rem;
  margin: 20px 0 0;
  color: #888;
  font-weight: 300;
`

export { ButtonWrapper, Wrapper, Heading, WorkoutWrapper }
