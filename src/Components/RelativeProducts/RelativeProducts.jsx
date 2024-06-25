import React from 'react'
import './RelativeProducts.css'
import data_product from '../Assets/data'
import Item from '../Items/Item'

const RelativeProducts = () => {
  return (
    <div className='RelativeProducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return  <Item key={i} id ={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}

        </div>
    </div>
  )
}

export default RelativeProducts