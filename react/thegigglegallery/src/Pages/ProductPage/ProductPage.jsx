import React from 'react'
import { ProductPageStyle } from './ProductPage.style'
import ProductCardDetails from '../../Components/ProductCardDetails/ProductCardDetails.jsx'
import placeholder from '../../assets/images/placeholder.png'

function ProductPage() {
  return (
    <ProductPageStyle>
    <ProductCardDetails 
    title="lel"
    desc="lel"
    price="lel"
    img={placeholder}
    lager={2}
    />
    
    </ProductPageStyle>
  )
}

export default ProductPage