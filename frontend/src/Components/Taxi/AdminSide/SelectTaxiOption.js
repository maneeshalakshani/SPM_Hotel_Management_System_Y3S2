import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import taxi from '../../../images/Taxi_Images/taxi.png';
import taxis from '../../../images/Taxi_Images/taxis.jpg';

export default class SelectTaxiOption extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
            <h1 className='hearder-menu'>Select a Taxi Option</h1>
        </div>
        <div className='row'>
            <div className='col'>
                <Link to='/addTaxi'>
                    <div className='card menu-card'>
                        <img src={taxi} alt='add-a-taxi' className='taxi-option-image' />
                        <h3>Add A Taxi</h3>
                    </div>
                </Link>
            </div>
            <div className='col'>
                <Link to='/admin-viewAllTaxis'>
                    <div className='card menu-card'>
                        <img src={taxis} alt='add-a-taxi' className='taxi-option-image' />
                        <h3>Added Taxi List</h3>
                    </div>
                </Link>
            </div>
        </div>
      </div>
    )
  }
}
