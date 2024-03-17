import React from 'react'
import './footer.css'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-body'>
      <nav className='footer-nav-item'>
        <NavLink to='https://www.facebook.com/' target='blank' id='email' className='footer-link'>facebook</NavLink>
        <NavLink to='https://www.instagram.com/' target='blank' className='footer-link'>instagram</NavLink>
        <NavLink to='https://twitter.com/' target='blank' className='footer-link'>twitter</NavLink>
        <NavLink to='https://www.linkedin.com/in/shailendra-pawar-0b8211217/' target='blank' className='footer-link'>linkedin</NavLink>
      </nav>
    </div>
  )
}

export default Footer