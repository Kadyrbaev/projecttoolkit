import React from 'react'
import Button from '../UI/Button'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { cartSlice } from '../../store/slices/cartSlice'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  console.log(cartSlice);
  
  const clickHandler=()=>{
    const data = {
      title: props.title,
      price: props.price,
      id: props.id
    }
    dispatch(cartSlice.actions.getCart(data))
  }
  return (
    <ProductContainer>
      <div>
        <h1>{props.title}</h1>
        <h3>$ {props.price}</h3>
      </div>
      <div>
        <p>{props.description}</p>
        <Button onClick={clickHandler}>Add+</Button>
      </div>
    </ProductContainer>
  )
}

export default ProductItem

const ProductContainer = styled.div`
  box-shadow: 0px 0px 12px 0.92px aqua;
  background-color: #070707;
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  padding: 10px 40px;
  margin: auto;
  margin-top: 20px;
`