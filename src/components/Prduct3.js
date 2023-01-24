import React from 'react'
import './Prduct3.css'

function Prduct3() {
  return (
        <div className="maiinn">
    <div className='conttenerr'>

        <div className="ccard">
            <h2>Sell on Amazon with 1-Click Launch Support</h2>
            <div className="ccardd">
                <div className="ccard1">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/amazonservices/landing/BTF_Nov22_0.5x._SY304_CB620465154_.png" alt="" />
                    
                </div>

            </div>
            <button className='card-btn'>Register now</button>
        </div>

         <div className="ccard">
            <h2>Pay your credit card bills on Amazon</h2>
            <div className="ccardd">
                <div className="ccard1">
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg" alt="" />
                    
                </div>

            </div>
            <button className='card-btn'>Pay now</button>
        </div>

        <div className="ccccard">
            
                <div className="ccard11">
                    <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg" alt="" />
                    
                </div>
                <div className="sigggn">
                    <h2>Sign in for your best experience</h2>
                  <div className='sigggnin'>
                     {/* <button className='sign-btn'>Sign In securely</button> */}
                     <a href="/" >Sign In securely</a>
                   </div> 
                </div>

          
        </div>

     </div>
     </div>   
  )
}

export default Prduct3