import React from 'react'
import Logo  from './Logo'
import {Link} from 'react-router-dom'

function Navigation () {
  return (
    <div>
      <div className="nav-container">
        <Link
          className='nav-link'
          to='/about'>About
        </Link>

        <Link
          className='nav-link logo-container'
          to='/'>
          <Logo height="200" />
        </Link>

        <Link
          className='nav-link'
          to='/contact'>Contact
        </Link>
      </div>
      <style jsx>{`
        .nav-container {
          display: flex;
          flex-direction: row;
          align-items: center;
          background: black;
          justify-content: space-around;
	  height: 100px;
	  box-shadow: 0 8px 6px -6px black;
        }

        .logo-container > img {
          margin-top: 100px;
        }

        .nav-link {
          margin: auto;
          flex-grow: 1;
          text-decoration: none;
          text-transform: uppercase;
        }
        .nav-link {
          text-transform: uppercase;
          text-decoration: none;
        }
      `}</style>
    </div>
  )
}

export default Navigation;
