import React, { Component } from 'react'

import taxiDefault from '../../../images/Taxi_Images/taxi.png';
import {addTaxi} from '../../../functions/taxiFunctions';
import {taxiValidity, checkInputOnChange} from '../../../functions/Validation/TaxiValidation';

export default class AddTaxi extends Component {

  constructor(props){
    super(props);
    this.state = {
      image: taxiDefault,
      driver: "",
      noOfSeats: 0,
      taxiType: "",
      pricePerDay: 0,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeImage(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      this.setState({taxiDefault: event.target.result});
      taxiDefault = event.target.result;
    };
  }

  checkInputs(){
    let type = document.getElementById('type').value;
    let price = document.getElementById('price').value;
    let seats = document.getElementById('seats').value;
    let driver = this.state.driver;
    let image = document.getElementById('image').value;

    let typeErr = document.getElementById('typeErr')
    let priceErr = document.getElementById('priceErr')
    let seatErr = document.getElementById('seatErr')
    let driverErr = document.getElementById('driverErr')
    let imageErr = document.getElementById('imageErr')

    var vInput = {type, price, seats, driver, image}
    var errInput = {typeErr, priceErr, seatErr, driverErr, imageErr}

    return taxiValidity(vInput, errInput, null)
  }

  handleSubmit(e){
    e.preventDefault();
    const{image, driver, noOfSeats, taxiType, pricePerDay} = this.state;

    let doSubmit = this.checkInputs()

    if(doSubmit === true){
      const formData = new FormData();
      formData.append('image', image);
      formData.append('taxiType', taxiType);
      formData.append('pricePerDay', pricePerDay);
      formData.append('noOfSeats', noOfSeats);
      formData.append('driver', driver);
      
      addTaxi(formData);
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='row taxiMenu'>
            <h1>Add A Taxi</h1>
          </div>
          <form className='row' onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
            <div className='col'>
              <div className='input-section'>
                <label>Enter Taxi Type</label><br />
                <input className='input-field taxi-input-field' id='type' type='text' placeholder='enter taxi type' onChange={e => {
                  this.setState({taxiType: e.target.value})
                  checkInputOnChange(e.target.value, 'typeErr', 'Please Enter Type')
                }}  />
                <span id='typeErr'></span>
              </div>
              <div className='input-section'>
                <label>Enter Price Per Day</label><br />
                <input className='input-field taxi-input-field' id='price' type='number' placeholder='enter taxi type' onChange={e => {
                  this.setState({pricePerDay: e.target.value})
                  checkInputOnChange(e.target.value, 'priceErr', 'Please Enter Type')
                }} />
                <span id='priceErr'></span>
              </div>
              <div className='input-section'>
                <label>Enter Number Of Seats</label><br />
                <input className='input-field taxi-input-field' id='seats' type='number' placeholder='enter taxi type' onChange={e => {
                  this.setState({noOfSeats: e.target.value})
                  checkInputOnChange(e.target.value, 'seatErr', 'Please Enter No of seats')
                }}  />
                <span id='seatErr'></span>
              </div>
              <div className='input-section'>
                <label>Select Driver</label><br />
                <select className='input-field taxi-input-field' id='driver'  onChange={e => {
                  this.setState({driver: e.target.value})
                  checkInputOnChange(e.target.value, 'driverErr', 'Please select a driver')
                }}>
                  <option value=" " defaultValue disabled>Choose Driver</option>
                  <option value='Mr. Kamal Perera'>Mr. Kamal Perera</option>
                  <option value='Mr. Suresh Gamage'>Mr. Suresh Gamage</option>
                  <option value='Mr. Upul Perera'>Mr. Upul Perera</option>
                  <option value='Mr. AA'>Mr. AA</option>
                  <option value='Mr. B'>Mr. B</option>
                </select>
                <span id='driverErr'></span>
              </div>
            </div>
            <div className='col second-col'>
              <div className='input-section'>
                <label>
                  <input type='file' accept='image/*' className='pro-pic-upload' id='image' onChange={e => {
                    this.setState({image: e.target.files[0]})
                    this.changeImage(e)
                    checkInputOnChange(e.target.files[0], 'imageErr', 'Please select an image')
                  }} />
                  <img src={taxiDefault} alt='addTaxiImg' className='taxi-pro-pic' />
                  <span id='imageErr'></span>
                </label>
              </div>
              <div className='input-section'>
                <button type='submit' className='Button taxi-add-btn'>Add A Taxi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
