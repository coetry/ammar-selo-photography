import React from 'react'
import atl from '../ammar_triangle_logo.svg'

function Logo ({height}) {
  return (
    <img src={atl}
         height={height}
         alt='ammar-selo-photography-logo' />
  )
}

export default Logo;
