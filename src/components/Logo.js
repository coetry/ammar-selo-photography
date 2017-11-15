import React from 'react'


function Logo ({height}) {
  return (
    <div>
    <img src="/wp-content/uploads/2017/11/asp_transparent_circle_bg_silver_stroke.png"
         height={height}
         alt='ammar-selo-photography-logo' />
    <style jsx>{`
      img {
        z-index: 200;
      }
    `}</style>
    </div>

  )
}

export default Logo;
