import React from 'react'
import styled from 'styled-components'

const Button = ({children, onClick, }) => {
  return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>
}

export default Button

const ButtonStyle = styled.button`
    background-color: red;
    border: none;
    padding: 10px 30px;
    font-size: 16px;
`