import React from 'react'
import FreqData from './FreqData'
import './Freq.css'

const Bestseller = () => {

let box = document.querySelector('.best-imagge')

       const prevbbbtn = () =>{
             let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        
    }

     const nextbbbtn = () =>{
         let width = box.clientWidth;
         box.scrollLeft = box.scrollLeft + width;

    }

  return (
     <>
           
     <div className="ctonior">
             <h2 className='frequently'>Best Sellers in Computers & Accessories</h2>

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prevbbbtn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={nextbbbtn}><i class="fa-solid fa-angle-right"></i></button>
            </div>

             <div className="best-imagge">
                <FreqData imagess = "https://m.media-amazon.com/images/I/71kSLhL3NDL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/516LU0H963L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41EbxurQIDL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61m5Uu4OMJL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61KSceiLHwL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61xNG4wjOuL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/811YM2Go9GL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61HfJn05shL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61onAgKP5gL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61OQT49xFjS._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61ZlwXsG7nL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51iJqee2l3S._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61p3kWOK75L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41KuRShR97L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71hT7JlHRyL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/618U3WubKhL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/711Ms03na1L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71iU9fMbpkL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41ZraPJKHYL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61CNGisjWUL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/31959YGwwiL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41eyLfRsPIL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61zroMjd9FL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51EJirBX6bL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71Wub9idS+L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61Mbl0e228L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71o7JQm59sL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41eyLfRsPIL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51pybMR4dgL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71rxqqcUXKL._AC_SY200_.jpg" />

             </div>

        </div>  

    </>   
  )
}

export default Bestseller ;