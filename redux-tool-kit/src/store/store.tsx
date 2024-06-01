import { configureStore } from '@reduxjs/toolkit'
import counterReducer from "./slices/slice"
import authReducer from './slices/auth/authSlice.jsx'
//import { apiSlice } from '../requests/apiSlice.jsx'
import { apiSlice2 } from '../requests/apiSlice2.jsx'

export const store = configureStore({

  reducer: {
    counter: counterReducer,
    // [apiSlice.reducerPath]: apiSlice.reducer,
    [apiSlice2.reducerPath]: apiSlice2.reducer,
    auth: authReducer
  },

  // reducer: {
  //   [apiSlice.reducerPath]: apiSlice.reducer,
  //   auth: authReducer
  // },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiSlice2.middleware),
  devTools: true

})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
