import React from 'react'
import FreqData from './FreqData'


const Repurchage = () => {

   let box = document.querySelector('.repurchage-imagge')

       const prrrevbtn = () =>{
          let width = box.clientWidth;
           box.scrollLeft = box.scrollLeft - width;
        
    }

     const neeextbtn = () =>{
         let width = box.clientWidth;
          box.scrollLeft = box.scrollLeft + width;

    }

  return (
    <>
           
     <div className="ctonior">
             <h2 className='frequently'>Frequently repurchased in Supplies</h2>

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prrrevbtn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={neeextbtn}><i class="fa-solid fa-angle-right"></i></button>
            </div>

             <div className="repurchage-imagge">
                <FreqData imagess = "https://m.media-amazon.com/images/I/81YDf0oipEL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/512O30TVdwL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/31cCIJL+ufL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71QeQD2r7mL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71e+WnY7rML._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61lXn0rsTXL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51h5OcC-muL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71qoFjuuT7S._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41oQ8hYnbkL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/711hqrqVjvL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51xvScs5XKL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41rZti4HIgL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71MMT4HYIiL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/31HCJ2kGo1L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41dn8D3iriL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41RlihowjIL._AC_SR160,160_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41grLBDENKL._AC_SR160,160_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41th0bbIJIL._AC_SR160,160_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41JP-+jolVL._AC_SR160,160_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/415BObQNGVL._AC_SR160,160_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/312cpv9eMqL._AC_SR160,160_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/31rSaT8P2ZL._AC_SR160,160_.jpg" />

             </div>
              
            </div>
            </>
  )
}

export default Repurchage