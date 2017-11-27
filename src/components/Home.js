import React, { Component } from 'react'
import Gallery from './Gallery'
import ClientGallery from './ClientGallery'
import Slider from './Slider'
import { NavLink, Route, Switch } from 'react-router-dom'
import {width, height, fontSize, space} from 'styled-system'


const determineDefaultRoute = (match, path, isExact) => {
    if (match || (!match && isExact && path === '/home/portraits')) {
      return true
    } else {
      return false
    }
}

class Home extends Component {

  handleScrollTop = () => {
    window.scroll(0, this.homeNav.offsetTop);
  }

  renderHomeNavigation = () => {
      const { match: { isExact } } = this.props;
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
          text: 'Products'
        },
        {
          path: '/home/client-gallery',
          text: 'Client Albums'
        }
      ]

      return navItems.map(item => {
        const { path, text } = item
        return (
          <li className="nav-item" key={path}>
            <NavLink
              onClick={this.handleScrollTop}
              activeClassName='active'
              to={path}
              isActive={(match) => determineDefaultRoute(match, path, isExact)}
            >
              {text}
            </NavLink>
          </li>
        )
      })
  }


  render() {
    return (
      <div className='container'>

        <Slider />

        <div
          className="category-nav"
          ref={(el) => this.homeNav = el}
        >
          <ul>
            {this.renderHomeNavigation()}
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
            <Route exact path="/home/client-gallery" component={ClientGallery} />
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
            padding-top: 50px;
            padding-bottom: 50px;
          }

          @media (min-width: 700px) {
            .category-nav {
              justify-content: center;
            }
          }

          .category-nav ul  {
            display: flex;
            color: white;
            list-style: none;
            font-size: ${fontSize};
          }

          .category-nav :global(.nav-item) {
            margin-right: 15px;
          }

          active {
            color: skyblue;
            font-weight: bold;
          }

          @media (max-width: 500px) {

          }

          @media (max-width: 500px) {

            .category-nav ul {
              font-size: 1.2em;
            }

            .category-nav {
              margin-right: 10px;
              flex-wrap: nowrap;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
              -ms-overflow-style: -ms-autohiding-scrollbar;
            }
          }

          `}</style>
        </div>
      )
  }
}

export default Home
