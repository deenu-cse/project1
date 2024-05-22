import React from 'react'
import logo from './logo-s.png'
import './random.css'
import { Link } from 'react-router-dom'
export default function Nav() {
  return (
    <div className='logo'>
      <img src={logo}></img>
      <Link to={'/'}>
        <button>Home</button>
      </Link>
    </div>
  )
}
