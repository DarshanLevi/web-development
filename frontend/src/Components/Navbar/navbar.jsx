import React, { useState } from 'react'
import './navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'


const Navbar = () => {

  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>

    <div className='nav-logo'>
        <img src= {logo} alt = ''/>
        <p>SHOPPING</p>
    </div>

    <ul className='nav-menu'> 
    <li onClick={() => {setMenu("shop")}}><link to='/'>Shop</link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={() => {setMenu("mens")}}><link to='/mens'>mens</link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={() => {setMenu("women")}}><link to='/women'>women</link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={() => {setMenu("kids")}}><link to='/kids'>kids</link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
        <link to='/login'><button>Login</button></link>
        <img src={cart_icon} alt=''/>
        <div className='nav-cart-count'>0</div>
    </div>

    </div>
  )
}

export default Navbar