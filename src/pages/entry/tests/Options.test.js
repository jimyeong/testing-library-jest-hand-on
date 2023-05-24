// import { screen } from "@testing-library/react";
import Options from "../Options";
import React from "react";
import OrderDetailProvider from "../../../contexts/OrderDetails";
import { render, screen } from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import OptionEntry from "../OptionEntry";
import { act } from "react-dom/test-utils";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />); // you should wrap this component with the Context
  const scoopsImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopsImages).toHaveLength(3);
  // confirm image texts
  /**
   * 
   * [
          { name: "Chocolate", imagePath: "/images/chocolate.png" },
          { name: "Vanilla", imagePath: "/images/vanilla.png" },
          { name: "MintChip", imagePath: "/images/mintchip.png" },
        ]
   */
  // const altTexts = scoopsImages.map((item, key) => item.alt);
  const altTexts = scoopsImages.map((item, key) => item.alt);
  expect(altTexts).toEqual([
    "Chocolate scoop",
    "Vanilla scoop",
    "MintChip scoop",
  ]);
});

test("display images for each topping option from server", async () => {
  // image text check up
  render(<Options optionType="toppings" />);
  const toppings = await screen.findAllByRole("img", { name: /topping$/i });
  expect(toppings).toHaveLength(3);

  // alt name checkup

  /**
   * 
    { name: "Cherries", imagePath: "/images/cherries.png" },
    { name: "M&Ms", imagePath: "/images/m-and-ms.png" },
    { name: "Hot fudge", imagePath: "/images/hot-fudge.png" }
   */
  const toppingAlts = toppings.map((item, key) => item.alt);
  expect(toppingAlts).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});

test("disable input when user type in invalid values", async () => {
  render(<Options optionType="scoops" />);
  // render(<OptionEntry />);
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  const scoopsSubTotal = screen.getByText("Scoops total: $0.00");
  await act(() => {
    userEvent.clear(vanillaInput);
    userEvent.type(vanillaInput, "2.5");
  });
  expect(scoopsSubTotal).toHaveTextContent("$0.00");
});
