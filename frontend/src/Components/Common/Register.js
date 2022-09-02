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
        <div>
            <form onSubmit={this.handleSubmit}>
                <h1>Register</h1>
                <div>
                    <label>Name</label>
                    <input type='text' placeholder='Enter name' onChange={e => this.setState({ name: e.target.value })} />
                </div>
                <div>
                    <label>Email Address</label>
                    <input type='email' placeholder='Enter email' onChange={e => this.setState({ email: e.target.value })} />
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' placeholder='Enter password' onChange={e => this.setState({ pw: e.target.value })} />
                </div>
                <div>
                    <button type='submit'>Register</button>
                </div>
                <div>
                  Login to the system 
                  <Link to='/' className='link'>
                    Login
                  </Link>
                </div>
            </form>
        </div>
    )
  }
}
