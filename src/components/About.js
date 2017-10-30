import React from 'react'
import family from '../ammar_wife_son.jpg'

function About () {
  return (
    <div className="container">
      <div className="bio-blurb">
        <p>My name is Ammar Selo.
          I have a mechanical engineering degree and have spent
        10 years in the Oil & Gas industry. I discovered my passion for photography
        a few years back so I left the corporate life to pursue my passion full time.
        My training as an engineer has helped me bring methodical discipline to the art of photography.
        I am happily married with three beautiful children. In addition to photography, I provide album design
        and print services along with other high quality printing options such as Canvas, Aluminum, and framed photo prints.
        For all inquiries, please shoot me a message or call me at my cell and I will return back to you within 24hrs.
        </p>
      </div>
      <style jsx>{`
	.container {
	  margin-top: 0px;
	  height: 100vh;
	  background-image: url(${family});
	  background-size: cover;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	.bio-blurb {
	  max-width: 70%;
	  color: white;
	  padding: 50px;
	  border-radius: 5px;
	  background-color: rgba(0,0,0,0.7);
	}
	p {
	 font: 'Montserrat Light', Montserrat;
	 font-weight: 100;
	 line-height: 2em; 
	}
    `}</style>
  </div>
  )
}

export default About
