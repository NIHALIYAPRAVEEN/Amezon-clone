import React from 'react'
import FreqData from './FreqData'
import './Freq.css'

const Beauty = () => {

let box = document.querySelector('.beauty-imagge')

       const prvbtnn = () =>{
            let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        
    }

     const nexbtnn = () =>{
         let width = box.clientWidth;
         box.scrollLeft = box.scrollLeft + width;

    }

  return (
     <>
           
     <div className="ctonior">
             <h2 className='frequently'>Best Sellers in Beauty</h2>

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prvbtnn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={nexbtnn}><i class="fa-solid fa-angle-right"></i></button>
            </div>

             <div className="beauty-imagge">
                <FreqData imagess = "https://m.media-amazon.com/images/I/518U63NIvRL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51eR9fruKPL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61ConUYgKaL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51jYzijyp5L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51tXjE2WQQL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41X151Y8TQL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61LN2W9ShzL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61dSZR8IqbL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51FGbb3EbgL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51QtN8cihaL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51We9VI5nvL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61y2ibP4U+L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51cwzZAh0qL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51xk36Nn1zL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41kY+dxDpzL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41kY+dxDpzL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61pK4c7UNiL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51hwUO-kAqL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61rRFnK9ZCL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61ZEGiUDFLL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51wKPntT05L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51KjRBaSogL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/611+X0ZGdWL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71t9JRry+3L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71Evo57slzL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61Mat26E6oL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61nBoAnPSEL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/510wajKkEFL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51qpGr-1qzL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61Ur6uVWDML._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71w5+nXJaQS._AC_SY200_.jpg" />

             </div>

        </div>  

    </>   
  )
}

export default Beauty