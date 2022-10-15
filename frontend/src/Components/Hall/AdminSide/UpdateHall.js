import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { updateHall, getHall } from "../../../functions/HallFunctions";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const UpdateHall = () => {
    const [hallName, setHallName] = useState("");
    const [description, setDescription] = useState("");
    const [receiption, setReceiption] = useState();
    const [theatre, setTheatre] = useState();
    const [banquet, setBanquet] = useState();
    const [classroom, setClassroom] = useState();
    const [dimension, setDimension] = useState();
    const [area, setArea] = useState();
    const [ceiling, setCeiling] = useState();
    const [images, setImages] = useState("");


  const {id} = useParams();

  const handleRedirect = () => {
    window.location.href = "/admin-viewAllHalls"
  }

  const getHalls = async () => {
    await getHall(id).then((res) => {
        setHallName(res.hallName);
        setDescription(res.description)
        setReceiption(res.receiption)
        setTheatre(res.theatre)
        setBanquet(res.banquet)
        setClassroom(res.classroom)
        setDimension(res.dimension)
        setArea(res.area)
        setCeiling(res.ceiling)
        setImages(res.images)
    }).catch((e) => {console.error(e.message)})
  }

  useEffect(() => {
    getHalls();
  }, []);
  

  const onChangeImage = (e) => {
    setImages(e.target.files[0]);
  }

  const sendData = (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("hallName", hallName);
    formData.append("description", description);
    formData.append("receiption", receiption);
    formData.append("theatre", theatre);
    formData.append("banquet", banquet);
    formData.append("classroom", classroom);
    formData.append("dimension", dimension);
    formData.append("area", area);
    formData.append("ceiling", ceiling);
    formData.append("images", images);

    setHallName("");
    setDescription("");
    setReceiption("");
    setTheatre("");
    setBanquet("");
    setClassroom("");
    setDimension("");
    setArea("");
    setCeiling("");
    setImages("");
    console.log(hallName);
    updateHall(formData);
  };

  return (
    <div className="container mt-3">
      <h1 className="text-center mt-4">Update Hall</h1>

      <div className="container mt-5">
        <Form onSubmit={sendData} method="post" encType="multipart/form-data">
            <Form.Group as={Col} controlId="formGridHallName">
              <Form.Label>Hall Name</Form.Label>
              <Form.Control
                value={hallName}
                placeholder="Enter Hall Name"
                onChange={(e) => {
                  setHallName(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              value={description}
              placeholder="Add Hall Details"
              style={{ height: "auto" }}
              onChange={(e) => {
                setDescription(e.target.value);
              }}
            />
          </Form.Group>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formReceiption">
              <Form.Label>Receiption</Form.Label>
              <Form.Control
                type="number"
                value={receiption}
                placeholder="No. of Pax"
                onChange={(e) => {
                  setReceiption(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formTheatre">
              <Form.Label>Theatre</Form.Label>
              <Form.Control
                type="number"
                value={theatre}
                placeholder="No. of Pax"
                onChange={(e) => {
                  setTheatre(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formBanquet">
              <Form.Label>Banquet</Form.Label>
              <Form.Control
                type="number"
                value={banquet}
                placeholder="No. of Pax"
                onChange={(e) => {
                  setBanquet(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formClassroom">
              <Form.Label>Classroom</Form.Label>
              <Form.Control
                type="number"
                value={classroom}
                placeholder="No. of Pax"
                onChange={(e) => {
                  setClassroom(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formDimension">
              <Form.Label>Dimension(m)</Form.Label>
              <Form.Control
                type="number"
                value={dimension}
                placeholder=""
                onChange={(e) => {
                  setDimension(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formArea">
              <Form.Label>Area(sqm)</Form.Label>
              <Form.Control
                type="number"
                value={area}
                placeholder=""
                onChange={(e) => {
                  setArea(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formCeiling">
              <Form.Label>Ceiling(m)</Form.Label>
              <Form.Control
                type="number"
                value={ceiling}
                placeholder=""
                onChange={(e) => {
                  setCeiling(e.target.value);
                }}
              />
            </Form.Group>
          </Row>
          <Form.Group controlId="formHallImage" className="mb-3">
            <Form.Label>Hall Image</Form.Label>
            <Form.Control type="file" onChange={onChangeImage} />
          </Form.Group>

          <div className="d-grid gap-2 mt-4">
            <Button variant="primary" type="submit" size="lg">
              Update Hall
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


export default UpdateHall;
