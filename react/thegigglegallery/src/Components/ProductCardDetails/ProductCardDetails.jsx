import React from 'react'
import { ProductCardDetailsStyle } from './ProductCardDetails.style'
import placeholder from '../../assets/images/placeholder.png'

const star = "⭐";
const emptyStar = "⚝"
function ProductCardDetails(props) {
  let rating = ""
  for (let index = 0; index < parseInt(props.rating); index++) {
    rating += star
    
  }
  for (let index = 0; index < 5 - parseInt(props.rating); index++) {
    rating += emptyStar
    
  }
  return (
    <ProductCardDetailsStyle>
      <h2>{props.category}</h2>
        <img src={props.img} alt="product image" className='productImg'/>
        <p className='title'>{props.title}</p>
        <div className='ratingDiv'>
          <p>{rating} </p>
          <h6> {props.rating} <span>(212 Annmeldelser)</span></h6>
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