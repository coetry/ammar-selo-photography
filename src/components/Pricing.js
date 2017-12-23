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
        <section className="ala-carte-section-header">
          <h1>à la carte</h1>
        </section>

        <section className="ala-carte-items">

          <ul>
            <li> Engagement Session</li>
            <br />
            <li> 4 Hours Video</li>
            <br />
            <li> Additional Photo Hour</li>
            <br />
            <li> Additional Video Hour </li>
            <br />
            <li> All High Res Images on USB </li>
            <br />
            <li> Documentary Video Edit</li>
            <br />
            <li> 24" x 36" Canvas/Aluminum</li>
            <br />
            <li> 24" x 36" Framed Canvas</li>
            <br />
            <li> 30" x 40" <strong>3D</strong> Canvas</li>
            <br />
            <li> 12" x 8" Acrylic Album </li>
            <br />
            <li> 12" x 15" Acrylic Album  </li>
            <br />
            <li> 12" x 18" Acrylic Album </li>
          </ul>
          <ul>
            <li> $350 </li>
            <br />
            <li> $600 </li>
            <br />
            <li> $250 </li>
            <br />
            <li> $150 </li>
            <br />
            <li> $500 </li>
            <br />
            <li> $600 </li>
            <br />
            <li> $350 </li>
            <br />
            <li> $400 </li>
            <br />
            <li> $450 </li>
            <br />
            <li> $500 </li>
            <br />
            <li> $700 </li>
            <br />
            <li> $1000 </li>
          </ul>


        </section>


        <style jsx>{`

          .container {
            width: 100%;
          }

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
            transition: 0.5s;
          }
            .card:hover {
              box-shadow: 0 8px 16px 0 rgba(0,0,0,0.6);
}

          }
          .card ul li {
            margin: 0px;
            padding: 16px;
          }

          .ala-carte-section-header {
            width: 100%;
            height: 70px;
            background-color: black;
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .ala-carte-items {
            display: grid;
            grid-template-columns: 1fr 1fr;
            color:black;
            font-size: 1.1em;
            justify-items: center;
            padding-top: 50px;
            padding-bottom: 75px;
          }

          .ala-carte-items ul {
            list-style: none;
            line-height: 2em;
          }

          @media (max-width: 500px) {
            .ala-carte-items {
              margin-left: 8%;
              font-size: 0.79em;
              grid-gap: 50px;
            }
          }
        `}</style>
      </div>
    )

  }

}

export default Pricing
