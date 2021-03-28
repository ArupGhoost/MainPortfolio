import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <>
        <header className='navbar'>
          <ul>

          <li><NavLink to='/' exact className='navbar_child' activeClassName='active'>Home</NavLink></li>
           <li><NavLink to='/portfolio' exact className='navbar_child' activeClassName='active'>Portfolio</NavLink></li>
            <li><NavLink to='/contact' exact className='navbar_child' activeClassName='active'>Contact</NavLink></li>
            </ul>
            </header>
        </>
    )
}

export default Navbar
