import { createSlice } from "@reduxjs/toolkit"
// import { AppState } from "./store"
import { HYDRATE } from "next-redux-wrapper"
import notion from "../lib/notion"
import { DBDataType, DBInfoType } from "../types/database"
import { RootState } from "./store"

// slice is a collection of Reduc reducer logic and actions for a single feature in your app

// type of the slices
// export interface UserState {
//     userId: string
//     userName: string
// }

export interface DatabaseState extends DBInfoType {
    contents: DBDataType[]
}


// const initialUserState: UserState = {
//     userId: "",
//     userName: ""
// }

const initialDatabaseState: DatabaseState = {
    id: "",
    name: "",
    contents: []
}

export const fetchDatabaseAsync = createAsyncThunk(
    "database/fetchDatabase",
    async (id: string) => {
        const response = await notion.queryDatabase({ database_id: id }) || []
        const filteredDatabase = response && response.data.results.map((data: { properties: { Name: { title: { plain_text: any }[] }; Description: { rich_text: { plain_text: any }[] } } }) => ({
            name: data.properties.Name.title[0].plain_text,
            description: data.properties.Description.rich_text[0].plain_text
        }))
        return {
            id: id,
            name: response.data.databaseTitle,
            contents: filteredDatabase
        }
    }
)

export const databaseSlice = createSlice({
    name: "database",
    initialState: initialDatabaseState,
    reducers: {
        // setUserState(state, action) {
        //     state.id = action.payload
        //     state.name = action.payload
        // }
        setDatabaseState: (state, action) => {
            state.id = action.payload.id
            state.name = action.payload.name
            state.contents = action.payload.contents
        }
        
    },
    extraReducers: (builder) => {
        builder
        .addCase(fetchDatabaseAsync.fulfilled), (state, action) => {
            state.status = 'idle';
            state.value = action.payload;
        })
    }
    // extraReducers: {
    //     [HYDRATE]: (state, action) => {
    //         return {
    //             ...state,
    //             ...action.payload.auth,
    //         }
    //     },
    // },
})

export const { setDatabaseState } = databaseSlice.actions
export const selectDatabase = (state: RootState) => state.database.value

export default databaseSlice


function createAsyncThunk(arg0: string, arg1: (id: string) => Promise<void>) {
    throw new Error("Function not implemented.")
}
// export const { setUserState } = userSlice.actions
// export const selectUserState = (state: AppState) => state.user.userId