import styled from 'styled-components/macro'
import { MdEdit, MdDelete } from 'react-icons/md'

import { MdMoreHoriz } from 'react-icons/md'

const MenuIcon = styled(MdMoreHoriz)`
  font-size: 28px;
  align-self: center;
  margin: -10px 20px 5px auto;
  color: hsl(200, 100%, 50%);
  cursor: pointer;
`
const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 0;
  z-index: 1;
  background: #fff;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 3px 5px #333;
  border-radius: 5px;
  padding: 20px;
  background: #57595d;
  color: white;

  p {
    margin: 0;
    cursor: pointer;
  }

  p:first-child {
    margin: 0 0 20px;
    padding: 0;
  }
`

const EditIcon = styled(MdEdit)`
  font-size: 20px;
  margin-right: 5px;
  position: relative;
  top: 3px;
  color: hsl(200, 100%, 50%);
`

const DeleteIcon = styled(MdDelete)`
  font-size: 20px;
  margin-right: 5px;
  position: relative;
  top: 4px;
  color: hsl(0, 100%, 50%);
`

export { Wrapper, EditIcon, DeleteIcon, MenuIcon, MenuWrapper }
