import React from 'react'
import FreqData from './FreqData'
import './Freq.css'

const Freq = () => {

     let box = document.querySelector('.product-imagge')

       const prevbtn = () =>{
           let width = box.clientWidth;
            box.scrollLeft = box.scrollLeft - width;
        
    }

     const nextbtn = () =>{
         let width = box.clientWidth;
         box.scrollLeft = box.scrollLeft + width;

    }

  return (
    <>
           
     <div className="ctonior">
             <h2 className='frequently'>Frequently repurchased in Personal Care and Home</h2>

            <div className="freq-buton">
                 <button className='freq-btn' onClick={prevbtn}><i class="fa-solid fa-angle-left"></i></button>
                 <button className='freq-btn' onClick={nextbtn}><i class="fa-solid fa-angle-right"></i></button>
            </div>
            

            <div className="product-imagge">
                <FreqData  imagess = "https://m.media-amazon.com/images/I/71W2yQJnDnL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/61dEQFiZZjS._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/61VN1JtjMQL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/61ZocHQrr9L._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/41KNNmiUBnL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/71zXJioptHL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/51VIMoMDCnL._AC_UL320_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/711D9oYNuzL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/512lH3gtbFL._AC_UL320_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/51cyGaXW0zL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/41sX1KJ3R2L._AC_UL320_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/81mxYJYuzRL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/71bqv3D7ztL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/61MjFs7OifL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/71NaU2NYcUL._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/61pGBqDDz5L._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/61iQby6TUML._AC_SY200_.jpg" />
                <FreqData  imagess = "https://m.media-amazon.com/images/I/71Zw79LPpGL._AC_SY200_.jpg" />
                <FreqData imagess =  "https://m.media-amazon.com/images/I/61miO7vtpcS._AC_SY200_.jpg" />
                <FreqData imagess =  "https://m.media-amazon.com/images/I/61tYLDAlf7L._AC_SY200_.jpg" />
 
            </div>
            
        </div>
    </>
  )
}

export default Freq