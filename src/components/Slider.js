import React, {Component} from 'react'
import Slide from './Slide'


class Slider extends Component {
  constructor(){
    super();
    this.state = {
      background: [
        {'imageUrl': 'http://ammar-selo-photography.local/wp-content/uploads/2017/11/Carbon-Fiber.jpg'},
        {'imageUrl': 'http://ammar-selo-photography.local/wp-content/uploads/2017/11/RRW-178-Edit.jpg'},
        {'imageUrl': 'http://ammar-selo-photography.local/wp-content/uploads/2017/11/Seared-Ahi-Avocado-Salad-2.jpg'},
        {'imageUrl': 'http://ammar-selo-photography.local/wp-content/uploads/2017/11/Cocohodo_Hero_2880x2304.jpg'},
        {'imageUrl': 'http://ammar-selo-photography.local/wp-content/uploads/2017/11/5D2_0020-2.jpg'}
      ],
      current: 0
    }
  }

  componentDidMount() {
    window.setInterval(this.changeCurrent.bind(this), 3000);
    console.log('current:' + this.state.current);
  }

  changeCurrent () {
    let current = this.state.current;
    let lastImg = this.state.background.length -1;

    if (current !== lastImg) {
        current++;
        this.setState({current: current});
    } else {
        current = 0;
        this.setState({current: current});
    }
  }




  render() {
    return (
      <div className="slideshow">
        <Slide
          background={this.state.background}
          current={this.state.current} />
        <style jsx>{`
          .slideshow {
            overflow: hidden;
            z-index: -1;
          }
        `}</style>
      </div>
     )
   }
}

export default Slider
