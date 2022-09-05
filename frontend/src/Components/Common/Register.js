import React, { Component } from 'react'
import '../../App.css';
import {Link} from 'react-router-dom';

import {register} from '../../functions/commonFunctions';

export default class Register extends Component {

  constructor(props){
    super(props)
    this.state = {
        name: "",
        email: "",
        pw: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  } 
  
  handleSubmit(e){
    e.preventDefault();
    const{name, email, pw} = this.state;
    const userDetails = {name, email, pw};
    register(userDetails);
  }

  render() {
    return (
        <div className='container'>
            <form className='card login-card' onSubmit={this.handleSubmit}>
              <div className='row'>
                <div className='row input-section'>
                  <div className='col col-label'>
                    <h1>Register</h1>
                  </div>
                </div>
                <div className='row input-section'>
                  <label className='col col-label'>Name</label>
                  <input className='col input-field login-input-field' type='text' placeholder='Enter name' onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div className='row input-section'>
                  <label className='col col-label'>Email Address</label>
                  <input className='col input-field login-input-field' type='email' placeholder='Enter email' onChange={e => this.setState({ email: e.target.value })} />
                </div>
                <div className='row input-section'>
                  <label className='col col-label'>Password</label>
                  <input className='col input-field login-input-field' type='password' placeholder='Enter password' onChange={e => this.setState({ pw: e.target.value })} />
                </div>
                <div className='row input-section'>
                  <div className='col col-label'></div>
                  <button className='col formLoginBtn' type='submit'>Register</button>
                </div>
                <div className='row input-section'>
                  <div className='col col-label'></div>
                    <div className='col'>
                      <label>Register to the system</label>
                      <Link to='/' className='link'>
                        Login
                      </Link>
                    </div>
                </div>
              </div>
            </form>
        </div>
    )
  }
}
