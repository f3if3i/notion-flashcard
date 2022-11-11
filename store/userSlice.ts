import { createSlice } from "@reduxjs/toolkit"
import { User } from "../pages/api/user"
import { RootState } from "./store"

// slice is a collection of Redux reducer logic and actions for a single feature in your app

// type of the slices
export interface UserState extends User {}

const initialUserState: UserState = {
    userId: "",
    userName: ""
}

export const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        setUserState: (state, action) => {
            state.userId = action.payload.userId
            state.userName = action.payload.userName
        }
        
    },
})

export const { setUserState } = userSlice.actions
export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
