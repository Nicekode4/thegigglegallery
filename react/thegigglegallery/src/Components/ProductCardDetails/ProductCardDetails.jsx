import React from 'react'
import { ProductCardDetailsStyle } from './ProductCardDetails.style'
import placeholder from '../../assets/images/placeholder.png'

function ProductCardDetails(props) {
  return (
    <ProductCardDetailsStyle>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <div className='ratingDiv'>
          <h6>4.7 <p>(212 Annmeldelser)</p></h6>
          <p className='desc'>{props.desc}</p>
          <div>
            <p className='price'>Kr {props.price}</p>
            <div>
              <button>Læg i kurv</button>
              <p>På lager: {props.lager}</p>
            </div>
          </div>
          <hr />
          <div>
            <h2>Anmeldelser</h2>
            <button>Skriv en anmeldelse</button>
          </div>
          <h3>Anmdelser</h3>
          <hr />
          <h2>Ingen anmelder endnu..</h2>
        </div>
    </ProductCardDetailsStyle>
  )
}

export default ProductCardDetails