import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import food from '../../images/Common/food.png';
import taxi from '../../images/Common/taxi.png';
import hall from '../../images/Common/hall.jpg';
import room from '../../images/Common/room.jpg';

export default class userMenu extends Component {
  render() {
    return (
      <div className='container main-container'>
        <div className='row'>
          <h1 className='hearder-menu'>Customer Menu</h1>
          <div className='col'>
            <Link to='/viewAllTaxis'>
              <div className='card menu-card'>
                <img src={food} alt='food' className='menuImg' />
                <h3 className='menuItem'>Order Food</h3>
              </div>
            </Link>
          </div>
          <div className='col'>
            <Link to='/viewAllTaxis'>
              <div className='card menu-card'>
                <img src={taxi} alt='taxi' className='menuImg' />
                <h3 className='menuItem'>Book Taxi</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <Link to='/viewAllTaxis'>
              <div className='card menu-card'>
                <img src={hall} alt='hall' className='menuImg' />
                <h3 className='menuItem'>Book Hall</h3>
              </div>
            </Link>
          </div>
          <div className='col'>
            <Link to='/viewAllTaxis'>
              <div className='card menu-card'>
                <img src={room} alt='room' className='menuImg' />
                <h3 className='menuItem'>Book Room</h3>
              </div>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}
