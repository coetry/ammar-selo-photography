import React, {Component} from 'react'
import Slide from './Slide'


class Slider extends Component {
  constructor(){
    super();
    this.state = {
      background: [
        {'imageUrl':'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {'imageUrl':'https://images.unsplash.com/photo-1462212018902-1ca14eec1bb2?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {'imageUrl':'https://images.unsplash.com/photo-1496264057429-6a331647b69e?auto=format&fit=crop&w=751&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
      ],
      current: 2
    }
  }


  render() {
    return (
      <div className="slideshow">
        <Slide background={this.state.background}
               current={this.state.current} />
        <style jsx>{`
          .slideshow {
            overflow: hidden;
          }

          .slide {
            height: 100vh;
            background-image: url('https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D');
            background-size: cover;
          }

        `}</style>
      </div>
     )
   }
}

export default Slider
