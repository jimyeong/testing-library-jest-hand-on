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
      <h1>Design Your Sundae!</h1>
      <h3>Scoops</h3>
      <h3>${pricePerItem.scoops} each</h3>
      <h3>Scoops total {formatCurrency(totals.scoops)}</h3>

      <Options optionType="scoops" />
      <br />
      <br />

      <h3>Toppings</h3>
      <h3>${pricePerItem.toppings} each</h3>
      <h3>Toppings total {formatCurrency(totals.toppings)}</h3>
      <Options optionType="toppings" />
      <br />
      <br />
      <h2>Grand Total: {formatCurrency(totals.scoops + totals.toppings)}</h2>
      <Button
        disabled={orderDisabled}
        onClick={() => {
          setOrderPhase("review");
        }}
      >
        Order Sundae!
      </Button>
    </div>
  );
}
