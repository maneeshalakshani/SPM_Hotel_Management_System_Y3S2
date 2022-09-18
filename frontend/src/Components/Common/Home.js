import React, { Component} from 'react'
import '../../App.css';

import {getUserData} from '../../functions/commonFunctions';
import logo from '../../images/Common/logo.PNG';
import hottel from '../../images/Common/icons/hottel.jpg'
import hall from '../../images/Common/halls.jpg';
import rooms from '../../images/Common/rooms.jpg';
import menuu from '../../images/Common/menuu.jpg';
import taxi from '../../images/Common/taxi.jpg';
import htlimg from '../../images/Common/htlimg.jpg';
import htlimg1 from '../../images/Common/htlimg1.jpg';
import htlimg2 from '../../images/Common/htlimg2.jpg';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      userData: "",
    }
  }

  componentDidMount(){
    getUserData().then(data => {
      this.setState({
        userData: data
      })
    });
  }

  render() {
    return (
      <div>
      <div className='hottelwall'>
        <div className='hottelwall1'>
        
        
              <div className='home-title'>
                <h1>WELCOME TO</h1>
                THE IHOTEL
                </div>

                
             
              <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          </div>
          </div>
          <div className='hottelwall2'>
            <br></br>
          <p className='luxury'>Luxury Awaits...</p><br></br><br></br>
          <p>We aspire to become the most preferred, opulent hotel complex in Sri Lanka ensuring to reach 
          the pinnacle of success through trailblazing.</p><br></br><br></br>

          <ul className='facilityul1'>
            <div className='htlimg'> <img src={htlimg} className='htlimgs' alt='htlimg'/></div>
            <div className='htlimg1'> <img src={htlimg1} className='htlimgs' alt='htlimg1'/></div>
            <div className='htlimg2'> <img src={htlimg2} className='htlimgs' alt='htlimg2'/></div>
           
          </ul>
          <br></br><br></br>
         <p className='luxury2'>Discover The IHOTEL</p>
          </div>
          <br></br><br></br><br></br>
          
          <ul className='facilityul'>
            <div className='facilityimg'> <img src={hall} className='hall' alt='hall'/></div>
            <div className='facilityimg'> <img src={rooms} className='rooms' alt='rooms'/></div>
            <div className='facilityimg'> <img src={menuu} className='menuu' alt='menuu'/></div>
            <div className='facilityimg'> <img src={taxi} className='taxi' alt='taxi'/></div>
          </ul>
          
       
        </div>
      
    )
  }
}

