import React from 'react'
import FreqData from './FreqData'
import './Freq.css'

const Related = () => {


     let box = document.querySelector('.productt-imagge')

       const prevvbtn = () =>{
           let width = box.clientWidth;
           box.scrollLeft = box.scrollLeft - width;
        
    }

     const nexttbtn = () =>{
       let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }

  return (
      <>
           
     <div className="cttonior">
             <h2 className='relatedd'>Related to items you've viewed <a href='/'>See more</a></h2>
             

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prevvbtn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={nexttbtn}><i class="fa-solid fa-angle-right"></i></button>
            </div>

            <div className='productt-imagge'>
                <FreqData imagess = "https://m.media-amazon.com/images/I/61DjwgS4cbL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61aflcZgumL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61TuPtmTScL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71NuyVVSy3L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51uynN8jncL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61I2bY5VYpL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71tGDJ9LrrL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71qOWNxv4jL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71bV203ASmL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61N2p3aTAYL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71ziDdjOTDL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61pHXsALAOL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71pNFb5SbaL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61L+3yvs+8L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51BXrsGGJ6L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51BCSVoPGbL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/31jr0lMQXEL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61DMYx969EL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/317hWOJtvdL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71qOWNxv4jL._AC_SY200_.jpg" />
            </div>

 
            </div>
    </>
  )
}

export default Related