import React from 'react'
import { ProductCardDetailsStyle } from './ProductCardDetails.style'
import placeholder from '../../assets/images/placeholder.png'

function ProductCardDetails(props) {
  return (
    <ProductCardDetailsStyle>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <div className='ratingDiv'>
          <img src="" alt="rating" />
          <h6>4.7 <span>(212 Annmeldelser)</span></h6>
          </div>
          <p className='desc'>{props.desc}</p>
          <div className='priceDiv'>
            <p className='price'>Kr {props.price}</p>
            <div>
              <button>Læg i kurv</button>
              <p>På lager: {props.lager}</p>
            </div>
          </div>
          <hr />
          <div className='ratingDiv2'>
            <h2>Anmeldelser</h2>
            <button>Skriv en anmeldelse</button>
          </div>
          <hr />
          <h2>Ingen anmelder endnu..</h2>

    </ProductCardDetailsStyle>
  )
}

export default ProductCardDetails