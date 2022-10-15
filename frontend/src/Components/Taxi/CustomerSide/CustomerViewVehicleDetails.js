import React, { Component } from 'react'
import '../../../App.css'
import {Link} from 'react-router-dom';

import { getTaxi } from '../../../functions/taxiFunctions';

const DisplayDitails = (props) => {
    return <div className='row dataInput'>
        <div className='col'>
            <h5>{props.title}</h5>
        </div>
        <div className='col'>
            {props.data}
        </div>
    </div>
}

const BookButton = (props) => {
    return <div className='col d-flex justify-content-center'>
        <Link to={{pathname: `/cusomer-View-Vehicle/${props.id}`, param1: "Par1"}} className='Button data-taxiBookBtn'>
            Book
        </Link>
    </div>
}

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
                <BookButton id={this.state.taxi._id} />
            </div>
        </div>
      </div>
    )
  }
}
