import { createAsyncThunk } from "@reduxjs/toolkit"
import { productsSlice } from "../slices/productSlice"

// export const getData =  () =>{
//     console.log("TEST");
//     return async (dispatch)=>{
//         try {
//          const data = await  fetch("https://jsonplaceholder.typicode.com/users")
//          const newData = await data.json()
//             dispatch(productsSlice.actions.getDataSuccess(newData))
//         } catch (error) {
            
//         }

//     }
// }
export const getData = createAsyncThunk(
    'users/fetchByIdStatus',
    async (userId, a) => {
        console.log(a);
        console.log(userId);
        
        try {
            const data = await  fetch("https://jsonplaceholder.typicode.com/users")
            const newData = await data.json()
               a.dispatch(productsSlice.actions.getDataSuccess(newData))
           } catch (error) {
               
           }
    }
  )
  