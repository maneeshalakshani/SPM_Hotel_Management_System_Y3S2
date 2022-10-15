import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import { deleteHall, getAllHalls } from "../../../functions/HallFunctions";
import i from "../../../images/Hall_Images/uploads/Hall1.jpg";
export default class ViewAllHalls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      halls: [],
    };
  }

  getAllHls() {
    getAllHalls().then((data) => {
      this.setState({
        halls: data,
      });
    });
  }

  componentDidMount() {
    this.getAllHls();
  }

  DeleteHallFunc(id) {
    deleteHall(id);
    this.getAllHls();
  }

  handleRedirect() {
    window.location.href = "addHall"
  }

  displayAllHalls(allHalls) {
    if (allHalls !== undefined) {
      if (allHalls.length > 0) {
        return allHalls.map((t, key) => {
          return (
            <Link className='hallimglink' to={`/viewHall/${t._id}`}>
            <div className="card taxiCard" key={t._id}>
              <h4>{t.hallName}</h4>
              <img src={t.images} alt="image" className="taxiCardImg" />         
            </div>
            </Link>
          );
        });
      }
    }
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <h1 className="text-center mt-4">WEDDINGS & CONFERENCES</h1>
        </div>
        
        <div className="row">
          <div className="grid-container">
            {this.displayAllHalls(this.state.halls)}
          </div>
        </div>
      </div>
    );
  }
}
