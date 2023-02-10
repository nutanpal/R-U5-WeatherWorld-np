//4 setup redux to mange display country state
import { createSlice } from "@reduxjs/toolkit";
import initialCountry from "../../assets/initialCountry";

export const displayCountrySlice = createSlice({
    name: "displayCountry",
    initialState: {
        value: initialCountry,
    },
    reducers: {
        setDisplayCountry: (state, action) => {
            state.value = action.payload;
        },
        deleteDisplayCountry: (state) => {
            state.value = null;
        },
    },
});
export const { setDisplayCountry, deleteDisplayCountry } =
    displayCountrySlice.actions;

export const selectDisplay = (state) => state.displayedCountry.value; // fun def how to read state of displayedCountry elsewhere in app to read from state.

export default displayCountrySlice.reducer; // master reducer created from displayCountrySlice  by the “createSlice method from Rtoolkit . supply this to redux store.js



/*
-l19 The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state.

QQ 1. l10 explain, payload?

2. ex : l19 export destructured var?
3. l24: master reducer
*/