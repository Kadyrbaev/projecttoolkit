import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components'
import { actionSlice } from '../../store/slices/cartSlice';

const Cart = () => {
  const {items} = useSelector((state)=>state.cart)
  console.log(items);
  const dispatch = useDispatch()

  const deleteHandler=(id)=>{
    console.log(id);
    dispatch(actionSlice.deleteCart({id}))
  }

  return (
    <CartWrapper>
      {
        items.map((el)=>(
         <CartStyle key={el.id}>
           <div>
             <h2>{el.title}</h2>
             <button>+</button>
             <p>X {el.quantity}</p>
             <button onClick={()=>{deleteHandler(el.id)}}>-</button>
           </div>
             <p>{el.price}</p>
         </CartStyle>

        ))
      }

    </CartWrapper>
  )
}

export default Cart
const CartWrapper = styled.div`
  background-color: #ed8b12;
  border: 2px solid red;
  width: 60%;
  margin: auto;
  padding: 14px;
  margin-top: 30px;

`
const CartStyle = styled.div`
  box-shadow: 0px 0px 6px 0.70px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  padding: 10px 40px;
  margin-top: 4px;
`