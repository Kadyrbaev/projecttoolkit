import React, { useEffect } from 'react'
import ProductItem from './ProductItem'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../../store/actions/getProductsAction'

const Product = () => {
  const test = useSelector((state=>state.product))
  console.log(test);
  const dispatch = useDispatch()
    const products = [
        {
            title: "Sumsung",
            price: 1000,
            description: "Lorem ipsum dolor sit",
            id: "1e"
        },
        {
            title: "Sumsung-2",
            price: 2000,
            description: "Lorem ipsum dolor sit",
            id: "2e"
        },
    ]

    useEffect(()=>{
        dispatch(getData(20))
    },[])

  return (
    <div>
      <ProductStyle>PRODUCTS</ProductStyle>
      {
        products.map((el)=>(
            <ProductItem key={el.id} title={el.title} description={el.description} price={el.price} id={el.id} />
        ))
      }
    </div>
  )
}

export default Product

const ProductStyle = styled.h1`
  color: #0d89f5;
  font-size: 48px;
`