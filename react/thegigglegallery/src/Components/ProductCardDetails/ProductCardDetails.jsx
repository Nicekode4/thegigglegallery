import React from 'react'
import { ProductCardDetailsStyle } from './ProductCardDetails.style'

function ProductCardDetails(props) {
  return (
    <ProductCardDetailsStyle>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
        <p className='price'>Kr {props.price}</p>
    </ProductCardDetailsStyle>
  )
}

export default ProductCardDetails