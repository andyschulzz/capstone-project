import styled from 'styled-components/macro'
import { MdBackspace, MdSearch } from 'react-icons/md'

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

export { Back, Search }
