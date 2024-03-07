import React, { useState } from "react";

//Onchange triggers a function every time the value of the input changes

function EventHandling() {
  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState("Visa");
  const [shipping, setShipping] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange} />
      <p>Name: {name}</p>
      <input value={quantity} onChange={handleQuantityChange} />
      <p>Quantity: {quantity}</p>
      <textarea
        value={comment}
        onChange={handleCommentChange}
        placeholder="Enter delivery instructions"
      >
        {" "}
      </textarea>
      <p> Comment: {comment} </p>
      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="Visa">Visa</option>
        <option value="MasterCard"> Mastercard</option>
        <option value="Discover"> Discover </option>
        <option value="V-Bucks"> V-bucks </option>
      </select>
      <p> Payment: {payment} </p>
      <label>
        <input
          type="radio"
          value="Pick Up"
          checked={shipping === "Pick up"}
          onChange={handleShippingChange}
        />
        Pick Up
      </label>{" "}
      <br></br>
      <label>
        <input
          type="radio"
          value="Delivery"
          checked={shipping === "Delivery"}
          onChange={handleShippingChange}
        />
        Delivery
      </label>
      <p>Shipping: {shipping}</p>
    </div>
  );
}

export default EventHandling;
