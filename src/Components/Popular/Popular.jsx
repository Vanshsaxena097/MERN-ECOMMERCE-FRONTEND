import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Items/Item';

const Popular = () => {
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const fetchPopularProducts = async () => {
      try {
        const response = await fetch('http://localhost:4000/popularinwomen');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setPopularProducts(data);
      } catch (error) {
        console.error('Failed to fetch popular products:', error);
      }
    };

    fetchPopularProducts();
  }, []);

  return (
    <div className='Popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {popularProducts.map((item) => (
          <Item 
            key={item.id} 
            id={item.id} 
            name={item.name} 
            image={item.image} 
            new_price={item.new_price} 
            old_price={item.old_price} 
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
