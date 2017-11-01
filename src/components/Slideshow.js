import React, {Component} from 'react'

class Slideshow extends Component {
  constructor(){
    super();
    this.state = {
    }
  }

  render() {
    return (
      <div className="slideshow">
        <img src="http://lorempixel.com/1920/1080" />

        <style jsx>{`
          .slideshow {
            height: 100%;
            width: 100%;
            overflow: hidden;
          }
        `}</style>
      </div>
     )
   }
}

export default Slideshow
