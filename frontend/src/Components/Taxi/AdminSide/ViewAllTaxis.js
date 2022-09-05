import React, { Component } from 'react'
import { getAllTaxis } from '../../../functions/taxiFunctions'

import i from '../../../images/Taxi_Images/uploads/789676470.png';

export default class ViewAllTaxis extends Component {

  constructor(props){
    super(props);
    this.state = {
      taxis: '',
    }
  }

  componentDidMount(){
    getAllTaxis().then((data) => {
      this.setState({
        taxis: data
      })
    })
  }

  displayAllTaxis(alltaxis) {
    if(alltaxis !== undefined){
      if(alltaxis.length > 0){
        return(
          alltaxis.map((t, index) => {
            return(
              <div className='card taxiCard' key={t._id}>
                <h4>{t.taxiType}</h4>
                <img src={i} alt="taxi" className='taxiCardImg' />
                <h6>Cost Per Day: {t.pricePerDay}</h6>
                <h6>Driver: {t.driver}</h6>
                <h6>No.of Seats: {t.noOfSeats}</h6>
                {/* {import(t.image).then((image) => {
                  this.setState({i: image})
                })}
                <img src={t.image} alt='taxi' />
                <img src={URL.createObjectURL(t.image)} alt='taxi' />
                <img src={i} alt="" />
                {t.image.toString()} */}
                <div className='row'>
                <div className='col d-flex justify-content-center'>
                    <button className='Button updateBtn'>Update</button>
                  </div>
                  <div className='col d-flex justify-content-center'>
                    <button className='Button deleteBtn'>Delete</button>
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
          <h1 className='hearder-menu'>See All Taxis</h1>
        </div>
        <div className='row'>
          <div className='grid-container'>
            {this.displayAllTaxis(this.state.taxis)}
          </div>
        </div>
      </div>
    )
  }
}
