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
            <div className="card taxiCard" key={t._id}>
              <h4>{t.hallName}</h4>
              <img src={t.images} alt="image" className="taxiCardImg" />
              <h6 className="hallTxt">Receiption: {t.receiption}</h6>
              <h6 className="hallTxt">Theatre: {t.theatre}</h6>
              <h6 className="hallTxt">Banquet: {t.banquet}</h6>
              <h6 className="hallTxt">Classroom: {t.classroom}</h6>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <Link
                    to={{ pathname: `/updateHall/${t._id}`, param1: "Par1" }}
                    className="Button updateBtn">
                    UPDATE
                  </Link>
                </div>
                <div className="col d-flex justify-content-center">
                  <button
                    className="Button deleteBtn"
                    onClick={() => this.DeleteHallFunc(t._id)}>
                    DELETE
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
          <h1 className="text-center mt-4">Halls List</h1>
        </div>
        <div className="text-end mt-5">
          <Button className="AddNwHmBtn" onClick={this.handleRedirect} variant="outline-dark">Add New Hall</Button>
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
