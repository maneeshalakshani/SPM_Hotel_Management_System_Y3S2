import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import food from '../../images/Common/food.png';
import taxi from '../../images/Common/taxi.png';
import hall from '../../images/Common/hall.jpg';
import room from '../../images/Common/room.jpg';

export default class adminMenu extends Component {
  render() {
    return (
      <div className='container main-container'>
        <div className='row'>
          <h1 className='hearder-menu'>Admin Menu</h1>
          <div className='col'>
            <Link to='/home'>
              <div className='card menu-card'>
                <img src={food} alt='food' className='menuImg' />
                <h3 className='menuItem'>Food Management</h3>
              </div>
            </Link>
          </div>
          <div className='col'>
            <Link to='/admin-selectTaxiOption'>
              <div className='card menu-card'>
                <img src={taxi} alt='taxi' className='menuImg' />
                <h3 className='menuItem'>Taxi Management</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Link to='/home'>
              <div className='card menu-card'>
                <img src={hall} alt='hall' className='menuImg' />
                <h3 className='menuItem'>Hall Management</h3>
              </div>
            </Link>
          </div>
          <div className='col'>
            <Link to='/home'>
              <div className='card menu-card'>
                <img src={room} alt='room' className='menuImg' />
                <h3 className='menuItem'>Room Management</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
