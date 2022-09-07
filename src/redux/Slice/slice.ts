import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CryptoSliceState} from "./types";
import {fetchLogin} from "./asyncActions";

const initialState: CryptoSliceState = {
    token: ""
}

const CryptoSlice = createSlice({
    name: "state",
    initialState,
    reducers:{

    },
    extraReducers: (builder) =>{
        builder.addCase(fetchLogin.pending, (state,action) => {
            state.token = "loading"
        });
        builder.addCase(fetchLogin.fulfilled, (state,action) => {
            state.token = action.payload
        });
        builder.addCase(fetchLogin.rejected, (state,action) => {
            state.token = "error"
        });
    }
})

export default CryptoSlice.reducer