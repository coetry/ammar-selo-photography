import React from 'react'
import Gallery from './Gallery'
import Slideshow from './Slideshow.js'
import Photos from './Photos'

function Home () {
  return (
    <div className='container'>
      <Slideshow />
      <Gallery />
      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
        }
      `}</style>
    </div>
  )
}

export default Home
