import React, { Component, useEffect, useState } from "react";
import { addRmBooking, getRoom } from "../../../functions/roomFunctions";
import Button from "react-bootstrap/esm/Button";
import { useParams } from "react-router-dom";
//import StripeCheckout from "react-stripe-checkout";

const CustomerViewRoomDetails = () => {
  const [roomName, setRoomName] = useState("");
  const [type, setType] = useState("");
  const [maxCount, setMaxCount] = useState(0);
  const [roomPrice, setRoomPrice] = useState(0);
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState("");

  const [inDate, setInDate] = useState({});
  const [outDate, setOutDate] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(((outDate - inDate) / (1000 * 3600 * 24)) * roomPrice);
  }, [inDate, outDate]);

  const { id } = useParams();

  useEffect(() => {
    getRoom(id).then((res) => {
      setRoomName(res.roomName);
      setType(res.type);
      setMaxCount(res.maxCount);
      setRoomPrice(res.roomPrice);
      setDesc(res.description);
      setImage(res.images);
    });
  }, []);

  const onSubmit = () => {
    const booking = {
      roomName: roomName,
      type: type,
      roomPrice: roomPrice,
      checkIn: inDate,
      checkOut: outDate,
      totalAmount: total,
    };

    addRmBooking(booking);
  };

  const handleRedirect = () => {
    window.location.href = "/rooms";
  };

  // const onToken = (token) => {
  //   console.log(token)
  // }

  return (
    <div className="container">
      <div>
        <img src={image} className="singleImg" />
      </div>

      <hr className="room-hr" />

      <div className="row">
        <div className="col features">
          <h4>{roomName}</h4>
          <br />
          <p>{desc}</p>
        </div>

        <div className="col dlsform">
          <form onSubmit={() => onSubmit()}>
            <h6>Room Type : {type}</h6>
            <h6>Total Adults : {maxCount} </h6>
            <h6>Price per Day : {roomPrice}$ </h6>

            <div className="input-section">
              <label>Check-In</label>
              <br />
              <input
                onChange={(e) => setInDate(e.target.valueAsDate)}
                className="input-field roomBook-input-field"
                id="check-In"
                type="date"
              />
            </div>

            <div className="input-section">
              <label>Check-Out</label>
              <br />
              <input
                onChange={(e) => setOutDate(e.target.valueAsDate)}
                className="input-field roomBook-input-field"
                id="check-In"
                type="date"
              />
            </div>
            <div className="input-section">
              <p>{isNaN(total) ? "" : `Total Amount =  ${total}$`}</p>
            </div>

            <div className="row">
              {/* <StripeCheckout
                token={onToken}
                stripeKey="pk_test_51Lt9SLSCZMGwFtmx4Zg6x9kkq08ZZLZ7q4K8sj3JnSpe371roAN6rDFkPLQYtYshUY9NEJhoZd4LaLZf5NFUnTxC002jWepfUA"
              /> */}
              <div>
                <Button
                  variant="success"
                  type="submit"
                  className="Button room-book-btn">
                  Book Now
                </Button>
              </div>
              <div>
                <Button
                  // disabled = {isNaN(total)}
                  variant="dark"
                  onClick={() => handleRedirect()}
                  className="Button back-to-rooms-btn">
                  Back to Rooms
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <table hidden>
          <tr>
            <td>Room Name</td>
            <td>{roomName}</td>
          </tr>
          <tr>
            <td>Room Type</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Price Per Day</td>
            <td>{roomPrice}</td>
          </tr>
          <tr>
            <td>Check-In Date</td>
            <td>{new Date(inDate).toDateString()}</td>
          </tr>
          <tr>
            <td>Check-Out Date</td>
            <td>{new Date(outDate).toDateString()}</td>
          </tr>
          <tr>
            <td>Total Amount</td>
            <td>{total}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default CustomerViewRoomDetails;
