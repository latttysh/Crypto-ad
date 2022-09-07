import { configureStore } from '@reduxjs/toolkit'
import state from "./Slice/slice"
import {useDispatch} from "react-redux";

export const store = configureStore({
    reducer: {
        state
    },
})

export type RootState = ReturnType<typeof store.getState>;

type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();