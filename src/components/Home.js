import React from 'react'
import Gallery from './Gallery'
import Slider from './Slider'
import Photos from './Photos'

function Home () {
  return (
    <div className='container'>
      <Slider />
      <Gallery />
      <style jsx>{`
        .container {
          height: 100%;
          width: 100%;
          overflow-x: hidden;
          overflow-y: hidden;
        }
      `}</style>
    </div>
  )
}

export default Home
