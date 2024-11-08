import { createSlice } from "@reduxjs/toolkit";

export const searchResultSlice = createSlice({
    name: 'searchResultState', 
    initialState: {
        value: null
    },
    reducers: {
        setSearchResults: (state, action) => {
            action.payload
        },
        clearSearchResults: () => { null }
    }

})

export const { setSearchResults, clearSearchResults } = searchResultSlice.actions
export default searchResultSlice.reducer