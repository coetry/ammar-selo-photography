import React from 'react';
import {Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import About      from './components/About'
import Contact    from './components/Contact'
import Home       from './components/Home'
import Gallery    from './components/Gallery'

function Main () {
  return (
    <div className="main-container">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/>

      <Route path="/general" render={() => <Gallery category="General" />} />
      <Route path="/portrait" render={() => <Gallery category="Portrait" />} />
      <Route path="/wedding" render={() => <Gallery category="Wedding" />} />
      <Route path="/real-estate" render={() => <Gallery category="Real Estate" />} />
      <Route path="/food" render={() => <Gallery category="Food" />} />
      <Route path="/products" render={() => <Gallery category="Products" />} />

      <style jsx global>{`
    	  * {
    	    margin: 0px;
    	    padding: 0px;
    	  }

    	  body {
          font-family: Montserrat, sans-serif;
    	    height: 100%;
    	    width: 100%;
        }

        .main-container {
          overflow: hidden;
        }

        a.nav-link {
          text-decoration: none;
          text-transform: uppercase;
          color: white;
        }

        .logo-container {
          margin-top: 50px;
        }
      `}</style>
    </div>
  )
}

export default Main
