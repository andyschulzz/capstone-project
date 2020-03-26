import styled from 'styled-components/macro'

const Form = styled.form`
  display: grid;
  grid-gap: 12px;
`
const Input = styled.input`
  font-size: 1rem;
`

const ButtonRow = styled.section`
  display: flex;
  justify-content: space-between;
`

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

export { Form, Input, ButtonRow, Main }
