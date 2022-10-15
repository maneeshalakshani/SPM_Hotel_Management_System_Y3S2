import React, { Component } from 'react'
import '../../../App.css'

import { getTaxi } from '../../../functions/taxiFunctions';
import { DisplayDitails } from './Widget/DisplayDetails';
import { BookButton } from './Widget/BookButton';

export default class CustomerViewVehicleDetails extends Component {

    constructor(props){
        super(props);
        this.state = {
            taxi: "",
            driver:  '',
            noOfSeats: '',
            taxiType: '',
            pricePerDay: '',
            image: '',
            id: window.location.pathname.split('/')[2],
        }
    }

    componentDidMount(){
        getTaxi(this.state.id).then(data => {
          this.setState({
            taxi: data,
            driver: this.state.taxi.driver,
            noOfSeats: this.state.taxi.noOfSeats,
            taxiType: this.state.taxi.taxiType,
            pricePerDay: this.state.taxi.pricePerDay,
            image: this.state.taxi.image,
            taxiDefault: this.state.taxi.image
          })
          console.log("Taxi: "+ this.state.taxi.image);
        })
        console.log("Image: "+ this.state.image);
      }

  render() {
    return (
      <div className='container main-container'>
        <div className='row'>
          <div className='col'>
            <h1 className='taxiMenu'>Your Vehicle Details</h1>
          </div>
        </div>
        <div className='row'>
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
        </div>
      </div>
    )
  }
}
