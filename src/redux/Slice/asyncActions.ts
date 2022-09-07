import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios"

export const fetchRegister = createAsyncThunk(
    "crypto/fetchRegister",
    async (params: object) => {
        console.log("Отправляем запрос на регистрацию")
        const {data} = await axios.post("/register", params)
        console.log("Запрос успешно отработал", data)
        return data
    }
)

export const fetchLoginReq = createAsyncThunk(
    "crypto/fetchLoginReq",
    async (params:any) => {
        console.log("Отправлям запрос на генерациб авторизации")
        const {data} = await axios.post("/login", params)
        console.log("Письмо отправлено", data)
        return data
    }
)

export const fetchLogin = createAsyncThunk(
    "crypto/fetchLoginSecret",
    async (id: string) => {
        console.log("Отправляем запрос на авторизацию по секретному ключу")
        const {data} = await axios.get(`/login/${id}`)
        console.log("Получили токен, data")
        return data
    }
)