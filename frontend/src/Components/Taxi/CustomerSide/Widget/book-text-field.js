import {purposes} from '../data'

import React, { Component } from 'react'


export const InputField = (props) => {
    if(props.select === false){
        return <div className='row taxi-book-input-section'>
            <div className='row'>
                <h6>{props.title}</h6>
            </div>
            <div className='row'>
                <input type={props.type} id={props.id} name={props.id} className='taxi-book-input' onChange={e => {
                  props.getValue(e.target.value);
                  console.log('GOT: '+ e.target.value)
                }} />
            </div>
        </div>
    }
    else{
        return <div className='row taxi-book-input-section'>
            <div className='row'>
                <h6>{props.title}</h6>
            </div>
            <div className='row'>
                <select className='input-field taxi-input-field' id={props.type}  >
                    {
                        purposes.map((i, index) => {
                            return <option key={i.id} value={i.reason}>{i.reason}</option>
                        })
                    }
                </select>  
            </div>   
        </div>       
    }   
}