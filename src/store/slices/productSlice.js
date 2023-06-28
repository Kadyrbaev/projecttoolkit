import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    products: []
}
export const productsSlice = createSlice({
    name: "product",
    initialState,
    reducers:{
        getDataPending(state,action){},
        getDataSuccess(state,action){
            console.log("!@#$%^&");
            state.products = action.payload
        },
        getDataError(state,action){},
    }
})