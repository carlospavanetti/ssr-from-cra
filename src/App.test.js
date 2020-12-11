import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello component", () => {
  render(<App />);
  const helloElement = screen.getByText(/Hello, Tixia/i);
  expect(helloElement).toBeInTheDocument();
});
