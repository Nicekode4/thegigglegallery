import React from 'react'
import { ProductPageStyle } from './ProductPage.style'
import ProductCardDetails from '../../Components/ProductCardDetails/ProductCardDetails.jsx'
import placeholder from '../../assets/images/placeholder.png'

function ProductPage() {
  return (
    <ProductPageStyle>
    <ProductCardDetails
    category="Category 1" 
    title="Product 1"
    desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi possimus repudiandae sit illo nemo quaerat laboriosam itaque exercitationem eveniet dolorum voluptate dolores non at doloribus voluptates odio architecto aliquid!, Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nisi possimus repudiandae sit illo nemo quaerat laboriosam itaque exercitationem eveniet dolorum voluptate dolores non at doloribus voluptates odio architecto aliquid!"}
    price="339,00"
    img={placeholder}
    lager={2}
    rating={4.2}
    />
    
    </ProductPageStyle>
  )
}

export default ProductPage