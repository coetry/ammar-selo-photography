import React from 'react'

function Footer () {

  return (

    <div>
      <div className="credits">
        crafted by: StraightUp Growth
      </div>
      <style jsx>{`
        .credits {
          font-size: 1em;
          color: black;
          width: 100%;
          height: 30px;
          background-color: white;
          z-index: 200;
          padding: 10px
        }
      `}</style>
    </div>

  )

}

export default Footer;
