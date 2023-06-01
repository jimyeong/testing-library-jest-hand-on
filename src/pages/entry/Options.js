import React, { useState, useEffect } from "react";
import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import AlertBanner from "../common/AlertBanner";
import { formatCurrency } from "../../utilities";
import { pricePerItem } from "../../constants";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(false);
  const { totals } = useOrderDetails();
  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOption;
  const title = optionType[0].toUpperCase() + optionType.slice(1).toLowerCase();

  const execAsync = async () => {
    try {
      const res = await axios.get(`http://localhost:3030/${optionType}`);
      setItems(res.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    execAsync();
  }, []);

  const optionItems = items.map((item, i) => {
    return (
      <Col key={i}>
        <ItemComponent key={i} name={item.name} imagePath={item.imagePath} />
      </Col>
    );
  });
  if (error) return <AlertBanner />;

  return (
    <>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total: {formatCurrency(totals[optionType])}
      </p>
      <Row>{optionItems}</Row>
    </>
  );
}
