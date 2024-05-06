import React, { useRef } from 'react'
import "../styles/header.css"
import logo from '../img/logo.svg'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Header() {
  let modal = useRef()
  let burger = useRef()
  let close = useRef()
  
  function openModal() {
    modal.current.classList.toggle("db")
   console.log("ok");
   burger.current.classList.add("dn")
   close.current.classList.add("db")
  }
  function closeModal() {
    modal.current.classList.remove("db")
    burger.current.classList.remove("dn")
   close.current.classList.remove("db")
  }
  return (
    <header>
      <div ref={modal} className="modal">
        <div className="modal__window">
          <div className="modal__top">
            <ul>
              <NavLink className="navlink" to="/about">About</NavLink>
              <NavLink className="navlink" to="/location">Locations</NavLink>
              <NavLink  className="navlink"to="/career">Careers</NavLink>
            </ul>
          </div>
          <div className="modal__bottom">
          <a href="#!">get scootin</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
          <div ref={burger} onClick={openModal}  className='burger'><FaBars/></div>
          <div ref={close} onClick={closeModal} className='close'><IoClose /></div>
            <NavLink to="/"><img src={logo} alt="" /></NavLink>
            <nav>
              <ul>
                <NavLink className="navlink" to="/about">About</NavLink>
                <NavLink className="navlink" to="/location">Locations</NavLink>
                <NavLink  className="navlink"to="/career">Careers</NavLink>
              </ul>
            </nav>
          </div>
          <div className="header__right">
            <a className='getscooting' href="#!">get scootin</a>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
