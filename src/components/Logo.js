import React from 'react'
import atl from '../ammar_triangle_logo.svg'

function Logo ({height}) {
  return (
    <div>
    <img src={atl}
         height={height}
         alt='ammar-selo-photography-logo' />
    <style jsx>{`
      img {
        z-index: 11;
      }
    `}</style>
    </div>

  )
}

export default Logo;
