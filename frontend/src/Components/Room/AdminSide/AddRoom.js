import React, { useState } from "react";
import { addRoom } from "../../../functions/roomFunctions";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const AddRoom = () => {
  const [roomType, setRoomType] = useState('Select a Room Type');
  const [roomPrice, setRoomPrice] = useState();
  const [roomFeatures, setRoomFeatures] = useState('Choose one or more options');
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  
  const onChangeImage = (e) => {
    setImages(e.target.files[0]);
  };

  const handleRedirect = () => {
    window.location.href = "/Rooms(admin)";
  };

  const sendData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("roomType", roomType);
    formData.append("roomPrice", roomPrice);
    formData.append("roomFeatures", roomFeatures);
    formData.append("description", description);
    formData.append("images", images);

    setRoomType('Select a Room Type');
    setRoomPrice("");
    setRoomFeatures('Choose one or more options');
    setDescription("");
    setImages("");

    addRoom(formData);
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center mt-4">Add a Room</h1>

      <div className="container mt-5">
        <Form onSubmit={sendData} method="post" encType="multipart/form-data">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridRoomType">
              <Form.Label>Room Type</Form.Label>
              <Form.Select
                value={roomType}
                defaultValue="Select a Room Type"
                onChange={(e) => {
                  setRoomType(e.target.value);
                }}>
                <option>Select a room type</option>
                <option>Triple Deluxe Room</option>
                <option>Triple Basic Room</option>
                <option>Triple Economy Room</option>
                <option>Double Deluxe Room</option>
                <option>Double Basic Room</option>
                <option>Double Economy Room</option>
                <option>Single Deluxe Room</option>
                <option>Single Basic Room</option>
                <option>Single Economy Room</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridRoomPrice">
              <Form.Label>Room Price (USD)</Form.Label>
              <Form.Control
                value={roomPrice}
                placeholder="Room Price( 200$-500$  )"
                onChange={(e) => {
                  setRoomPrice(e.target.value);
                }}
              />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridRoomFeatures">
            <Form.Label>Room Features</Form.Label>
            <Form.Select
              value={roomFeatures}
              defaultValue="Choose one or more options"
              onChange={(e) => {
                setRoomFeatures(e.target.value);
              }}>
              <option disabled>Choose one or more options</option>
              <option>Conditioned Air</option>
              <option>Mini Bar</option>
              <option>Wi-Fi Connection</option>
              <option>Direct Phone</option>
              <option>Cable Staellite Tv and Movie on demand</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              placeholder="Add Room Details"
              style={{ height: "auto" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>

          <Form.Group controlId="formMainImage" className="mb-3">
            <Form.Label>Main Image</Form.Label>
            <Form.Control type="file" onChange={onChangeImage} />
          </Form.Group>

          <div className="d-grid gap-2 mt-4">
            <Button variant="primary" type="submit" size="lg">
              Create Room
            </Button>
            <Button onClick={() => handleRedirect()} variant="dark" size="lg">
              Back To Main
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default AddRoom;
