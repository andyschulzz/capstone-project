import styled from 'styled-components/macro'
import { MdBackspace, MdSearch } from 'react-icons/md'
import { Button } from './Button'

const Back = styled(MdBackspace)`
  font-size: 36px;
  margin-right: 5px;
  color: hsla(0, 100%, 50%, 0.7);
`

const Search = styled(MdSearch)`
  font-size: 36px;
  margin-right: 5px;
  color: hsla(200, 100%, 50%, 0.7);
  cursor: default;
`
const ButtonReset = styled(Button)`
  justify-content: end;
  padding: 5px 2px;
`

export { Back, Search, ButtonReset }
