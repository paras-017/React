import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { clearAllUsers } from '../store/actions'
// import { clearAllUsers } from '../store/slices/UserSlice'

const DeleteUser = () => {
  const dispatch = useDispatch()

  const deleteUsers = ()=>{
    dispatch(clearAllUsers())
  }

  return (
    <Wrapper>
     <button onClick={deleteUsers} className="btn clear-btn">Clear User</button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
.clear-btn{
  margin-top:2rem;
  text-transform: capitalize;
  background-color: #db338a
}`

export default DeleteUser