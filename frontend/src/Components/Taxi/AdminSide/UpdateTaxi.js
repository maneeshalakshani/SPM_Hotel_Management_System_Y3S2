import React, { Component } from 'react'
import { getTaxi, updateTaxi } from '../../../functions/taxiFunctions';
import {taxiValidity, checkInputOnChange} from '../../../functions/Validation/TaxiValidation';

export default class UpdateTaxi extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: '',
      driver: "",
      noOfSeats: 0,
      taxiType: "",
      pricePerDay: 0,
      id: window.location.pathname.split('/')[2],
      taxi: '',
      taxiDefault : '/images/Taxi_Images/taxi.png',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    getTaxi(this.state.id).then(data => {
      this.setState({
        taxi: data,
        driver: this.state.taxi.driver,
        noOfSeats: this.state.taxi.noOfSeats,
        taxiType: this.state.taxi.taxiType,
        pricePerDay: this.state.taxi.pricePerDay,
        image: this.state.taxi.image,
        taxiDefault: this.state.taxi.image
      })
    })
  }

  changeImage(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      this.setState({taxiDefault: event.target.result});
      this.state.taxiDefault = event.target.result;
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

    return taxiValidity(vInput, errInput, 'update')
  }

  handleSubmit(e){
    e.preventDefault();
    const{image, driver, noOfSeats, taxiType, pricePerDay} = this.state;

    let doSubmit = this.checkInputs()

    if(doSubmit == true){
      const formData = new FormData();
      formData.append('image', image);
      formData.append('taxiType', taxiType);
      formData.append('pricePerDay', pricePerDay);
      formData.append('noOfSeats', noOfSeats);
      formData.append('driver', driver);
      
      updateTaxi(this.state.id, formData)
    }
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='row taxiMenu'>
            <h1>Update Taxi</h1>
          </div>
          <form className='row' onSubmit={this.handleSubmit} method="post" encType="multipart/form-data">
            <div className='col'>
              <div className='input-section'>
                <label>Enter Taxi Type</label><br />
                <input className='input-field taxi-input-field' type='text' id='type' placeholder='enter taxi type' defaultValue={this.state.taxi.taxiType || ''} onChange={e => this.setState({taxiType: e.target.value})}  />
                <span id='typeErr'></span>
              </div>
              <div className='input-section'>
                <label>Enter Price Per Day</label><br />
                <input className='input-field taxi-input-field' type='number' id='price' placeholder='enter taxi type' defaultValue={this.state.taxi.pricePerDay || ''} onChange={e => this.setState({pricePerDay: e.target.value})} />
                <span id='priceErr'></span>
              </div>
              <div className='input-section'>
                <label>Enter Number Of Seats</label><br />
                <input className='input-field taxi-input-field' type='number' id='seats' placeholder='enter taxi type' defaultValue={this.state.taxi.noOfSeats || ''} onChange={e => this.setState({noOfSeats: e.target.value})}  />
                <span id='seatErr'></span>
              </div>
              <div className='input-section'>
                <label>Select Driver</label><br />
                <select className='input-field taxi-input-field' id='driver'  onChange={e => this.setState({driver: e.target.value})}>
                  <option value={this.state.taxi.driver || ''}>{this.state.taxi.driver}</option>
                  <option value='Mr. Kamal Perera'>Mr. Kamal Perera</option>
                  <option value='Mr. Suresh Gamage'>Mr. Suresh Gamage</option>
                  <option value='Mr. Upul Perera'>Mr. Upul Perera</option>
                  <option value='Mr. AA'>Mr. AA</option>
                  <option value='Mr. B'>Mr. B</option>
                </select>
              </div>
              <span id='driverErr'></span>
            </div>
            <div className='col second-col'>
              <div className='input-section'>
                <label>
                  <input type='file' accept='image/*' id='image' className='pro-pic-upload'  onChange={e => {
                    this.setState({image: e.target.files[0]})
                    this.changeImage(e)
                  }} />
                  <img src={this.state.taxiDefault} alt='addTaxiImg' className='taxi-pro-pic' />
                  {/* <img src={this.state.image} alt='addTaxiImg' className='taxi-pro-pic' /> */}
                  <span id='imageErr'></span>
                </label>
              </div>
              <div className='input-section'>
                <button type='submit' className='Button taxi-add-btn'>Update Taxi</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
