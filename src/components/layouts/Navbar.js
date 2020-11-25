import React, { useEffect, useState } from 'react'
import  { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false)

  const handleScroll = () => {
    const offset = window.scrollY
    if(offset > 200 ) {
      setIsSticky(true)
    } else {
      setIsSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  })

  return (
    <header className={ isSticky ? 'navbar sticky' : 'navbar' }>
      <nav className="navigation">
        <NavLink to='/characters'>Characters</NavLink>
        <NavLink to='/episodes'>Episodes</NavLink>
        {localStorage.getItem('email') ?
          <NavLink to='/'>{ localStorage.getItem('email') }</NavLink>
        :
          <NavLink to='/register'>Register</NavLink> 
        }
      </nav>
  </header>
  )
}

export default Navbar