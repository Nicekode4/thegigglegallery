import React from 'react'
import { ProductListStyle } from './ProductList.style'
import ProductCardListPage from '../../Components/ProductCardListPage/ProductCardListPage'

function ProductList() {
  return (
    <ProductListStyle>
            <div>
                <h2>Kategori</h2>
                <select name="" id="">
                    <option value="">Pris</option>
                    <option value="">Populære</option>
                </select>
            </div>
            <ProductCardListPage 
      img={""}
      title="Product"
      desc="Lorem ipsum"
      price="399,00"
      />
    </ProductListStyle>

  )
}

export default ProductList