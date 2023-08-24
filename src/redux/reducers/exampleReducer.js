import { createSlice } from "@reduxjs/toolkit";

export const example = createSlice({
    name: "example", // name of the slice
    initialState: 12, // initial state of the slice, this can be array, object, string, number, etc
    reducers: {
        // reducers of the slice
        // reducers are functions that take the current state and an action, and then return a new state
        doSomething: (state, action) => {
            return action.payload;
            // return the new state
        },
    },
});

export const { doSomething } = example.actions; // export the actions of the slice
export default example.reducer; // export the reducer of the slice
