import { createSlice } from '@reduxjs/toolkit'

export const authenticationSlice = createSlice({
  name: 'isUserSignedIn',
  initialState: {
    value: false,
  },
  reducers: {
    setUserSignedIn: (state) => {
      state.value = true
    },
    setUserSignedOut: (state) => {
      state.value = false
    },
  },


})

// Action creators are generated for each case reducer function
export const { setUserSignedIn, setUserSignedOut } = authenticationSlice.actions

export default authenticationSlice.reducer