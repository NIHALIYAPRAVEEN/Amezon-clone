import React from 'react'
import './Deals.css'

const Mycard = (props) => {
  return (
    <div className='prodct-ctner'> 
        <div className='product-imgg'>
           <img src={props.image} alt="" />
        </div>
       
        <div className="product-discount">
           <a href="/">{props.off}</a>
            <a href="/">{props.deall}</a>
        </div>
        
        <p>{props.about}</p>

    </div>

    
  )
}

export default Mycard ;