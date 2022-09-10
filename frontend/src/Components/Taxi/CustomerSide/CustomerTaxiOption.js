import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import taxi from '../../../images/Taxi_Images/taxi.png';
import taxis from '../../../images/Taxi_Images/taxis.jpg';

export default class CustomerTaxiOption extends Component {
  render() {
    return (
        <div className='container'>
        <div className='row'>
            <h1 className='hearder-menu'>Select Your Option</h1>
        </div>
        <div className='row'>
            <div className='col'>
                <Link to='/customer-viewAllTaxis'>
                    <div className='card menu-card'>
                        <img src={taxi} alt='add-a-taxi' className='menuImg' />
                        <h3>Book Your Taxi</h3>
                    </div>
                </Link>
            </div>
            <div className='col'>
                <Link to='/admin-viewAllTaxis'>
                    <div className='card menu-card'>
                        <img src={taxis} alt='add-a-taxi' className='menuImg' />
                        <h3>Your Booked Taxis</h3>
                    </div>
                </Link>
            </div>
        </div>
      </div>
    )
  }
}
