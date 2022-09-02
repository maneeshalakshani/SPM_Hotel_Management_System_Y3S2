import React, { Component } from 'react'

import {getUserData} from '../../functions/commonFunctions';

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
      <div>
        <h1>Home Page</h1>
        <h3>{this.state.userData.name}'s Account</h3>
      </div>
    )
  }
}

