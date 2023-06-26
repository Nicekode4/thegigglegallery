import React from 'react'
import { HomeStyle } from './Home.styled.js';
import Gallery from '../../components/gallery/gallerypart';
import img1 from '../../assets/images/placeholder.png'
import img2 from '../../assets/images/placeholder2.png'
import img3 from '../../assets/images/placeholder3.jpg'
import ProductCard from '../../components/cards/productcard';

const images = [
  img1,
  img2,
  img3,
];


const Home = () => {
  return (
    <>
    <HomeStyle>
    <h2>Highlights</h2>
    <Gallery images={images} />
    <h2>Mest populære</h2>
    </HomeStyle>
    <div>
      <ProductCard 
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