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
      <div className='container'>
        <form className='card login-card' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className='row input-section'>
              <div className='col col-label'>
                <h1>Login</h1>
              </div>
            </div>
            <div className='row input-section'>
                <label className='col col-label'>Email Address</label>
                <input className='col input-field' type='email' placeholder='Enter email' onChange={e => this.setState({email: e.target.value})} />
            </div>
            <div className='row input-section'>
                <label className='col col-label'>Password</label>
                <input className='col input-field' type='password' placeholder='Enter password' onChange={e => this.setState({password: e.target.value})} />
            </div>
            <div className='row input-section'>
                <div className='col col-label'></div>
                <button className='col formLoginBtn' type='submit'>Login</button>
            </div>
          </div>
          <div className='row input-section'>
            <div className='col col-label'></div>
            <div className='col'>
              <label>Register to the system</label>
              <Link to='/register' className='link'>
                Register
              </Link>
            </div>
          </div>
        </form>
      </div>
    )
  }
}
