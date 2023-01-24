 import React from 'react'
 import Mycard from './Mycard'
 import './Deals.css'
 
 const Deals = () => {

     let box = document.querySelector('prodct-ctner')
       const btnnprevv = () =>{
        let width = box.clientWidth;
        
        box.scrollLeft = box.scrollLeft - width;
    }

     const btnnnextt = () =>{
        let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;
    }

   return (
    <div className="product-containerr">
        <div className="product-heading">
        <h1>Today's Deals</h1>
       <p><a href='/'>See all deals</a> </p> 
      </div>

     <div className='product-btn'>
        <button className='productt-btn' onClick={btnnprevv}><i class="fa-solid fa-angle-left"></i></button>
        <button className='productt-btn' onClick={btnnnextt}><i class="fa-solid fa-angle-right"></i></button>
     </div>

          <div className="product-item">
        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div><div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

         <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div><div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        <div className="product-list">
            <Mycard 
            image = "https://m.media-amazon.com/images/I/41-MXmaKVIL._AC_SY200_.jpg"
            off = "60% off"
            deall = "Deal of thr day"
            about = "New launch offer "
            />
        </div>

        </div>
     
 
         </div>
   )
 }
 
 export default Deals ;