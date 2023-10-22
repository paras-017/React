import {createSlice} from '@reduxjs/toolkit'
import { clearAllUsers } from '../actions'

const authSlice = createSlice({
   name:"auth",
   initialState:[],
   reducers:{
    addUsers(state,action){
      state.push(action.payload)
      console.log(action.payload)
     },
   },

   // ExtraReducer: A microReducer which is define in one of the slicers(ex:clearAllUsers) and if you need that reducer in multiple slicers , then we can achive this by using ExtraReducers
   extraReducers(builder){
   //   builder.addCase(userSlice.actions.clearAllUsers,()=>{
     builder.addCase(clearAllUsers,()=>{
      return  []
     })
   }
})

// export {userSlice}
export default authSlice.reducer
export const {addUsers} = authSlice.actions