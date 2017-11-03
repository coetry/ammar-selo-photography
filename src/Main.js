import React from 'react';
import {Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import About      from './components/About'
import Contact    from './components/Contact'
import Home       from './components/Home'
import Gallery    from './components/Gallery'
import Footer     from './components/Footer'

function Main () {
  return (
    <div className="main-container">
      <Navigation />

      <Route exact path="/" component={Home} />
      <Route path="/home" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/>

      <Footer />

      <style jsx global>{`
    	  * {
    	    margin: 0px;
    	    padding: 0px;
    	  }

    	  body {
          font-family: 'Unica One', sans-serif;
    	    height: 100%;
    	    width: 100%;
        }

        .main-container {
          overflow: hidden;
        }

        a {
          text-transform: uppercase;
          color: white;
          text-decoration: none
        }

        .logo-container {
          margin-top: 50px;
        }

        .active {
          color: skyblue;
          font-weight: bold;
        }

      `}</style>
    </div>
  )
}

export default Main
