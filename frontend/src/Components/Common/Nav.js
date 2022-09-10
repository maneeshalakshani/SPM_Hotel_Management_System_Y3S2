import '../../App.css';
import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import logo from '../../images/Common/logo.PNG';
import { getUserData } from '../../functions/commonFunctions';

export default class Nav extends Component {

  constructor(props){
    super(props);
    this.state = {
      role: null,
    }
  }

  componentDidMount(){
    getUserData().then(data => {
      this.setState({
        role: data.userType
      })
    });
  }

  removeData(){
    if(window.localStorage !== null){
      window.localStorage.clear();
    }
    // window.location.href = "./";
  }

  render() {
    const navStyle = {
      color: 'white',
    }
    
    return (
      <nav>
        <Link style={navStyle} to='/home'>
          <img src={logo} className='logo' alt='logo'/>
        </Link>

        <ul className='nav-links'>
          <Link className='navlink' to='/about'>
            <li>About</li>
          </Link>

          <Link className='navlink' to='/viewmenu'>
            <li>Menus</li>
          </Link>
          {
            this.state.role === 'admin' 
            ? <Link className='navlink' to='/adminMenu'>
                <li>Admin Menu</li>
              </Link>
            : this.state.role === null ? null :<Link style={navStyle} to='/userMenu'><li>User Menu</li></Link>
          }
          <li>
            <Link to='/'>
              <button className='loginBtn' onClick={this.removeData}>Logout/Login</button>
            </Link>
          </li>
        </ul>
    </nav>
    )
  }
}