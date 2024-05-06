import React from 'react'
import "../styles/footer.css"
import { NavLink } from 'react-router-dom'
import play from '../img/googleplay.png'
import facebook from '../img/facebook.png'
import twitter from '../img/twitter.png'
import instagram from '../img/instagram.png'
import appstore from '../img/appstore.svg'
import logolight from '../img/logolight.png'
function Footer() {
  return (
    <footer>
        <div className="footer__wrapper">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__top__wrapper">
                        <h1>Sign up and Scoot off today</h1>
                        <div className="footer__imgs">
                            <a href="#!"><img className='stores' src={play} alt="" /></a>
                            <a href="#!"><img className='stores' src={appstore} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
               <div className="container">
                <div className="footer__bottom__wrapper">
                <div className="footer__nav">
                    <img src={logolight} alt="" />
                    <nav>
                        <ul>
                            <NavLink className="navlink" to="/about">About</NavLink>
                            <NavLink className="navlink" to="/location">Locations</NavLink>
                            <NavLink  className="navlink"to="/career">Careers</NavLink>
                        </ul>
                        
                    </nav>
                </div>
                <div className="footer__link">
                    <img src={facebook} alt="" />
                    <img src={twitter} alt="" />
                    <img src={instagram} alt="" />
                </div>
                </div>
               </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
