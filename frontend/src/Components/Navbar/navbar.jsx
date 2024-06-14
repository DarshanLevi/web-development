import React, { useContext, useState } from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import {ShopContext} from "../../Context/ShopContext.jsx"



const Navbar = () => {

  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext)
  // const menuRef = useRef();

  // const dropdown_toggle = (e) =>{
  //   menuRef.current.classList.toggle('nav-menu-visible');
  //   e.target.classList.toggle('open')
  // }

  return (
    <div className='navbar'>

    <div className='nav-logo'>
        <img src= {logo} alt = ''/>
        <p>SHOP-IT</p>
    </div>

    <ul className='nav-menu'> 
    <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={() => {setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>mens</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={() => {setMenu("women")}}><Link style={{textDecoration: 'none'}} to='/women'>women</Link>{menu==="women"?<hr/>:<></>}</li>
    <li onClick={() => {setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
    </ul>
    <div className='nav-login-cart'>
      {localStorage.getItem('auth-token')
      ?<button onClick={()=>{localStorage.removeItem('auth-token');window.location.replace('/')}}>Logout</button>
      :<Link to='/login'><button>Login</button></Link>} 

       <Link to='/cart'><img src={cart_icon} alt=''/></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
    </div>
    </div>
  )
}

export default Navbar