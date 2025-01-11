import { configureStore } from "@reduxjs/toolkit";
import authenticationReducer from "./Slices/AuthSlice";
import modalReducer from "./Slices/ModalSlices";

export const store = configureStore({   
    reducer: {
        authentication : authenticationReducer,
        modal : modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;