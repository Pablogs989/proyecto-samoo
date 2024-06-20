import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import supService from "./supService";

const token = localStorage.getItem('token') || '';
const user = JSON.parse(localStorage.getItem('suplier')) || null;

const initialState = {
    user: user,
    token: token,
    isError: false,
    isSuccess: false,
    message: ''
};

export const register = createAsyncThunk('sup/register', async (suplier, { rejectWithValue }) => {
    try {
        return await supService.register(suplier);
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
});

const supSlice = createSlice({
    name: "sup",
    initialState,
    reducers: {
        reset: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.message = '';
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.user = action.payload;
                state.message = 'Registration successful';
                localStorage.setItem("suplier", JSON.stringify(action.payload));
            })
            .addCase(register.rejected, (state, action) => {
                state.isError = true;
                state.message = action.payload || 'Registration failed';
            });
    }
});

export const { reset } = supSlice.actions;
export default supSlice.reducer;
