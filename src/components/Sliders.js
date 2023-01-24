import './Sliders.css'

const Sliders = () => {

  let imgItem = document.querySelectorAll('.image-item')

     let startSlider = 0;
      let endSlider = (imgItem.length - 1) * 100 ;


    const btnleft = () =>{
      if(startSlider < 0){
        startSlider = startSlider + 100 ;
      }

      imgItem.forEach(element =>{
         element.style.transform = `translateX(${startSlider}%)`
      })
        
    }

     const btnright = () =>{
      if(startSlider >= -endSlider + 100){
        startSlider = startSlider - 100 ;
      }
      imgItem.forEach(element =>{
        element.style.transform = `translateX(${startSlider}%)`
      })

    }  
 


  return ( 

   <div className="container">
    <div className="image-list">

      <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/61RvHn0+pAL._SX3000_.jpg" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/A1MPSe1eGHL._SX3000_.png" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/713NGv+dKHL._SX3000_.jpg" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/815HGt56dwL._SX3000_.jpg" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/61WE+jHT+QL._SX3000_.jpg" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/81cP1IAxf-L._SX3000_.jpg" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/61l4i7aoY2L._SX3000_.jpg" alt="" />
      </div>

       <div className="image-item">
        <img src="https://m.media-amazon.com/images/I/71cQMXCLSvL._SX3000_.jpg" alt="" />
      </div>
    </div>

           <div className="image-btn">
                <button onClick={btnleft} id="btn-left" className="btn"><i class="fa-solid fa-angle-left"></i></button>
                <button onClick={btnright} id="btn-right" className="btn"><i class="fa-solid fa-angle-right"></i></button>
           </div>

   </div>
  )
}

export default Sliders ;