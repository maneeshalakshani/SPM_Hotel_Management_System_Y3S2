import React, { Component, useEffect, useState } from "react";
import { getHall } from "../../../functions/HallFunctions";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";

const CustomerViewHallDetails = () => {
  const [hallName, setHallName] = useState("");
  const [description, setDesc] = useState("");
  const [receiption, setReceiption] = useState(0);
  const [theatre, setTheatre] = useState(0);
  const [banquet, setBanquet] = useState(0);
  const [classroom, setClassroom] = useState(0);
  const [dimension, setDimension] = useState(0);
  const [area, setArea] = useState(0);
  const [ceiling, setceiling] = useState(0);

  const [image, setImage] = useState("");

//   const [inDate, setInDate] = useState({});


  const { id } = useParams();

  useEffect(() => {
    getHall(id).then((res) => {
        setHallName(res.hallName);
        setDesc(res.description);
        setReceiption(res.receiption);
        setTheatre(res.theatre);
        setBanquet(res.banquet);
        setClassroom(res.classroom);
        setDimension(res.dimension);
        setArea(res.area);
        setceiling(res.ceiling);
        setImage(res.images);
    });
  }, []);

  const handleRedirect = () => {
    window.location.href = "/customer-viewAllHalls";
  };

  return (
    <div className="container">
      <div>
        <img src={image} className="hallsingleImg" />
      </div>

      <hr className="room-hr" />

      <div className="row">
        <div className="col hallfeatures">
          <h3>{hallName}</h3>
          <br />
          <p>{description}</p>
          
        </div>

        <div className="col dlsform">
          <form>
          <h4>CAPACITY & SETUP STYLE</h4>
            <div className="row">
                <div className="col">
                    <table id="halltable">
                        <tr>
                            <th className="halltable-th">Receiption</th>
                            <th className="halltable-th">Theatre</th>
                            <th className="halltable-th">Banquet</th>
                            <th className="halltable-th">Classroom</th>
                        </tr>
                        <tr>
                            <td className="halltable-td">{receiption}.pax</td>
                            <td className="halltable-td">{theatre}.pax </td>
                            <td className="halltable-td">{banquet}.pax </td>
                            <td className="halltable-td">{classroom}.pax</td>
                        </tr>
                    </table>
                </div>
                <br/>

                <div className="col">
                    <table id="halltable">
                        <tr>
                            <th className="halltable-th">Dimension</th>
                            <th className="halltable-th">Area</th>
                            <th className="halltable-th">Ceiling</th>
                        </tr>
                        <tr>
                            <td className="halltable-td">{dimension}m</td>
                            <td className="halltable-td">{area}sq </td>
                            <td className="halltable-td">{ceiling}m </td>
                        </tr>
                    </table>
                </div>
            </div>
            {/* <div className="input-section">
              <label>Check-In</label>
              <br />
              <input
              onChange={(e) => setInDate(e.target.valueAsDate)}
                className="input-field hallbook-input-field"
                id="check-In"
                type="date"
              />
            </div> */}
            
            <div className="row">
                <div>
                  <Button variant="success" type="submit" className="Button hall-book-btn">
                    Book Now
                  </Button>
                </div>
                <div>
                  <Button variant="dark"
                  onClick={() => handleRedirect()}
                    className="Button back-to-halls-btn">
                    Back to Halls
                  </Button>
                </div>
              </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default CustomerViewHallDetails;
