import React, { Component } from 'react'
import '../../../App.css'
import { getAllBookedTaxis, deleteBookedTaxi } from '../../../functions/taxiFunctions';
import noData from '../../../images/Taxi_Images/noData.jpg';
import PdfGenerator from './Report';

export default class BookedTaxiList extends Component {
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
    
      // DeleteTaxiFunc(id){
      //   deleteBookedTaxi(id);
      //   getAllBookedTaxis().then((data) => {
      //     this.setState({
      //       bookDetail: data
      //     })
      //   })
      // }
    
        displayAllTaxis(alltaxis) {
            if(alltaxis !== undefined){
              if(alltaxis.length > 0){
                return(
                  alltaxis.map((t, index) => {
                    return(
                        <tr key={t._id}>
                            <td>{t.taxiType}</td>
                            <td>{t.startDate}</td>
                            <td>{t.endDate}</td>
                            <td>{t.location}</td>
                            <td>{t.purpose}</td>
                            <td></td>
                        </tr>
                    )  
                  })
                )
              }
            }
          }
    
        render() {
            let errorImage;
            if(this.state.bookDetail.length <= 0){
                errorImage = <img src={noData} className='noData-image' />;
            }else{
                errorImage = null;
            }

            return (
              <div className='container main-container'>
                <div className='row'>
                  <div className='col'>
                    <h1 className='taxiMenu'>Your Booked Taxis</h1>
                  </div>
                  <div className='col'>
                    {/* <button className='download-btn'>Download Report</button> */}
                    <PdfGenerator data={this.state.bookDetail}/>
                  </div>
                </div>
                <div className='row'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Taxi Type</th>
                                <th>Book Start Date</th>
                                <th>Book End Date</th>
                                <th>Pick Up Location</th>
                                <th>Pick Up time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.displayAllTaxis(this.state.bookDetail)}
                        </tbody>
                    </table>
                    {errorImage}
                  {/* <div className='booked-taxi-grid-container'>
                    {this.displayAllTaxis(this.state.bookDetail)}
                  </div> */}
                </div>  
              </div>
            )
          }
}
