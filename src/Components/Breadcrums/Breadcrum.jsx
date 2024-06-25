import React from 'react'
import './Breadcrum.css'
import aro from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product}=props;
  return (
    <div className='Breadcrum'>
        HOME <img src={aro} alt="" /> SHOP <img src={aro} alt="" />{product.category } <img src={aro} alt="" /> {product.name}


    </div>
  )
}

export default Breadcrum