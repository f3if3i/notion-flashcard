import { createSlice } from "@reduxjs/toolkit"
import { User } from "../pages/api/user"
import { DBInfoType } from "../types/database"
import { testItemType } from "../types/test"
import { RootState } from "./store"

// slice is a collection of Redux reducer logic and actions for a single feature in your app

// type of the slice
// export interface DatabaseState extends DatabaseType {
// }



type TestReportState = {
    testArray: testItemType[]
    databaseInfo: DBInfoType,
    userInfo: User,
    selectedOptions: string[],
    score: number
}

const initialTestReportState: TestReportState = {
    testArray: [],
    databaseInfo: {
        id: "",
        name: "",
    },
    userInfo: {
        userId: "",
        userName: ""
    },
    selectedOptions: [],
    score: 0
}

export const testReportSlice = createSlice({
    name: "database",
    initialState: initialTestReportState,
    reducers: {
        setTestReportState: (state, action) => {
            state.testArray = action.payload.testArray
            state.databaseInfo = action.payload.databaseInfo
            state.userInfo = action.payload.userInfo
            state.selectedOptions = action.payload.selectedOptions
            state.score = action.payload.score
        },
        setTestReportStateTestArray: (state, action) => {
            state.testArray = action.payload
        },
        setTestReportStateDatabaseInfo: (state, action) => {
            state.databaseInfo = action.payload
        },
        setTestReportStateUserInfo: (state, action) => {
            state.userInfo = action.payload
        },
        setTestReportStateSelectedOptions: (state, action) => {
            state.selectedOptions = [...state.selectedOptions, action.payload]
        },
        setTestReportStateScore: (state, action) => {
            state.score = action.payload
        }
    },
})

export const { setTestReportState, setTestReportStateTestArray, setTestReportStateDatabaseInfo, setTestReportStateUserInfo, setTestReportStateSelectedOptions, setTestReportStateScore
} = testReportSlice.actions
export const selectTestReport = (state: RootState) => state.testReport

export default testReportSlice.reducer
