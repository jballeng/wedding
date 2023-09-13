import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        globalLoader: false
    },
    reducers: {
        setGlobalLoader: (state, action) => {
            state.globalLoader = action.payload
          },
    },
})

export const { setGlobalLoader } = uiSlice.actions

export const uiReducer = uiSlice.reducer