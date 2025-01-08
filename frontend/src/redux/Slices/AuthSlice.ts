import { createAsyncThunk, CreateAsyncThunk, createSlice, PlayloadAction } from "@reduxjs/toolkit";

import {LoginUserPayload, User} from "../../models/user";
import axios from "axios";



interface AuthenticationSliceState {
    loggedInUser: User | undefined;
    loading: boolean;
    error: boolean;
    registerSuccess: boolean;
}

const initialState: AuthenticationSliceState = {
    loggedInUser: undefined,
    loading: false,
    error: false,
    registerSuccess: false
} 

export const loginUser = createAsyncThunk(
    'auth/login',
    async (user : LoginUserPayload, thunkAPI) => {
       try {
        const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/login`, user);
        console.log("Login Response : " , res.data.user);
        return res.data.user;
       } catch (e) {
        return thunkAPI.rejectWithValue(e);
       } 
    }
);

export const AuthenticationSliceState = createSlice({
    name: "authentication",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // pending case
        builder.addCase(loginUser.pending, (state) => {
            state = {
                ...state,
                error : false,
                loading : true
            }

            return state;
        });

        // fulfilled case
        builder.addCase(loginUser.fulfilled, (state, action) => {
            state = {
                ...state,
                loggedInUser : action.payload,
                loading : false
            }

            return state;
        });

        // rejected case
        builder.addCase(loginUser.rejected, (state) => {
            state = {
                ...state,
                error : true,
                loading : false
            }

            return state;
        });


    }
})

export const {} = AuthenticationSliceState.actions;

export default AuthenticationSliceState.reducer;