import React, { Component } from 'react'
import '../../../App.css'
import { Link } from 'react-router-dom'

export default class CustomerBookedTaxis extends Component {

    displayAllTaxis(alltaxis) {
        if(alltaxis !== undefined){
          if(alltaxis.length > 0){
            return(
              alltaxis.map((t, index) => {
                return(
                  <div className='card taxiCard' key={t._id}>
                    <h4>{t.taxiType}</h4>
                    <img src={t.image} alt="taxi" className='taxiCardImg' />
                    <div className='row'>
                      <div className='col d-flex justify-content-center'>
                        <Link to={{pathname: `/cusomer-View-Vehicle/${t._id}`, param1: "Par1"}} className='Button taxiBookBtn'>
                          Book
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })
            )
          }
        }
      }

    render() {
        return (
          <div className='container main-container'>
            <div className='row'>
              <div className='col'>
                <h1 className='taxiMenu'>Your Booked Taxis</h1>
              </div>
            </div>
            {/* <div className='row'>
                <div className='col'>
                    <img src={this.state.taxi.image} alt="taxi" className='data-image' />
                </div>
                <div className='col'>
                    <div className='card vehicle-card'>
                        <DisplayDitails title={'Type'} data={this.state.taxiType}/>
                        <DisplayDitails title={'Price Per Day'} data={this.state.pricePerDay}/>
                        <DisplayDitails title={'Number of Seats'} data={this.state.noOfSeats}/>
                        <DisplayDitails title={'Driver Name'} data={this.state.driver}/>
                    </div>
                    <BookButton path={`/cusomer-Book-Your-Vehicle/${this.state.taxi._id}`} />
                </div>
            </div> */}
          </div>
        )
      }
}
