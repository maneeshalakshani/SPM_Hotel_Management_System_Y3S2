import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import { deleteRoom, getAllRooms } from "../../../functions/roomFunctions";
import i from "../../../images/Taxi_Images/taxi.png";
export default class ViewAllRooms extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rooms: [],
    };
  }

  getAllRms() {
    getAllRooms().then((data) => {
      this.setState({
        rooms: data,
      });
    });
  }

  componentDidMount() {
    this.getAllRms();
  }

  DeleteRoomFunc(id) {
    deleteRoom(id);
    this.getAllRms();
  }

  displayAllRooms(allRooms) {
    if (allRooms !== undefined) {
      if (allRooms.length > 0) {
        return allRooms.map((t, key) => {
          return (
            <div className="card taxiCard" key={t._id}>
              <h4>{t.roomType}</h4>
              <img src={i} alt={t.roomType} className="roomCardImg" />
              <h6>Per Night : {t.roomPrice}$</h6>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <Link
                    to={{ pathname: `/updateRoom/${t._id}`, param1: "Par1" }}
                    className="Button rmupdateBtn">
                    Update
                  </Link>
                </div>
                <div className="col d-flex justify-content-center">
                  <button
                    className="Button rmdeleteBtn"
                    onClick={() => this.DeleteRoomFunc(t._id)}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        });
      }
    }
  }

  render() {
    return (
      <div className="container main-container">
        <div className="row">
          <h1 className="text-center mt-4">Rooms List</h1>
        </div>
        <div className="text-end mt-5">
          <Button className="AddNwRmBtn" variant="outline-dark"><NavLink className="navLink" to="/addRoom">+ Add New Room</NavLink></Button>
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
