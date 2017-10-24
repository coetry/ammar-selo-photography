import React from 'react'
import Gallery from './Gallery'


function Home () {
  return (
    <div className='container'>
      <Gallery />
      <style jsx>{`
        .container {
          margin-top: 100px;
        }
      `}</style>
    </div>
  )
}

export default Home
