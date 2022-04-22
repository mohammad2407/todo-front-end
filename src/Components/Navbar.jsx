import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar = () => {
  return (
    <div >
        <Link to = '/' style={{margin: "10px"}}>Home</Link>
        <Link to = '/about-us' style={{margin: "10px"}}>About</Link>
        <Link to = '/users' style={{margin: "10px"}}>Users</Link>
        <Link to = '/Login' style={{margin: "10px"}}>Login</Link>

    </div>
  )
}
