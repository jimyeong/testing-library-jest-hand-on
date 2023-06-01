import { render, screen, act } from "../../../test-utils/testing-library-utils";
import React from "react";
import userEvent from "@testing-library/user-event";
import Options from "../Options";

test("update scoop subtotal when scoops change", async () => {
  render(<Options optionType="scoops" />);
  const scoopTotal = screen.getByText("Scoops total: $", { exact: false });
  expect(scoopTotal).toHaveTextContent("0.00");

  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await act(async () => {
    await userEvent.clear(vanillaInput);
    await userEvent.type(vanillaInput, "2");
  });

  expect(scoopTotal).toHaveTextContent("4.00");

  const chocholateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  await act(async () => {
    await userEvent.clear(chocholateInput);
    await userEvent.type(chocholateInput, "3");
  });
  expect(scoopTotal).toHaveTextContent("10.00");

  // userEvent.click("spinbutton", {name: "Vanilla"})
});
