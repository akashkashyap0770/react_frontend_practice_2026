import { configureStore } from "@reduxjs/toolkit";
import counterReducer  from "./features-slices/counter/counterSlice";

// ✅ configureStore is a Redux Toolkit helper that makes setting up the store simple and optimized.
// Interview Line :- configureStore Redux Toolkit ka helper hai jo store setup ko simple aur optimized banata hai.
export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
})