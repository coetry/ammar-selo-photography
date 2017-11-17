import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'
import { NavLink, Route, Switch } from 'react-router-dom'

const determineDafaultRoute = (match, path, isExact) => {
    if (match || (!match && isExact && path === '/home/portraits')) {
      return true
    } else {
      return false
    }
}

const renderHomeNavigation = (isExact) => {
    const navItems = [
      {
        path: '/home/portraits',
        text: 'Portraits',
      },
      {
        path: '/home/wedding',
        text: 'Weddings'
      },
      {
        path: '/home/food',
        text: 'Food'
      },
      {
        path: '/home/products',
        text: 'products'
      }
    ]

    return navItems.map(item => {
      const { path, text } = item
      return (
        <li className="nav-item" key={path}>
          <NavLink
            onClick={() => window.scroll(0,755)}
            activeClassName='active'
            to={path}
            isActive={(match) => determineDafaultRoute(match, path, isExact)}
          >
            {text}
          </NavLink>
        </li>
      )
    })
}

const Home = ({ match }) => {
  return (
    <div className='container'>

      <Slider />

      <div className="category-nav">
        <ul>
          {renderHomeNavigation(match.isExact)}
        </ul>
      </div>

      <div className="gallery">
        <Switch>
          <Route exact path="/" component={Gallery} />
          <Route exact path="/home" component={Gallery} />
          <Route exact path="/home/general" component={Gallery} />
          <Route exact path="/home/portraits" component={Gallery} />
          <Route exact path="/home/wedding" component={Gallery} />
          <Route exact path="/home/real-estate" component={Gallery} />
          <Route exact path="/home/food" component={Gallery} />
          <Route exact path="/home/products" component={Gallery} />
        </Switch>
      </div>

      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          background-color: black;
          color: white;
        }

        section {
          margin-top: 50px;
        }

        .gallery {
          min-height: 100vh;
          display: flex;
        }

        .ReactGridGallery {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .category-nav {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 50px;
          padding-bottom: 50px;
        }

        .category-nav ul  {
          display: flex;
          color: white;
          list-style: none;
          font-size: 2em;
        }

        .category-nav :global(.nav-item) {
          margin-right: 15px;
        }

        active {
          color: skyblue;
          font-weight: bold;
        }

        @media (max-width: 500px) {
          .category-nav ul {
            font-size: 1.3em;
          }
        }

        @media (max-width: 500px) {
          .category-nav :global(.nav-item) {
            margin-right: 10px;
          }
        }

      `}</style>
    </div>
  )
}

export default Home
