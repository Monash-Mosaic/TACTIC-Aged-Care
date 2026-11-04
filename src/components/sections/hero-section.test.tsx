import { render, screen } from "@testing-library/react";

import { HeroSection } from "@/components/sections/hero-section";
import { hero } from "@/lib/site";

describe("HeroSection", () => {
  it("renders the title, introduction, and actions", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        level: 1,
        name: hero.titleLines.join(" "),
      })
    ).toBeInTheDocument();
    expect(screen.getByText(hero.body)).toBeInTheDocument();

    for (const action of hero.actions) {
      expect(screen.getByRole("link", { name: action.label })).toHaveAttribute("href", action.href);
    }
  });

  it("renders the portrait asset", () => {
    render(<HeroSection />);

    expect(screen.getByRole("img", { name: hero.imageAlt })).toBeInTheDocument();
  });
});
