import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText } = render(<Root />);
    expect(
      getByText(/My amazing component from app2 is mounted! Hello world/i),
    ).toBeInTheDocument();
  });
});
