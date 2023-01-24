import React from 'react'
import FreqData from './FreqData'
import './Freq.css'

const Grocery = () => {


     let box = document.querySelector('.grocry-imagge')

       const prrevbtn = () =>{
           let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        
    }

      const neextbtn = () =>{
         let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }

  return (
    <>
           
     <div className="ctonior">
             <h2 className='frequently'>Frequently repurchased in Grocery</h2>

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prrevbtn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={neextbtn}><i class="fa-solid fa-angle-right"></i></button>
            </div>

               <div className="grocry-imagge">
                <FreqData imagess = "https://m.media-amazon.com/images/I/91eAwcMQHDL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71bqzJFqL4L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61RtwdB05xL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71e4EA+-ILL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61ZYYrmeHuL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51oWIaOC-HL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61CLFkw3nQL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/512DJzwos7L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71Jjj9kCVpL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71xhhKSkXCL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71PFaLxovsL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/814iBcUf1aL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71QNF3do8pL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71Ye-tdw68L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61HuMNoEUQL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71M6kMdnqTL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/617U0ERYL8L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71eAoudSQgL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71O1Jp3rgEL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/512DJzwos7L._AC_SY200_.jpg" />

            </div>
              
            </div>
            </>
  )
}

export default Grocery ;