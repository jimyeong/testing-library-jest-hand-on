import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";

import "styled-components";
import AsyncPage from "./pages/AsyncPage";
import ScoopOption from "./pages/entry/ScoopOption";
import Options from "./pages/entry/Options";
import OrderDetailProvider from "./contexts/OrderDetails";
import OrderEntry from "./pages/entry/OptionEntry";

function App() {
  const [orderPhase, setOrderPhase] = useState("inProgress");

  let Component = OrderEntry;
  switch (orderPhase) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      break;
    default:
      break;
  }

  return (
    <div className="App" style={{ height: "100vh", backgroundColor: "green" }}>
      <Container>
        <OrderDetailProvider>
          <Container>{<Component setOrderPhase={setOrderPhase} />}</Container>
        </OrderDetailProvider>
      </Container>
    </div>
  );
}

export default App;
