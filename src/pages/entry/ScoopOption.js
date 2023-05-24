import React, { useState } from "react";
import { Col, FormGroup, FormLabel, Row, FormControl } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function ScoopOption({ name, imagePath }) {
  const { updateItemCount, totals, optionCounts } = useOrderDetails();
  const [isValid, setIsValid] = useState(true);

  const onHandleChange = (e) => {
    const currentValue = e.target.value;
    const currentValueFloat = parseFloat(currentValue);
    const valueValid =
      0 <= currentValueFloat &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) == currentValueFloat;

    setIsValid(valueValid);

    const newValue = valueValid ? parseInt(currentValue) : 0;
    updateItemCount(name, newValue, "scoops");
  };
  return (
    <Col xs={12} sm={6} md={4} lg={3} style={{ textAlign: "center" }}>
      <img style={{ width: "75%" }} src={imagePath} alt={`${name} scoop`} />
      <FormGroup>
        <FormLabel column xs={6} style={{ textAlign: "right" }}>
          {name}
          <Col xs={5} style={{ textAlign: "left" }}>
            <FormControl
              type="number"
              value={optionCounts.scoops[name] ? optionCounts.scoops[name] : 0}
              onChange={onHandleChange}
              isInvalid={isValid}
            />
          </Col>
        </FormLabel>
      </FormGroup>
    </Col>
  );
}
