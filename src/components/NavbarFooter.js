// import { render } from '@testing-library/react';
import React, { Component } from 'react'
import './Navbar.css'

class NavbarFooter extends Component {
       state = {clicked:false};
        handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
render() {
  return (
    <>
    <div className='header-footer'>
  <div className="nav-footer">
    {/* <div className="footer-textt"><i class="fa-solid fa-bars"></i>All</div> */}
     
     <div className="footer-textt" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" :"fas fa-bars"  }></i> All                   
      </div>
      
    <div className="footer-text">Best Seller</div>
    <div className="footer-text">Mobiles</div>
    <div className="footer-text">Today's Deals</div>
    <div className="footer-text">Customer Service</div>
    <div className="footer-text">Electronics</div>
    <div className="footer-text">Prime</div>
    <div><select className='prime-dropdown'></select></div>
    <div className="footer-texts">Fashion</div>
    <div className="footer-texts">Amezone Pay </div>
    <div className="footer-texts">Home & Kitchen </div>
    <div className="footer-texts">New Release</div>
    <div className="footer-texts">Books</div>
    <div className="footer-texts">Computers</div>
    <div className="footer-texts">Beauty Care</div>
  
     {/* <div className="app"> */}
    <img className='download-app' src="https://helios-i.mashable.com/imagery/articles/01esPZOLoCAEqWw1RKVAgsN/images-1.fill.size_2000x1927.v1614672156.png" alt="" />
    {/* <div className="img-text">Shopping made easy | Download the app </div> */}
    <a className='achor' href="https://play.google.com/store/apps/details?id=com.amazon.mShop.android.shopping&hl=en_IN&gl=US&pli=1">  Download the app</a>
   </div>
    </div>
      {/* </div> */}
    </>
  )
  }
}

export default NavbarFooter;