import styled from 'styled-components/macro'

const Wrapper = styled.section`
  display: grid;
  padding: 0 30px 30px;
  gap: 36px;
  overflow-y: auto;
  scroll-behavior: smooth;

  & span:first-child {
    margin-top: 5px;
  }
`

const Textarea = styled.textarea`
  margin: 30px 0 10px 30px;
  border: none;
  outline: none;
  height: 48px;
  resize: none;
  font-size: 1.5rem;
  background-color: #fff;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 30px 0;

  h3 {
    margin: 0;
  }
`

export { Wrapper, Textarea, ButtonWrapper }
