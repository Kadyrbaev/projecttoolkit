import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { productsSlice } from "./slices/productSlice";


const reducer= {
    [cartSlice.name]: cartSlice.reducer,
    [productsSlice.name]: productsSlice.reducer
}
export const store = configureStore({
    reducer
})