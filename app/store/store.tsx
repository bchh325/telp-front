import { configureStore } from '@reduxjs/toolkit'
import authenticationReducer from './slices/authenticationSlice'
import searchResultReducer from './slices/searchResultSlice'
import { springApi } from './slices/springApiSlice'
import { tAuthApi } from './slices/tAuthApiSlice'



export const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    searchResults: searchResultReducer,
    [springApi.reducerPath]: springApi.reducer,
    [tAuthApi.reducerPath]: tAuthApi.reducer
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [""]
      }
    })
    .concat(springApi.middleware)
    .concat(tAuthApi.middleware)

})

export type AppStore = typeof store
