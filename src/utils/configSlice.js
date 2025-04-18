import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name: "configSlice",
    initialState: {
        lang: 'en'
    },
    reducers: {
        updateLanguage: (state, action) => {
            state.lang = action.payload;
        }
    }

})

export const {updateLanguage}  = configSlice.actions
export default configSlice.reducer;