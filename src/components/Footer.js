import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-main">
            <div className="back">
                <a href="/">Back to top</a>
            </div>

            <div className="main-footer">
                <div className="footr-main">
                <div className="get">
                    <h4>Get to Know Us</h4>
                <ul>
                    <li className="nav-first">
                        <a href="/">About Us</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Careers</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Press Releases</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Amazon Science</a>
                    </li>
                </ul>
                </div>

                <div className="connect">
                    <h3>Connect with Us</h3>
                
                 <ul>
                    <li className="nav-first">
                        <a href="/">Facebook</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Twitter</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Instagram</a>
                    </li>

                </ul>
                </div>

                <div className="make">
                    <h3>Make Money with Us</h3>

                       <ul>
                    <li className="nav-first">
                        <a href="/">Sell on Amazon</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Sell under Amazon Accelerator</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Protect and Build Your Brand</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Amazon Global Selling</a>
                    </li>

                      <li className="nav-first">
                        <a href="/">Become an Affiliate</a>
                    </li>

                      <li className="nav-first">
                        <a href="/">Fulfilment by Amazon</a>
                    </li>

                      <li className="nav-first">
                        <a href="/">Advertise Your Products</a>
                    </li>

                      <li className="nav-first">
                        <a href="/">Amazon Pay on Merchants</a>
                    </li>

                </ul>

                </div>


                <div className="let"> 
                  <h3>Make Money with Us</h3>

                       <ul>
                    <li className="nav-first">
                        <a href="/">COVID-19 and Amazon</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Your Account</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Returns Centre</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">100% Purchase Protection</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Amazon App Download</a>
                    </li>

                    <li className="nav-first">
                        <a href="/">Amazon Assistant Download</a>
                    </li>

                      <li className="nav-first">
                        <a href="/">Help</a>
                    </li>

                </ul>


                </div>

            </div>

            <div className="footer-line"></div>
              <div className="amezn-logo">
               <img src="data:image/png;base64,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" alt="" />

             <div className="english-langg">
            <div className='globe'>
              <i class="fa-solid fa-globe"></i>English</div>

             <select className='langg-dropdown'>
                <option className='contry' value="">English - EN</option>
                <option className='contry' value="">हिन्दी - HI</option>
                <option className='contry' value="">தமிழ் - TA</option>
                <option className='contry' value="">ಕನ್ನಡ - KN</option>
                <option className='contry' value="">മലയാളം - ML</option>
                <option className='contry' value="">বাংলা - BN</option>
                <option className='contry' value="">मराठी - MR</option>
                <option className='contry' value="">राजस्थानी - RAJ</option>
                <option className='contryy' value=""> <a href='/'>learn more</a></option> 
            </select> 
        </div>


        <div className="desh">
            <ul className="deshh">
                <li className="deshhh">
                    <a href="/">India</a>
                </li>

                <li className="deshhh">
                    <a href="/">Brazil</a>
                </li>

                <li className="deshhh">
                    <a href="/">Canada</a>
                </li>

                <li className="deshhh">
                    <a href="/">China</a>
                </li>

                <li className="deshhh">
                    <a href="/">Germany</a>
                </li>

                <li className="deshhh">
                    <a href="/">France</a>
                </li>

                <li className="deshhh">
                    <a href="/">Italy</a>
                </li>

                <li className="deshhh">
                    <a href="/">Japan</a>
                </li>

                <li className="deshhh">
                    <a href="/">Mexico</a>
                </li>

                <li className="deshhh">
                    <a href="/">Netherlands</a>
                </li>

                <li className="deshhh">
                    <a href="/">Poland</a>
                </li>

                <li className="deshhh">
                    <a href="/">Singapore</a>
                </li>

                <li className="deshhh">
                    <a href="/">Spain</a>
                </li>

                <li className="deshhh">
                    <a href="/">Turkay</a>
                </li>

                 <li className="deshhh">
                    <a href="/">  Arab </a>
                </li>
                
                <li className="deshhh">
                    <a href="/">UK</a>
                </li>
                
                <li className="deshhh">
                    <a href="/">USA</a>
                </li>
                
                <li className="deshhh">
                    <a href="/">Australia</a>
                </li>
                
                <li className="deshhh">
                    <a href="/">Africa</a>
                </li>
                
                <li className="deshhh">
                    <a href="/">Ukrain</a>
                </li>

            </ul>
        </div>


        <div className="prevw"></div>

            </div>

            </div>
        </div>
    </div>
  )
}

export default Footer