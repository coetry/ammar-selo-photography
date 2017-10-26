import React from 'react';
import {Route} from 'react-router-dom'

import Navigation from './components/Navigation'
import About      from './components/About'
import Contact    from './components/Contact'
import Home       from './components/Home'

function Main () {
  return (
    <div>
      <Navigation />
    
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact}/>

      <style jsx global>{`
          body {
            font-family: Montserrat, sans-serif;
            margin: 0;
            padding: 0;
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
