import React, { useState } from 'react'
import 'react-router-dom'
import './header.css'
import { Link, NavLink } from 'react-router-dom'


function Header() {


  const[active,setActive]=useState(false);

  return (
    <>
       <nav className='header'>
       <Link id='logo' to="/"></Link>
       <ul>
         <li><NavLink to=''>Home</NavLink></li>
         <li><NavLink  to='/category'>Category</NavLink></li>
         <li><NavLink  to='/authors'>Authors</NavLink></li>
         <li><NavLink to='addBlog'>Add Blog</NavLink></li>
       </ul>
       <NavLink id='profile-btn' to="/userProfile"></NavLink>
     </nav>


      <nav className='nav-2'>
        <Link id='logo' to="/" onClick={()=>{active?setActive(false):null}} ></Link>
        <div className='menu-icon' onClick={()=>{
          
          setActive(!active)}}>
        </div>
      </nav>
      <div className={active?"nav2-items":"notActive"}>
      <li><NavLink onClick={()=>setActive(false)} to='/userProfile'>Profile</NavLink></li>
        <li><NavLink onClick={()=>setActive(false)} to='/category'>Category</NavLink></li>
        <li><NavLink onClick={()=>setActive(false)} to='/authors'>Authors</NavLink></li>
        <li><NavLink onClick={()=>setActive(false)} to='addBlog'>Add Blog</NavLink></li>
      </div>

    </>

  )
}

export default Header