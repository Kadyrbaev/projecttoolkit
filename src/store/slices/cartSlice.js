import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
    test: "null"
}
// immer
export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        getCart(state,action){
            console.log(action);
            const obj = action.payload

        const findItem = state.items.find((el)=> el.id === obj.id)
            if(!findItem){
                const data = {
                    quantity: 1,
                    title: obj.title,
                    price: obj.price,
                    id: obj.id
                } 
                state.items.push(data)
            }else{
                findItem.quantity++;
                findItem.price = findItem.price+obj.price
            }
        },
        deleteCart(state,action){
            console.log(action);
            const findItem = state.items.find((el)=> el.id === action.payload.id)
            if(findItem.quantity!==1){
                findItem.quantity--
            }else{
                state.items = state.items.filter((el)=>el.id !== action.payload.id)
            }
        }
    }
})
console.log(cartSlice);

export const actionSlice = cartSlice.actions