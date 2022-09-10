import React, { Component } from 'react'
import {Link} from 'react-router-dom';



import food from '../../../images/Menu_Images/addmenu.jpg';
import food1 from '../../../images/Menu_Images/viewmenu.jpg';

export default class adminmenuhome extends Component{
    render(){
        return(
        <div className='container main-container'>
          <br></br><br></br> <br></br><br></br>
        <ul className='ulcardforadminmenuhome'>
          
            
            <div className="cardofmenusforadminhome">
            <img src={food} alt='food' className='imageforadminhome' />
            <Link  className='viewlink' to='/addmenu'>
            
                <h3 className='menuItem'>Add menu</h3>
                </Link>
              </div>
         
          
            <div className="cardofmenusforadminhome">
            <img src={food1} alt='food' className='imageforadminhome' />
            <Link className='viewlink' to='/mainmenusetting'>
              
                <h3 className='menuItem'>View menu</h3>
                </Link>
              </div>
           
        
          
       
        </ul>
      </div>
        )
    }
}