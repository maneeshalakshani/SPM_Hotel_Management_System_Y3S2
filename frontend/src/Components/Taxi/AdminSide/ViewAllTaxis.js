import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import { deleteTaxi, getAllTaxis } from '../../../functions/taxiFunctions'

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

  DeleteTaxiFunc(id){
    deleteTaxi(id);
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
            let path = t.image;
            console.log(path)
            return(
              <div className='card taxiCard' key={t._id}>
                <h4>{t.taxiType}</h4>
                <img src={t.image} alt="taxi" className='taxiCardImg' />
                <h6>Cost Per Day: {t.pricePerDay}</h6>
                <h6>Driver: {t.driver}</h6>
                <h6>No.of Seats: {t.noOfSeats}</h6>
                <div className='row'>
                  <div className='col d-flex justify-content-center'>
                    <Link to={{pathname: `/updateTaxi/${t._id}`, param1: "Par1"}} className='Button updateBtn'>
                      Update
                    </Link>
                  </div>
                  <div className='col d-flex justify-content-center'>
                    <button className='Button deleteBtn' onClick={() => this.DeleteTaxiFunc(t._id)}>Delete</button>
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
