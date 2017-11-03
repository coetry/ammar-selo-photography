import React, {Component} from 'react'
import ReactGallery from 'react-grid-gallery'


class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      photos: []
    }
  }
  componentDidMount() {
    let dataURL = 'http://ammar-selo-photography.local/wp-json/wp/v2/media/?per_page=100'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res
        })
      })

    console.log(this.props.category)
  }
  render () {
    let IMAGES = []

    const filtered_images = this.state.photos.filter((photo) => {
      let category = this.props.category
      return photo.acf.category === category
    })

    filtered_images.map((photo, index) => {
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
                    .source_url,
          tags: [{value: photo.acf.category, title: photo.acf.category}]
        }
      )
    })

    return (
      <div>
        <h1>{this.props.category}</h1>
        <ReactGallery images={IMAGES} />
      </div>

    )


  }
}

export default Gallery
