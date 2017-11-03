import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'
import {Link, Route} from 'react-router-dom'

function Home () {
  return (
    <div className='container'>

      <Slider />

      <Link to="/general">General</Link>
      <Link to="/portrait">Portrait</Link>
      <Link to="/wedding">Wedding</Link>
      <Link to="/real-estate">Real Estate</Link>
      <Link to="/food">Food</Link>
      <Link to="/products">Products</Link>
      
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
