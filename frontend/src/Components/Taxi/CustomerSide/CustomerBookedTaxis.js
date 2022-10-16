import React, { Component } from 'react'
import '../../../App.css'
import { getAllBookedTaxis, deleteBookedTaxi } from '../../../functions/taxiFunctions';
import { InputField } from './Widget/book-text-field';
import { DisplayDitails } from './Widget/DisplayDetails';

export default class CustomerBookedTaxis extends Component {

  constructor(props){
    super(props);
    this.state = {
      bookDetail: '',
    }
  }

  componentDidMount(){
    getAllBookedTaxis().then((data) => {
      this.setState({
        bookDetail: data
      })
      console.log(this.state.bookDetail);
      
    })
  }

  DeleteTaxiFunc(id){
    deleteBookedTaxi(id);
    getAllBookedTaxis().then((data) => {
      this.setState({
        bookDetail: data
      })
    })
  }

    displayAllTaxis(alltaxis) {
        if(alltaxis !== undefined){
          if(alltaxis.length > 0){
            return(
              alltaxis.map((t, index) => {
                return(
                  <div className='card taxiCard card-css' key={t._id}>
                    <div className='row'>
                      <div className='col-4'>
                        <h4>{t.taxiType}</h4>
                        <img src={t.image} alt="taxi" className='taxiCardImg' />
                      </div>
                      <div className='col-8'>
                        <DisplayDitails title={'Start'} data={t.startDate} />
                        <DisplayDitails title={'End'} data={t.endDate} />
                        <DisplayDitails title={'Time'} data={t.time} />
                        <DisplayDitails title={'Location'} data={t.location} />
                        <div className='col d-flex justify-content-center'>
                          <button className='Button deleteBtn' onClick={() => this.DeleteTaxiFunc(t._id)}>Delete</button>
                          {/* <Link to={{pathname: `/cusomer-View-Vehicle/${t._id}`, param1: "Par1"}} className='Button taxiBookBtn'>
                            Book
                          </Link> */}
                        </div>
                      </div>
                    </div>
                    {/* <div className='row'>
                      <div className='col d-flex justify-content-center'>
                        <button className='Button deleteBtn' onClick={() => this.DeleteTaxiFunc(t._id)}>Delete</button>
                      </div>
                    </div> */}
                  </div>
                )
              })
            )
          }
        }
      }

    render() {
        return (
          <div className='container main-container'>
            <div className='row'>
              <div className='col'>
                <h1 className='taxiMenu'>Your Booked Taxis</h1>
              </div>
            </div>
            <div className='row'>
              <div className='booked-taxi-grid-container'>
                {this.displayAllTaxis(this.state.bookDetail)}
              </div>
            </div>  
          </div>
        )
      }
}
