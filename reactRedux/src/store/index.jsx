import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./slices/UserSlice"
 
const store = configureStore({
    // global reducer
    reducer:{
        users: userSlice
    }
})
export default store