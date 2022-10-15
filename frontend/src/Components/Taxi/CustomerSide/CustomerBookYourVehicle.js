import React, { Component } from 'react'
import '../../../App.css'

import { getTaxi } from '../../../functions/taxiFunctions';
import {InputField} from './Widget/book-text-field'
import { BookButton } from './Widget/BookButton';

import {purposes} from './data'

import { bookTaxi } from '../../../functions/taxiFunctions';
import { Link } from 'react-router-dom';

export default class CustomerBookYourVehicle extends Component {

    constructor(props){
        super(props);
        this.state = {
            taxi: '',
            id: window.location.pathname.split('/')[2],
            startDate: '', 
            endDate: '', 
            purpose: '', 
            time: '',
            location: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        getTaxi(this.state.id).then(data => {
          this.setState({
            taxi: data,
          })
        })
      }

      handleSubmit(e){
        e.preventDefault();
        const{id, startDate, endDate, purpose, time, location} = this.state;

        const BookedTaxi = {
          vehicleId : id,
          startDate: startDate,
          endDate: endDate, 
          purpose: purpose, 
          time: time,
          location: location
        }

        console.log("Booked Taxi: "+ BookedTaxi.startDate);

        bookTaxi(BookedTaxi);
      }

  render() {
    return (
        <div className='container main-container'>
        <div className='row'>
          <div className='col'>
            <h1 className='taxiMenu'>Book Your Vehicle</h1>
          </div>
        </div>
        <div className='row'>
            <div className='col'>
                <img src={this.state.taxi.image} alt="taxi" className='data-image' />
            </div>
            <div className='col'>
              <form onSubmit={this.handleSubmit} method="post">
                {/* <InputField title={'Select Book Start Date'} type={'date'} id={'startDate'} select={false} getVal={this.getValue}/>
                <InputField title={'Select Book End Date'} type={'date'} id={'endDate'} select={false} getVal={this.getValue}/>
                <InputField title={'Select Purpose For Booking'} type={'select'} id={'purpose'} select={true} />
                <InputField title={'Pick Up Time'} type={'time'} id={'time'} select={false} getVal={this.getValue} />
                <InputField title={'Pick Up Location'} type={'text'} id={'location'} select={false} getVal={this.getValue}/> */}

                <div className='row taxi-book-input-section'>
                    <div className='row'>
                        <h6>Select Book Start Date</h6>
                    </div>
                    <div className='row'>
                        <input type='date' id='startDate' name='startDate' className='taxi-book-input' onChange={e => {
                          this.setState({startDate: e.target.value})
                        }} />
                    </div>
                </div>

                <div className='row taxi-book-input-section'>
                    <div className='row'>
                        <h6>Select Book End Date</h6>
                    </div>
                    <div className='row'>
                        <input type='date' id='endDate' name='endDate' className='taxi-book-input' onChange={e => {
                          this.setState({endDate: e.target.value})
                        }} />
                    </div>
                </div>

                <div className='row taxi-book-input-section'>
                    <div className='row'>
                        <h6>Select Purpose For Booking</h6>
                    </div>
                    <div className='row'>
                    <select className='input-field taxi-input-field' id='purpose' name='purpose' onChange={e => {
                          this.setState({purpose: e.target.value})
                        }} >
                    {
                        purposes.map((i, index) => {
                            return <option key={i.id} value={i.reason}>{i.reason}</option>
                        })
                    }
                </select>  
                    </div>
                </div>

                <div className='row taxi-book-input-section'>
                    <div className='row'>
                        <h6>Pick Up Time</h6>
                    </div>
                    <div className='row'>
                        <input type='time' id='time' name='time' className='taxi-book-input' onChange={e => {
                          this.setState({time: e.target.value})
                        }} />
                    </div>
                </div>

                <div className='row taxi-book-input-section'>
                    <div className='row'>
                        <h6>Pick Up Location</h6>
                    </div>
                    <div className='row'>
                        <input type='text' id='location' name='location' className='taxi-book-input' onChange={e => {
                          this.setState({location: e.target.value})
                        }} />
                    </div>
                </div>

                <div className='input-section'>
                  <button type='submit' className='Button taxi-add-btn'>
                    <Link to={'/customer-booked-taxis'}>
                      Book
                    </Link>
                  </button>
                </div>
                {/* <BookButton path={'/customer-booked-taxis'} /> */}
              </form>  
            </div>
        </div>
      </div>
    )
  }
}
