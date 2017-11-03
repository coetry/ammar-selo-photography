import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'
import {Link, Route, Switch} from 'react-router-dom'

function Home ({match}) {
  return (
    <div className='container'>

      <Slider />

      <Link to='/home/general'>General</Link>
      <Link to='/home/portrait'>Portrait</Link>
      <Link to='/home/wedding'>Wedding</Link>
      <Link to='/home/real-estate'>Real Estate</Link>
      <Link to='/home/food'>Food</Link>
      <Link to='/home/products'>Products</Link>



      <Switch>
        <Route exact path="/home/general" render={() => <Gallery category="General" />} />
        <Route exact path="/home/portrait" render={() => <Gallery category="Portrait" />} />
        <Route exact path="/home/wedding" render={() => <Gallery category="Wedding" />} />
        <Route exact path="/home/real-estate" render={() => <Gallery category="Real Estate" />} />
        <Route exact path="/home/food" render={() => <Gallery category="Food" />} />
        <Route exact path="/home/products" render={() => <Gallery category="Products" />} />
      </Switch>

      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
        }

        section {
          margin-top: 50px;
        }

      `}</style>
    </div>
  )
}

export default Home
