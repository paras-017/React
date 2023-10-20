import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const DisplayUsers = () => {
  const data = useSelector((state)=>{
    return state.users                     //now we have access to states of users
  })
  return (
    <Wrapper>
      {
        data.map((user, id)=>{
          return <li key={id}>{user}</li>
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