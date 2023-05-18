import React from "react";
import { screen, render, waitFor } from "@testing-library/react";
import AsyncPage from "../AsyncPage";

test("asnyc test", async () => {
  render(<AsyncPage />);

  const ren = await screen.findByText(/rendered/i); // find- method for asynctask
  expect(ren).toBeInTheDocument();
  // await waitFor(async () => {});
});
