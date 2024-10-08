import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


const initialState = {
    items: [],
    isLoading: false
}

export const getTourItems = createAsyncThunk(
    "tourItems/getTourItems", 
    async(_, thunkApi) => {

})

const tourItemsSlice = createSlice({
    name: 'tourItems',
    initialState,

    extraReducers: (builder) => {
        builder.addCase()
    }
})