import React, {Component} from 'react'
import ReactGallery from 'react-photo-gallery'

const getCategory = (pathname) => {
  return pathname.split('/')[2] || 'portraits'
}

class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = this.getInitState()
  }

  getInitState = () => {
    const { location: { pathname }} = this.props;

    return {
      category: getCategory(pathname),
      photos: []
    }
  }

  componentDidMount() {
    this.requestData()
  }

  componentWillReceiveProps(nextProps) {
    const currentPath = this.props.location.pathname;
    const nextPath = nextProps.location.pathname;

    if (currentPath !== nextPath) {
      this.setState({ category: getCategory(nextPath)})
    }
  }

  requestData = () => {
    let dataURL = 'http://198.58.109.189/wp-json/wp/v2/media/?per_page=100'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          photos: res
        })
      })
  }

  render () {
    const { category, photos } = this.state;

    const filtered_images = photos.filter(photo => {;
      if (!photo.acf.category) {
        return false
      } else {
        return photo.acf.category.toLowerCase() === category.toLowerCase()
      }
    })

    const IMAGES = filtered_images.map((photo, index) => ({
          src: photo
                .media_details
                .sizes
                .large
                .source_url,
          width: photo
                  .media_details
                  .sizes
                  .large
                  .width,
          height: photo
                   .media_details
                   .sizes
                   .large
                   .height
    }))

    const viewPortWidth = window.innerWidth;

    return (
      <div>
        <ReactGallery columns={viewPortWidth <= 500 ? 1 : 3} photos={IMAGES} />
      </div>
    )

  }
}

Gallery.defaultProps = {
  location: {
    pathname: '/home/portraits'
  },
  id: "yo"
}

export default Gallery
