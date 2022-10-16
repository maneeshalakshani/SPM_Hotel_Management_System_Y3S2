import React, { Component } from 'react'
import '../../../App.css';

import {Link} from 'react-router-dom';
import { getAllTaxis } from '../../../functions/taxiFunctions'

// import i from '../../../images/Taxi_Images/taxi.png';

export default class CustomerViewAll extends Component {

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
                {/* <img src={i} alt="taxi" className='taxiCardImg' /> */}
                <img src={t.image} alt="taxi" className='taxiCardImg' />
                {/* {import(t.image).then((image) => {
                  this.setState({i: image})
                })}
                <img src={t.image} alt='taxi' />
                <img src={URL.createObjectURL(t.image)} alt='taxi' />
                <img src={i} alt="" />
                {t.image.toString()} */}
                <div className='row'>
                  <div className='col d-flex justify-content-center'>
                    {/* <Link to='/cusomer-View-Vehicle' className='Button taxiBookBtn'>
                      Book
                    </Link> */}
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
            <h1 className='taxiMenu'>Book Your Vehicle</h1>
          </div>
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
