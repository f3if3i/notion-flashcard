import { createSlice } from "@reduxjs/toolkit"
import { DatabaseType } from "../types/database"
import { RootState } from "./store"

// slice is a collection of Redux reducer logic and actions for a single feature in your app

// type of the slice
export interface DatabaseState extends DatabaseType {
}

const initialDatabaseState: DatabaseState = {
    id: "",
    name: "",
    contents: []
}

export const databaseSlice = createSlice({
    name: "database",
    initialState: initialDatabaseState,
    reducers: {
        setDatabaseState: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.contents = action.payload.contents
        }
        
    },
})

export const { setDatabaseState } = databaseSlice.actions
export const selectDatabase = (state: RootState) => state.database

export default databaseSlice.reducer
