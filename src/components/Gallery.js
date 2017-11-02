import React, {Component} from 'react'
import ReactGallery from 'react-grid-gallery'


class Gallery extends Component {
  constructor(){
    super();
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    let dataURL = 'http://ammar-selo-photography.local//wp-json/wp/v2/media/?per_page=100'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res
        })
      })
  }
  render () {
    let IMAGES = []

    this.state.photos.map((photo, index) => {
      IMAGES.push(
        {
          src: photo
                    .media_details
                    .sizes
                    .large
                    .source_url,
          thumbnail: photo
                    .media_details
                    .sizes
                    .thumbnail
                    .source_url
        }
      )
    })

    return (
      <ReactGallery images={IMAGES} />
    )


  }
}

export default Gallery
