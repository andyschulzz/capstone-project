import styled from 'styled-components/macro'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  input {
    width: 48px;
    margin-top: 5px;
    padding-top: 3px;
    text-align: center;
    font-size: 1.2rem;
    border: 1px solid #ddd;
    border-radius: 5px;
    outline: none;
  }
`

const DetailWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;

  p {
    margin: 0;
    text-align: center;
    font-weight: 300;
    color: #888;
    text-transform: uppercase;
  }

  span {
    margin: 0 10px;
  }
`

const Name = styled.h3`
  font-weight: 400;
`

export { Wrapper, DetailWrapper, Name }
