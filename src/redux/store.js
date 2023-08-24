import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./reducers/exampleReducer";

export default configureStore({
    reducer: {
        example: exampleReducer,
    },
});

// store holds all our application state and manages it
