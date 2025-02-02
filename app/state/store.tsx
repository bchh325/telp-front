import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import searchResultReducer from '../slices/searchResultSlice'
import { springApi } from '../slices/springApiSlice'
import { tAuthApi } from '../slices/tAuthApiSlice'



export default configureStore({
  reducer: {
    counter: counterReducer,
    searchResults: searchResultReducer,
    [springApi.reducerPath]: springApi.reducer,
    [tAuthApi.reducerPath]: tAuthApi.reducer
  },

  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [""]
      }
    }).concat(springApi.middleware).concat(tAuthApi.middleware)

})
