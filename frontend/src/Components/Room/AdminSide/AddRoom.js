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
      roomType: "",
      roomPrice: 0,
      roomFeatures: "",
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
    let type = this.state.roomType;
    let price = document.getElementById("price").value;
    let features = this.state.features;
    let description = document.getElementById("description").value;
    let images = document.getElementById("images").value;

    let typeErr = document.getElementById("typeErr");
    let priceErr = document.getElementById("priceErr");
    let ftrErr = document.getElementById("ftrErr");
    let desErr = document.getElementById("desErr");
    let imagesErr = document.getElementById("imagesErr");

    var vInput = { type, price, features, description, images };
    var errInput = { typeErr, priceErr, ftrErr, desErr, imagesErr };

    return roomValidity(vInput, errInput, null);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { images, roomType, roomPrice, roomFeatures, description } =
      this.state;

    let doSubmit = this.checkInputs();

    if (doSubmit === true) {
      const formData = new FormData();
      formData.append("images", images);
      formData.append("roomType", roomType);
      formData.append("roomPrice", roomPrice);
      formData.append("roomFeatures", roomFeatures);
      formData.append("description", description);

      addRoom(formData);
    }
  }

  handleRedirect() {
    window.location.href = "/allRooms"
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
                <label>Room Type</label>
                <br />
                <select
                  className="input-field room-input-field"
                  id="type"
                  onChange={(e) => {
                    this.setState({ roomType: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "typeErr",
                      "Please Select a Room Type"
                    );
                  }}>
                  <option value=" " defaultValue disabled>
                    Select a room type
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
                <span id="typeErr"></span>
              </div>

              <div className="input-section">
                <label>Room Price (USD)</label>
                <br />
                <input
                  className="input-field room-input-field"
                  id="price"
                  type="number"
                  placeholder="Room Price( 200$-500$  )"
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
                <label>Room Features</label>
                <br />
                <select
                  className="input-field room-input-field"
                  id="features"
                  onChange={(e) => {
                    this.setState({ roomFeatures: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "ftrErr",
                      "Please Select Room Features"
                    );
                  }}>
                  <option value=" " defaultValue disabled>
                    Choose one or more options
                  </option>
                  <option value="Triple Deluxe Room">Conditioned Air</option>
                  <option value="Triple Basic Room">Mini Bar</option>
                  <option value="Triple Economy Room">Wi-Fi Connection</option>
                  <option value="Double Deluxe Room">Direct Phone</option>
                  <option value="Double Basic Room">
                    Cable Staellite Tv and Movie on demand
                  </option>
                </select>
                <span id="ftrErr"></span>
              </div>

              <div className="input-section">
                <label>Description</label>
                <br />
                <input
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
                  <Button onClick={this.handleRedirect} className="Button room-add-btn">
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
