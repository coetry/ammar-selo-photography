import React from 'react'
import fb_logo from '../images/FB-f-Logo__blue_50.png'
import ig_logo from '../images/ig_logo.png'

function Footer () {

  return (

    <div>
      <footer className="credits">
        <div className="social-icons">
          <ul>
            <li>
              <a target="_blank" href="https://www.facebook.com/AmmarSelo1">
                <img className="fb-logo" width="20" height="20" src={fb_logo} />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.instagram.com/ammarselophotography/">
                <img width="30" height="30" src={ig_logo} />
              </a>
            </li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        .credits {
          font-size: 1em;
          color: black;
          width: 100%;
          height: 50px;
          background-color: rgba(0,0,0,0.3);
          z-index: 200;
          position: fixed;
          bottom:0;
          left:0;
          display: flex;
          align-items: center;
        }

        .social-icons ul {
          display: flex;
          list-style: none;
        }

        .social-icons ul li {
          margin-right: 9px;
          padding: 5px;
        }

        .social-icons ul li a:hover {
          color: white;
        }

        .fb-logo {
          margin-top: 4px;
        }

      `}</style>
    </div>

  )

}

export default Footer;
