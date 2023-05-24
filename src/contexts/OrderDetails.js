import React, { useContext, useState, createContext } from "react";
import { pricePerItem } from "../constants";

const OrderDetails = createContext();

export function useOrderDetails() {
  const contextValue = useContext(OrderDetails);
  if (!contextValue) {
    throw new Error(
      "use order details must be called from within an order detail provider"
    );
  }

  return contextValue;
}

export default function OrderDetailProvider(props) {
  const [optionCounts, setOptionCounts] = useState({
    scoops: {},
    toppings: {},
  });

  function updateItemCount(itemName, newItemCount, optionType) {
    const newOptionsCounts = { ...optionCounts };

    newOptionsCounts[optionType][itemName] = newItemCount;
    setOptionCounts(newOptionsCounts);
  }
  function resetOrder() {
    setOptionCounts({ scoops: {}, toppings: {} });
  }
  function calculateTotal(optionType) {
    const countsArray = Object.values(optionCounts[optionType]);
    const totalCount = countsArray.reduce((total, value) => total + value, 0);
    return totalCount * pricePerItem[optionType];
  }
  const totals = {
    scoops: calculateTotal("scoops"),
    toppings: calculateTotal("toppings"),
  };

  const value = { optionCounts, totals, updateItemCount, resetOrder };
  return <OrderDetails.Provider value={value} {...props} />;
}
