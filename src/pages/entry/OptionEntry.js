import ScoopOption from "./ScoopOption";
import ToppingOption from "./ToppingOption";
import Options from "./Options";
import React from "react";
import { Button } from "react-bootstrap";
import { useOrderDetails } from "../../contexts/OrderDetails";
import { formatCurrency } from "../../utilities";
import { pricePerItem } from "../../constants";

export default function OptionEntry({ setOrderPhase }) {
  const { totals } = useOrderDetails();
  const orderDisabled = totals.scoops == 0;
  return (
    <div>
      <Options optionType="scoops" />
      <Options optionType="toppings" />
      <h2>Grand Total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button disabled={orderDisabled} onClick={() => setOrderPhase("review")}>
        Order Sundae!
      </Button>
    </div>
  );
}
