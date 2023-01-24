import React from 'react'
import FreqData from './FreqData'
import './Freq.css'

const Recomand = () => {

    let box = document.querySelector('.recomand-imagge')

       const prebbtn = () =>{
            let width = box.clientWidth;
             box.scrollLeft = box.scrollLeft - width;
        
    }

     const nxtbbtn = () =>{
         let width = box.clientWidth;
        box.scrollLeft = box.scrollLeft + width;

    }

  return (
      <>
           
     <div className="ctonior">
             <h2 className='frequently'>Recommended for you from Made for Amazon</h2>

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prebbtn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={nxtbbtn}><i class="fa-solid fa-angle-right"></i></button>
            </div>

             <div className="recomand-imagge">
                <FreqData imagess = "https://m.media-amazon.com/images/I/41bvBlmqDdL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/413Mp9MbI-L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/617dk4r10gS._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51QDZIhXnSL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/81Ni6Crg+JL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71y8ctXGqwL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/51pybMR4dgL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61r6AzTvJrL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71F2TeaHwCL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/81QNlPK8mkL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/41O9IT+o24S._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61Nlusm0oeL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/718ucqrQVsL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61uqIVofxvL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/710AOd78HAL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61lmpMpQW+L._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61h5DfV6zUL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/91Oej-QB7oL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/71rxqqcUXKL._AC_SY200_.jpg" />
                <FreqData imagess = "https://m.media-amazon.com/images/I/61r6AzTvJrL._AC_SY200_.jpg" />
             </div>

        </div>    

    </>    
  )
}

export default Recomand