import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <div className='navbar' >
        <h1 className='logo'>SK</h1>

        <div class="navbar-items">
        <a class="nav-link " href="#">HOME</a>
        <a class="nav-link" href="#">PORTFOLIO</a>
        <a class="nav-link" href="#">SERVICES</a>
        <a class="nav-link" href="#">CONTACT</a>
        </div>
            
        <button className='hire'>HIRE ME  &#8599;</button>
    </div>
    <hr />
    </div>
  )
}

export default Navbar