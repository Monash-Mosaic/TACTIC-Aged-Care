import { render, screen } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("Button", () => {
  it("renders a link to the given href", () => {
    render(<Button href="/about">About Us</Button>);

    expect(screen.getByRole("link", { name: "About Us" })).toHaveAttribute("href", "/about");
  });

  it("marks the current page", () => {
    render(
      <Button href="/" current>
        Home
      </Button>
    );

    expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("aria-current", "page");
  });

  it("shows an arrow when requested", () => {
    const { container } = render(
      <Button href="/tool" showArrow>
        Get the Tool
      </Button>
    );

    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
