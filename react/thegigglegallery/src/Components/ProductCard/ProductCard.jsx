import React from 'react'
import { ProductCardStyle } from './ProductCard.style'

function ProductCard(props) {
  return (
    <ProductCardStyle>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
        <p className='price'>Kr {props.price}</p>
    </ProductCardStyle>
  )
}

export default ProductCard