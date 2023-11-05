import React from 'react'
import { Link } from '@redwoodjs/router'

const routes = [
  {
    label: 'Home',
    path: '/',
  },
  {
    label: 'Public Posts',
    path: '/posts',
  },
]

const Navbar = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to={'/'}>
          <h1 className="logo">Redwoodjs</h1>
        </Link>
        <ul className="nav_items">
          {routes.map((item) => (
            <li>
              <Link className="nav_links" to={item.path}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
