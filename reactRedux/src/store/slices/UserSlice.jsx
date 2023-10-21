import {createSlice} from '@reduxjs/toolkit'
import {clearAllUsers} from '../actions'

const userSlice = createSlice({
   name:"user",
   initialState:[],
   reducers:{
    addUser(state,action){
      state.push(action.payload)
      console.log(action.payload)
     },
    removeUser(state,action){
      state.splice(action.payload, 1)
    },
   //  clearAllUsers(state,action){
   //    return  []
   //  }
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
export default userSlice.reducer
export const {addUser,removeUser} = userSlice.actions