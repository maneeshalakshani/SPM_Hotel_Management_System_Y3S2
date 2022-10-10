import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";

import { deleteRoom, getAllRooms } from "../../../functions/roomFunctions";

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

  handleRedirect() {
    window.location.href = "/addRoom"
  }

  DeleteRoomFunc(id) {
    deleteRoom(id);
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
              <h4>{r.roomType}</h4>
              <img src={r.images} alt="img" className="roomCardImg" />
              <h6>Per Night : {r.roomPrice}$</h6>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <Link
                    to={{ pathname: `/updateRoom/${r._id}`, param1: "Par1" }}
                    className="Button rmupdateBtn">
                    Update
                  </Link>
                </div>
                <div className="col d-flex justify-content-center">
                  <button
                    className="Button rmdeleteBtn"
                    onClick={() => this.DeleteRoomFunc(r._id)}>
                    Delete
                  </button>
                </div>
              </div>
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
          <h1 className="text-center mt-4">Rooms List</h1>
        </div>
        <div className="text-end mt-5">
          <Button onClick={this.handleRedirect} className="AddNwRmBtn" variant="outline-dark">
              + Add New Room
          </Button>
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
