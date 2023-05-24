import { render } from "@testing-library/react";
import OrderDetailProvider from "../contexts/OrderDetails";

const renderWithContext = (ui, options) => {
  return render(ui, { wrapper: OrderDetailProvider, ...options });
};

export { renderWithContext as render };
export * from "@testing-library/react";
