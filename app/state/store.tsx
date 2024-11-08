import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import searchResultReducer from '../slices/searchResultSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    searchResults: searchResultReducer
  },
})
