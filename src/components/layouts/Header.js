import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <Link to='/'>
      <div className='banner-image'></div>
    </Link>
  )
}

export default Header
