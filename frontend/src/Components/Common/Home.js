import React, { Component} from 'react'
import '../../App.css';

import {getUserData} from '../../functions/commonFunctions';
import logo from '../../images/Common/logo.PNG';

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: "",
    }
  }

  componentDidMount(){
    getUserData().then(data => {
      this.setState({
        userData: data
      })
    });
  }

  render() {
    return (
      <div className='container main-container'>
        <div className='row'>
          <div className='col'>
            <div className='home-title'>
              WELCOME TO iHOTEL
            </div>
            <h4>{this.state.userData.name}'s Account</h4>
            <h4>This is a/an {this.state.userData.userType} Account</h4>
          </div>
          <div className='col'>
            <img src={logo} alt='logo' className='home-logo' />
          </div>
        </div>
      </div>
    )
  }
}

