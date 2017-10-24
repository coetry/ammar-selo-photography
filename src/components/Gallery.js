import React, {Component} from 'react'
import Gallery from 'react-grid-gallery'

const IMAGES =
[{
        src: "http://ammar-selo-photography.dev/wp-content/uploads/2017/10/ZHW17-801.jpg",
        thumbnail: "http://ammar-selo-photography.dev/wp-content/uploads/2017/10/ZHW17-801.jpg",
        thumbnailWidth: 800,
        thumbnailHeight: 1000,
        caption: ""
},
{
        src: "http://ammar-selo-photography.dev/wp-content/uploads/2017/10/TNK-22.jpg",
        thumbnail: "http://ammar-selo-photography.dev/wp-content/uploads/2017/10/TNK-22.jpg",
        thumbnailWidth: 1600,
        thumbnailHeight: 1067,
        caption: ""
},

{
        src: "http://ammar-selo-photography.dev/wp-content/uploads/2017/10/TNK-36.jpg",
        thumbnail: "http://ammar-selo-photography.dev/wp-content/uploads/2017/10/TNK-36.jpg",
        thumbnailWidth: 1067,
        thumbnailHeight: 1600
}]

export default () => (
  <Gallery images={IMAGES} />
)
