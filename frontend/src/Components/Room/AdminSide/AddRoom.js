import React, { Component } from "react";

import roomDefault from "../../../images/Room_Images/room.jpg";
import { addRoom } from "../../../functions/roomFunctions";
import Button from "react-bootstrap/esm/Button";
import {
  roomValidity,
  checkInputOnChange,
} from "../../../functions/Validation/Roomvalidation";
export default class AddRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: roomDefault,
      roomName: "",
      type: "",
      maxCount: 0,
      roomPrice: 0,
      description: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeImage(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      this.setState({ roomDefault: event.target.result });
      roomDefault = event.target.result;
    };
  }

  checkInputs() {
    let name = this.state.roomName;
    let type = this.state.type;
    let count = this.state.maxCount;
    let price = document.getElementById("price").value;
    let description = document.getElementById("description").value;
    let images = document.getElementById("images").value;

    let nameErr = document.getElementById("nameErr");
    let typeErr = document.getElementById("typeErr");
    let countErr = document.getElementById("countErr");
    let priceErr = document.getElementById("priceErr");
    let desErr = document.getElementById("desErr");
    let imagesErr = document.getElementById("imagesErr");

    var vInput = { name, type, count, price, description, images };
    var errInput = {
      nameErr,
      typeErr,
      countErr,
      priceErr,
      desErr,
      imagesErr,
    };

    return roomValidity(vInput, errInput, null);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { images, type, roomName, maxCount, roomPrice, description } =
      this.state;

    let doSubmit = this.checkInputs();

    if (doSubmit === true) {
      const formData = new FormData();
      formData.append("images", images);
      formData.append("roomName", roomName);
      formData.append("type", type);
      formData.append("maxCount", maxCount);
      formData.append("roomPrice", roomPrice);
      formData.append("description", description);

      addRoom(formData);

      this.setState({
        roomName: "",
        type: "",
        maxCount: "",
        roomPrice: "",
        description: "",
      });
    }
  }

  handleRedirect() {
    window.location.href = "/allRooms";
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row roomMenu">
            <h1>Add a Room</h1>
          </div>
          <form
            className="row"
            onSubmit={this.handleSubmit}
            method="post"
            encType="multipart/form-data">
            <div className="col">
              <div className="input-section">
                <label>Room Name</label>
                <br />
                <select
                  className="input-field room-input-field"
                  id="name"
                  onChange={(e) => {
                    this.setState({ roomName: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "nameErr",
                      "Please Select a Room Name"
                    );
                  }}>
                  <option value=" " selected disabled>
                    Select a Room Name
                  </option>
                  <option value="Triple Deluxe Room">Triple Deluxe Room</option>
                  <option value="Triple Basic Room">Triple Basic Room</option>
                  <option value="Triple Economy Room">
                    Triple Economy Room
                  </option>
                  <option value="Double Deluxe Room">Double Deluxe Room</option>
                  <option value="Double Basic Room">Double Basic Room</option>
                  <option value="Double Economy Room">
                    Double Economy Room
                  </option>
                  <option value="Single Deluxe Room">Single Deluxe Room</option>
                  <option value="Single Basic Room">Single Basic Room</option>
                  <option value="Single Economy Room">
                    Single Economy Room
                  </option>
                </select>
                <span id="nameErr"></span>
              </div>

              <div className="input-section">
                <label>Room Type</label>
                <br />
                <select
                  className="input-field room-input-field"
                  id="type"
                  onChange={(e) => {
                    this.setState({ type: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "typeErr",
                      "Please Select a Room Type"
                    );
                  }}>
                  <option value=" " selected disabled>
                    Select a Room Type
                  </option>
                  <option value="Deluxe">Deluxe</option>
                  <option value="Basic">Basic</option>
                  <option value="Economy">Economy</option>
                </select>
                <span id="typeErr"></span>
              </div>

              <div className="input-section">
                <label>Room Capacity</label>
                <br />
                <select
                  className="input-field room-input-field"
                  id="count"
                  onChange={(e) => {
                    this.setState({ maxCount: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "countErr",
                      "Please Select Room Capacity"
                    );
                  }}>
                  <option value=" " selected disabled>
                    Select Capacity
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
                <span id="countErr"></span>
              </div>

              <div className="input-section">
                <label>Room Price (USD)</label>
                <br />
                <input
                  className="input-field room-input-field"
                  id="price"
                  type="number"
                  placeholder="Room Price( 200$-500$  )"
                  min="200"
                  max="500"
                  onChange={(e) => {
                    this.setState({ roomPrice: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "priceErr",
                      "Please Enter Room Price"
                    );
                  }}
                />
                <span id="priceErr"></span>
              </div>

              <div className="input-section">
                <label>Description</label>
                <br />
                <textarea
                  className="input-field room-input-field"
                  id="description"
                  type="text"
                  placeholder="Add Room Details"
                  onChange={(e) => {
                    this.setState({ description: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "desErr",
                      "Please add a Description"
                    );
                  }}
                />
                <span id="desErr"></span>
              </div>
            </div>

            <div className="col second-col">
              <div className="input-section d-flex justify-content-center">
                <label>
                  <input
                    type="file"
                    accept="image/*"
                    className="pro-pic-upload"
                    id="images"
                    onChange={(e) => {
                      this.setState({ images: e.target.files[0] });
                      this.changeImage(e);
                      checkInputOnChange(
                        e.target.files[0],
                        "imagesErr",
                        "Please select an image"
                      );
                    }}
                  />
                  <img
                    src={roomDefault}
                    alt="addRoomImg"
                    className="room-pro-pic"
                  />
                  <span id="imagesErr"></span>
                </label>
              </div>

              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button type="submit" className="Button room-add-btn">
                    Add a Room
                  </button>
                </div>
                <div className="col d-flex justify-content-center">
                  <Button
                    onClick={this.handleRedirect}
                    className="Button room-add-btn">
                    Back to All Rooms
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
