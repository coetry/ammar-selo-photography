import React, {Component} from 'react'
import Slide from './Slide'


class Slider extends Component {
  constructor(){
    super();
    this.state = {
      background: [
        {'imageUrl': 'https://images.unsplash.com/photo-1505168125601-4ddfdea4c7e7?auto=format&fit=crop&w=751&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {'imageUrl': 'https://images.unsplash.com/photo-1468549940493-46152524296c?auto=format&fit=crop&w=652&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {'imageUrl':'https://images.unsplash.com/photo-1466854076813-4aa9ac0fc347?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {'imageUrl':'https://images.unsplash.com/photo-1462212018902-1ca14eec1bb2?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'},
        {'imageUrl':'https://images.unsplash.com/photo-1496264057429-6a331647b69e?auto=format&fit=crop&w=751&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'}
      ],
      current: 0
    }
  }

  componentDidMount() {
    window.setInterval(this.changeCurrent.bind(this), 2000)
    console.log('current:' + this.state.current)
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
          }
        `}</style>
      </div>
     )
   }
}

export default Slider
