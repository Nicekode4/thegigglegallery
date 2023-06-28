import React from 'react'
import { ProductCardListPageStyle } from './ProductCardListPage.style'

function ProductCardListPage(props) {
  return (
    <ProductCardListPageStyle>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <div className='rating'>4.7/5</div>
        <p className='desc'>{props.desc}</p>
        <div>
          <p className='price'>Kr {props.price}</p>
          <button>Læs mere</button>
        </div>

    </ProductCardListPageStyle>
  )
}

export default ProductCardListPage