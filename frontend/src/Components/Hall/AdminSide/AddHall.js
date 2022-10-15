import React, { Component } from "react";

import hallDefault from "../../../images/Hall_Images/uploads/Hall1.jpg";
import { addHall} from "../../../functions/HallFunctions";
import Button from "react-bootstrap/esm/Button";
import Row from "react-bootstrap/Row";
import {
  hallValidity,
  checkInputOnChange,
} from "../../../functions/Validation/HallValidation";
export default class AddHall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: hallDefault,
      hallName: "",
      description: "",
      receiption: 0,
      theatre: 0,
      banquet: 0,
      classroom: 0,
      dimension: 0,
      area: 0,
      ceiling: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeImage(e) {
    let reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event) => {
      this.setState({ hallDefault: event.target.result });
      hallDefault = event.target.result;
    };
  }

  checkInputs() {
    let hallName = document.getElementById("hallName").value;
    let description = document.getElementById("description").value;
    let receiption = document.getElementById("receiption").value;
    let theatre = document.getElementById("theatre").value;
    let banquet = document.getElementById("banquet").value;
    let classroom = document.getElementById("classroom").value;
    let dimension = document.getElementById("dimension").value;
    let area = document.getElementById("area").value;
    let ceiling = document.getElementById("ceiling").value;
    let images = document.getElementById("images").value;

    let nameErr = document.getElementById("nameErr");
    let desErr = document.getElementById("desErr");
    let imagesErr = document.getElementById("imagesErr");

    var vInput = { hallName, receiption, theatre, description, banquet,classroom, dimension, area, ceiling, images };
    var errInput = { nameErr, desErr, imagesErr };

    return hallValidity(vInput, errInput, null);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { images, hallName, description, receiption, theatre, banquet, classroom, dimension, area, ceiling } =
      this.state;

    let doSubmit = this.checkInputs();

    if (doSubmit === true) {
      const formData = new FormData();
      formData.append("images", images);
      formData.append("hallName", hallName);
      formData.append("receiption", receiption);
      formData.append("theatre", theatre);
      formData.append("description", description);
      formData.append("banquet", banquet);
      formData.append("classroom", classroom);
      formData.append("dimension", dimension);
      formData.append("area", area);
      formData.append("ceiling", ceiling);

      addHall(formData);
    }
  }

  handleRedirect() {
    window.location.href = "/admin-viewAllHalls"
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row roomMenu">
            <h1>Add a Hall</h1>
          </div>
          <form
            className="row"
            onSubmit={this.handleSubmit}
            method="post"
            encType="multipart/form-data">
            <div className="col">
            <div className="input-section">
                <label>Hall Name</label>
                <br />
                <input
                  className="input-field room-input-field"
                  id="hallName"
                  type="text"
                  placeholder="Enter Hall Name"
                  onChange={(e) => {
                    this.setState({ hallName: e.target.value });
                    checkInputOnChange(
                      e.target.value,
                      "nameErr",
                      "Please Enter the Hall Name"
                    );
                  }}
                />
                <span id="nameErr"></span>
              </div>

              <div className="input-section">
                <label>Description</label>
                <br />
                <input
                  className="input-field room-input-field"
                  id="description"
                  type="text"
                  placeholder="Add Hall Details"
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

              <Row className="mb-3">
                <div className="input-section">
                    <label>Receiption</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="receiption"
                    type="number"
                    placeholder="No. of Pax"
                    onChange={(e) => {
                        this.setState({ receiption: e.target.value });
                    }}
                    />

                </div>
                <div className="input-section">
                    <label>Theatre</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="theatre"
                    type="number"
                    placeholder="No. of Pax"
                    onChange={(e) => {
                        this.setState({ theatre: e.target.value });
                    }}
                    />
                </div>
                <div className="input-section">
                    <label>Banquet</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="banquet"
                    type="number"
                    placeholder="No. of Pax"
                    onChange={(e) => {
                        this.setState({ banquet: e.target.value });
                    }}
                    />

                </div>
                <div className="input-section">
                    <label>Classroom</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="classroom"
                    type="number"
                    placeholder="No. of Pax"
                    onChange={(e) => {
                        this.setState({ classroom: e.target.value });
                    }}
                    />
                </div>
              </Row>

              <div className="row">
                <div className="input-section">
                    <label>Dimension(m)</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="dimension"
                    type="number"
                    placeholder=""
                    onChange={(e) => {
                        this.setState({ dimension: e.target.value });
                    }}
                    />

                </div>
                <div className="input-section">
                    <label>Area(sqm)</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="area"
                    type="number"
                    placeholder=""
                    onChange={(e) => {
                        this.setState({ area: e.target.value });
                    }}
                    />
                </div>
                <div className="input-section">
                    <label>Ceiling(m)</label>
                    <br />
                    <input
                    className="input-field room-input-field"
                    id="ceiling"
                    type="number"
                    placeholder=""
                    onChange={(e) => {
                        this.setState({ ceiling: e.target.value });
                    }}
                    />
                </div>
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
                    src={hallDefault}
                    alt="addRoomImg"
                    className="room-pro-pic"
                  />
                  <span id="imagesErr"></span>
                </label>
              </div>

              <div className="row">
                <div className="col d-flex justify-content-center">
                <button type="submit" className="Button room-add-btn">
                  Create a Hall
                </button>
                </div>
                <div className="col d-flex justify-content-center">
                  <Button onClick={this.handleRedirect} className="Button room-add-btn">
                    Back to All Halls
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
