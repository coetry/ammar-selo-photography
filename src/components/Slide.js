import React from 'react'

function Slide ({background, current}) {
  return (
    <div>
    <div className="slide"></div>
    <style jsx>{`
      div {
        height: 100vh;
        background-image: url('${background[current].imageUrl}');
        background-size: cover;
        background-position: center;
      }
    `}</style>
    </div>
  )
}

export default Slide
