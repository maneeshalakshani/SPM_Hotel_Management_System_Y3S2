import React, { useState, useEffect } from "react";
import {NavLink} from "react-router-dom";
import axios from 'axios'

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


import room from "../../../images/Common/room.jpg";

const ViewAllRooms = () => {

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8082/rooms/').then((res) => {
      console.log(res.data)
      setRooms(res.data)
    }).catch((err) => {
        console.log('Error: ', err)
    }) 
  }, [])
  

  return (
    <div className="container mt-2">
      <h1 className="text-center mt-4">Rooms List</h1>

      <div className="text-end mt-5">
        <Button variant="outline-dark"><NavLink to="/addRoom">+ Add New Room</NavLink></Button>
      </div>

      <div className="row d-flex justify-content-start align-items-center mt-5">
        <Card style={{ width: "17rem", height: "17rem" }} className="mb-3">
          <Card.Img variant="top"className="mt-3" />
          <Card.Body className="text-center">
            <Card.Title className="mt-1">Triple Deluxe Room</Card.Title>
            <Button variant="warning" className="m-3">
              Update
            </Button>
            <Button variant="danger" className="m-3">
              Delete
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ViewAllRooms;
