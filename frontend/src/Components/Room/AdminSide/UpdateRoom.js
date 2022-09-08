// import React, { useEffect, useState } from "react";
// import {NavLink} from "react-router-dom";
// import { updateRoom } from "../../../functions/roomFunctions";

// import Button from "react-bootstrap/Button";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import Row from "react-bootstrap/Row";
// import axios from "axios";

// const UpdateRoom = () => {

//   const [roomType, setRoomType] = useState("");
//   const [roomPrice, setRoomPrice] = useState();
//   const [roomFeatures, setRoomFeatures] = useState("");
//   const [description, setDescription] = useState("");
//   const [images, setImages] = useState("");

//   useEffect(() => {
//     axios.get('http://localhost:8082/rooms/')
//   }, [])
  

//   return (
//     <div className="container-md mt-3">
//       <h1 className="text-center mt-4">Update Room Details</h1>

//       <div className="container mt-5">
//         <Form>
//           <Row className="mb-3">
//             <Form.Group as={Col} controlId="formGridRoomType">
//               <Form.Label>Room Type</Form.Label>
//               <Form.Select defaultValue="Select a Room Type">
//                 <option>Select a Room Type</option>
//                 <option>...</option>
//               </Form.Select>
//             </Form.Group>

//             <Form.Group as={Col} controlId="formGridRoomPrice">
//               <Form.Label>Room Price</Form.Label>
//               <Form.Control placeholder="Room Price" />
//             </Form.Group>
//           </Row>

//           <Form.Group className="mb-3" controlId="formGridRoomFeatures">
//             <Form.Label>Room Features</Form.Label>
//             <Form.Select defaultValue="Select a Room Type">
//               <option>Choose one or more options</option>
//               <option>...</option>
//             </Form.Select>
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formGridDescription">
//             <Form.Label>Description</Form.Label>
//             <Form.Control
//               as="textarea"
//               placeholder="Add Room Details"
//               style={{ height: "auto" }}
//             />
//           </Form.Group>

//           <Form.Group controlId="formMainImage" className="mb-3">
//             <Form.Label>Main Image</Form.Label>
//             <Form.Control type="file" />
//           </Form.Group>

//           <div className="d-grid gap-2 mt-4">
//             <Button variant="primary" size="lg">
//               Update Room
//             </Button>
//             <Button variant="dark" size="lg">
//               <NavLink to="/admin-viewAllRooms">Back To Main</NavLink>
//             </Button>
//           </div>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default UpdateRoom;
