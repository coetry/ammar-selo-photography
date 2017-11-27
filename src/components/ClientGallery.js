import React, {Component} from 'react'
import {Card,
        BackgroundImage,
        Subhead, ButtonOutline} from 'rebass'
import styled from 'styled-components'

const AlbumCard = styled(Card)`
  text-align: center;
`

const AlbumLink = styled(ButtonOutline)`
  &:hover {
    background-color: black;
  }
`

class ClientGallery extends Component {

  constructor(props){
    super(props)
    this.state = this.getInitState()
  }

  getInitState = () => {
    return {
      albums: []
    }
  }

  componentDidMount() {
    this.requestData()
  }

  requestData = () => {
    let dataURL = 'http://198.58.109.189/wp-json/acf/v3/client_albums'
    fetch(dataURL)
      .then(res => res.json())
      .then(res => {
        this.setState({
          albums: res
        })
      })
  }

  renderClientGallery () {
    const { albums } = this.state

    return albums.map(album => {
      return (
        <div className="card">
          <AlbumCard width={356}>
            <BackgroundImage ratio={1} src={album.acf.client_album_cover_photo.sizes.large} />
            <Subhead p={1}>
              <a href={album.acf.client_album_link}>
                <AlbumLink children={album.acf.client_album_name} color='black' />
              </a>
            </Subhead>
          </AlbumCard>
        </div>
      )
    })
  }

  render () {

    return (
      <div className="container">

        <div className="card-container">
          {this.renderClientGallery()}
        </div>

        <style jsx>{`
          .container {
            width: 100%;
          }
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
            margin: 40px;
          }

          @media (max-width: 500px) {
            .card-container {
              grid-template-columns: 1fr;
            }
          }

          .card {
            display: flex;
            justify-content: center;
            align-items: center;
          }
        `}</style>
      </div>
    )

  }
}

export default ClientGallery
