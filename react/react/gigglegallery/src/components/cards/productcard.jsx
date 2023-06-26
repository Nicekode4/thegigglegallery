import React from 'react'
import { ProductCardStyle } from './productcard.styled'

function ProductCard(props) {
  return (
    <ProductCardStyle>
      <div className='section'>
        <div className='card'>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
        <p className='price'>Kr {props.price}</p>
        </div>
      </div>  
    </ProductCardStyle>
  )
}

export default ProductCard