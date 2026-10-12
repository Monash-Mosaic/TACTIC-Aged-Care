import { render, screen } from "@testing-library/react";

import { PageIntro } from "@/components/sections/page-intro";

describe("PageIntro", () => {
  it("renders the page title", () => {
    render(<PageIntro title="About Us" />);

    expect(
      screen.getByRole("heading", { level: 1, name: "About Us" }),
    ).toBeInTheDocument();
  });
});
