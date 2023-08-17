import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit"
import databaseReducer from "../store/databaseSlice"
import userReducer from "../store/userSlice"
import testReportReducer from "../store/testReportSlice"

export function makeStore() {
    return configureStore({
        reducer: {
            database: databaseReducer,
            user: userReducer,
            testReport: testReportReducer
        },
    })
}

export const store = makeStore()

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


// export type AppState = ReturnType<typeof store.getState>

// export type AppDispatch = typeof store.dispatch

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>

// export default store