import {configureStore} from "@redux/toolkit"
import UserSlice from "./slices/UserSlice"
 
const store = configureStore({
    reducer:{
        users: UserSlice
    }
})
export default store