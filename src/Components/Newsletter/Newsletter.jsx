import React from 'react'
import './Newsletter.css'
const Newsletter = () => {
  return (
    <div className='Newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subribe to Our Newsletter And Stay Updated</p>
        <div>
            <input type="email"placeholder='Your Email Id' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Newsletter