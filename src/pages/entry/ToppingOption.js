import { Col, FormCheck, FormGroup } from "react-bootstrap";
import React from "react";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function ToppingOption({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();
  const handleChange = (e) => {
    updateItemCount(name, e.target.checked ? 1 : 0, "toppings");
  };

  return (
    <Col sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img
        style={{ width: "75%" }}
        src={`http:localhost:3030/${imagePath}`}
        alt={`${name} topping`}
      />
      <FormGroup>
        <FormCheck type="checkbox" onChange={handleChange} label={name} />
      </FormGroup>
    </Col>
  );
}
