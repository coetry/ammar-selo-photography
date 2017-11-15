import React, {Component} from 'react'
import {Card,
        BackgroundImage,
        Subhead} from 'rebass'

class Pricing extends Component {


  render () {


    return (
      <div className="container">
        <div className="card-container">
          <div className="card1 card">
            <Card width={1}>
              <BackgroundImage src='http://198.58.109.189/wp-content/uploads/2017/11/RRW-20.jpg' />
              <Subhead p={2}>
                Budget: $1400
              </Subhead>
              <ul>
                <li>4 Hours Photo</li>
                <li>HD Images</li>
                <li>100 Edited Photos</li>
                <li>1 Month Online Gallery</li>
              </ul>
            </Card>
          </div>
          <div className="card2 card">
            <Card width={1}>
              <BackgroundImage src='http://198.58.109.189/wp-content/uploads/2017/11/RME-437.jpg' />
              <Subhead p={2}>
                Premium: $2600
              </Subhead>
              <ul>
                <li>8 Hours Photo</li>
                <li>FHD Images</li>
                <li>150 Edited Photos</li>
                <li>2 Months Online Gallery</li>
                <li>Portrait Session</li>
                <li>Four 5x7 Photo Prints</li>
              </ul>
            </Card>
          </div>
          <div className="card3 card">
            <Card width={1}>
              <BackgroundImage src='http://198.58.109.189/wp-content/uploads/2017/11/RMW-154-Edit-Edit-Edit.jpg' />
              <Subhead p={2}>
                Ultimate: $6000
              </Subhead>
              <ul>
                <li>8 Hours Photo</li>
                <li>FHD Images</li>
                <li>150 Edited Photos</li>
                <li>2 Months Online Gallery</li>
                <li>Portrait Session</li>
                <li>Four 5x7 Photo Prints</li>
              </ul>
            </Card>
          </div>
        </div>
        <section className="ala-carte">
          Ala Carte
        </section>
        <section>
        </section>
        <style jsx>{`
          .card-container {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            grid-gap: 20px;
            margin: 40px
            margin-top: 70px;
          }

          @media (max-width: 500px) {
            .card-container {
              grid-template-columns: 1fr;
            }
          }

          .card {
            box-shadow: 0 0 20px 1px rgba(0,0,0,.18);

          }
          .card ul li {
            margin: 0px;
            padding: 16px;
          }


          .container {
            width: 100%;
          }

          .ala-carte {
            width: 100%;
            height: 70px;
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }



        `}</style>
      </div>
    )

  }

}

export default Pricing
