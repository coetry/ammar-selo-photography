import React from 'react'
import Logo  from './Logo'
import {NavLink} from 'react-router-dom'

function Navigation () {

  return (
    <div>
      <div className="nav-container">
        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/'><Logo height={100} />
        </NavLink>
        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/'>Home
        </NavLink>
        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/portfolio'>Portfolio
        </NavLink>
        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/investment'>Investment
        </NavLink>
        <NavLink
          className='nav-link'
          activeClassName='active'
          to='/client-galleries'>Client Galleries
        </NavLink>
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
          z-index: 100;
        }

        .nav-link {
          margin: auto;
          flex-grow: 1;
          text-decoration: none;
          text-transform: uppercase;
          text-transform: uppercase;
          text-decoration: none;
          z-index: 100;
        }
      `}</style>
    </div>
  )
}

export default Navigation;
