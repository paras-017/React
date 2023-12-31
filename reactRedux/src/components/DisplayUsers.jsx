import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import {MdDeleteForever} from 'react-icons/md'
import { removeUser } from '../store/slices/UserSlice'
const DisplayUsers = () => {
  const dispatch = useDispatch()
  // To access data we use useSelector which takes a callback with argument state.This state act as global state for different slice
  const data = useSelector((state)=>{
    return state.users                     //now we have access to states of users
  })

  const deleteUser = (id)=>{
    dispatch(removeUser(id))
  }
  return (
    <Wrapper>
      {
        data.map((user, id)=>{
          return <li key={id}>
            {user}
            <button className='btn-delete' onClick={()=>deleteUser(id)}><MdDeleteForever className="delete-icon"/></button>
          </li>
        })
      }
    </Wrapper>
  )
}

const Wrapper = styled.section`
li{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 1px solid #eee;

  &:first-child{
      border-top: 1px solid #eee;
  }
}`
export default DisplayUsers