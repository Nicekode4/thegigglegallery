import React from 'react'
import { ProductCardHomeStyle } from './ProductCardHome.style'

function ProductCardHome(props) {
  return (
    <ProductCardHomeStyle>
      <div className='section'>
        <div className='card'>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <p className='desc'>{props.desc}</p>
        <p className='price'>Kr {props.price}</p>
        </div>
      </div>  
    </ProductCardHomeStyle>
  )
}

export default ProductCardHome