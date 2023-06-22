import React from 'react'
import Gallery from '../../Components/Gallery/Gallery'
import img1 from '../../assets/images/placeholder.png'
import img2 from '../../assets/images/placeholder2.png'
import img3 from '../../assets/images/placeholder3.jpg'
import ProductCardHome from '../../Components/ProductCardHome/ProductCardHome'

const images = [
  img1,
  img2,
  img3,
];


function Home() {
  return (
    <>
    <h2>Highlights</h2>
    <Gallery images={images} />
    <h2>Mest populære</h2>
    <div>
      <ProductCardHome 
      img={img1}
      title="Product"
      desc="Lorem ipsum"
      price="399,00"
      />
    </div>
    </>
    
  )
}

export default Home