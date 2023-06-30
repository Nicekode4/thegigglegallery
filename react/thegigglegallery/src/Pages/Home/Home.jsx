import React, { useState, useEffect } from 'react';
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
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4242/books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
console.log(products);
  return (
    <>
      <h2>Highlights</h2>
      <Gallery images={images} />
      <h2>Mest populære</h2>
      <div>
        {products.map(product => (
          <ProductCardHome
            key={product.id}
            img={product.img_link}
            title={product.name}
            desc={product.desc}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}


export default Home