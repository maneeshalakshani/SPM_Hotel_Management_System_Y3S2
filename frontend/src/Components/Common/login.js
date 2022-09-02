import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import '../../App.css';

import {Login} from '../../functions/commonFunctions';

export default class login extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const{email, password} = this.state;
    const user = {email, password};
    console.log(user);
    Login(user);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
        <div>
            <label>Email Address</label>
            <input type='email' placeholder='Enter email' onChange={e => this.setState({email: e.target.value})} />
        </div>
        <div>
            <label>Password</label>
            <input type='password' placeholder='Enter password' onChange={e => this.setState({password: e.target.value})} />
        </div>
        <div>
            <button type='submit'>Login</button>
        </div>
        <div>
          Register to the system 
          <Link to='/register' className='link'>
            Register
          </Link>
        </div>
      </form>
    )
  }
}
