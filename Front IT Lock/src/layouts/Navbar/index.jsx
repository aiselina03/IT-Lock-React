import React from 'react'
import "./style.scss"
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
    <>
<div className="navbar">
  <div className="logo">
    <NavLink to={"/"}>
       <img src="https://preview.colorlib.com/theme/itlock/assets/img/logo/logo.png" alt="" />
    </NavLink>
   
  </div>
  <div className="menu">
<ul>
<li><NavLink to={"/"}>Home</NavLink></li>
<li><NavLink to={"/addPage"}>Add Page</NavLink></li>
<li><NavLink to={"/basket"}>Basket</NavLink></li>
<li><NavLink to={"/wishlist"}>Wishlist</NavLink></li>
  </ul>
  </div>
  <div className="contact">
    <button>Free Quote</button>
    <div className="question">
    <i className="fa-solid fa-headphones"></i>
    <div className="number">
      <p>Have any Question?</p>
      <h4>Call: 10 (78) 837 3647</h4>
    </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar