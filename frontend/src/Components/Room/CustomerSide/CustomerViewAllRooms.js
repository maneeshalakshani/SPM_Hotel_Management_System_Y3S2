import React, { Component } from "react";
import { Link } from "react-router-dom";

import { getAllRooms } from "../../../functions/roomFunctions";

export default class ViewAllRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: "",
    };
  }

  componentDidMount() {
    getAllRooms().then((data) => {
      this.setState({
        rooms: data,
      });
    });
  }

  displayAllRooms(allRooms) {
    if (allRooms !== undefined) {
      if (allRooms.length > 0) {
        return (
          allRooms.map((r, index) => {
          return (
            <div className="card roomCard" key={r._id}>
              <h4 className="roomName">{r.roomName}</h4>
              <img src={r.images} alt="img" className="roomCardImg" />
              <h6>Room Type : {r.type}</h6>
              <h6>Guest Count : {r.maxCount} Adults</h6>
              <h6>Per Night : {r.roomPrice}$</h6>
                  <Link
                    to={{ pathname: `/room/${r._id}`, param1: "Par1" }}
                    className="Button rmupdateBtn">
                    Features
                  </Link>
            </div>
            
          );
        })
      )}
    }
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <h1 className="text-center mt-4">Our Rooms</h1>
        </div>
        <div className="row">
          <div className="grid-container">
            {this.displayAllRooms(this.state.rooms)}
          </div>
        </div>
      </div>
    );
  }
}
