import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import searchResultReducer from '../slices/searchResultSlice'
import { springApi } from '../slices/apiSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    searchResults: searchResultReducer,
    [springApi.reducerPath]: springApi.reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(springApi.middleware)
})
