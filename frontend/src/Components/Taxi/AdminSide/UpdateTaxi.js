import React, { Component } from 'react'
import { getTaxi, updateTaxi } from '../../../functions/taxiFunctions';

import taxiDefault from '../../../images/Taxi_Images/taxi.png';

export default class UpdateTaxi extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: taxiDefault,
      driver: "",
      noOfSeats: 0,
      taxiType: "",
      pricePerDay: 0,
      id: window.location.pathname.split('/')[2],
      taxi: '',
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
      })
    })
  }

  changeImage(e){
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      this.setState({taxiDefault: event.target.result});
      taxiDefault = event.target.result;
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const{image, driver, noOfSeats, taxiType, pricePerDay} = this.state;

    const formData = new FormData();
    formData.append('image', image);
    formData.append('taxiType', taxiType);
    formData.append('pricePerDay', pricePerDay);
    formData.append('noOfSeats', noOfSeats);
    formData.append('driver', driver);
    
    updateTaxi(this.state.id, formData)
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
                <input className='input-field taxi-input-field' type='text' placeholder='enter taxi type' defaultValue={this.state.taxi.taxiType || ''} onChange={e => this.setState({taxiType: e.target.value})} required />
              </div>
              <div className='input-section'>
                <label>Enter Price Per Day</label><br />
                <input className='input-field taxi-input-field' type='number' placeholder='enter taxi type' defaultValue={this.state.taxi.pricePerDay || ''} onChange={e => this.setState({pricePerDay: e.target.value})} required/>
              </div>
              <div className='input-section'>
                <label>Enter Number Of Seats</label><br />
                <input className='input-field taxi-input-field' type='number' placeholder='enter taxi type' defaultValue={this.state.taxi.noOfSeats || ''} onChange={e => this.setState({noOfSeats: e.target.value})} required />
              </div>
              <div className='input-section'>
                <label>Select Driver</label><br />
                <select className='input-field taxi-input-field' required onChange={e => this.setState({driver: e.target.value})}>
                  <option value={this.state.taxi.driver || ''}>{this.state.taxi.driver}</option>
                  <option value='Mr. Kamal Perera'>Mr. Kamal Perera</option>
                  <option value='Mr. Suresh Gamage'>Mr. Suresh Gamage</option>
                  <option value='Mr. Upul Perera'>Mr. Upul Perera</option>
                  <option value='Mr. AA'>Mr. AA</option>
                  <option value='Mr. B'>Mr. B</option>
                </select>
              </div>
            </div>
            <div className='col second-col'>
              <div className='input-section'>
                <label>
                  <input type='file' accept='image/*' className='pro-pic-upload' required onChange={e => {
                    this.setState({image: e.target.files[0]})
                    this.changeImage(e)
                  }} />
                  <img src={taxiDefault} alt='addTaxiImg' className='taxi-pro-pic' />
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
