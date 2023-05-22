import { render, screen } from "@testing-library/react";
import Options from "../Options";
import React from "react";

test("async test", async () => {
  render(<Options optionType="scoops" />);
  const title = await screen.findByRole("heading", { name: /title/i });
  expect(title).toBeInTheDocument();
});
