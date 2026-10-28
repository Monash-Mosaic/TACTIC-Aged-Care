import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { SiteHeader } from "@/components/layout/site-header";

jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}));

describe("SiteHeader", () => {
  it("marks Home as the current page", () => {
    render(<SiteHeader />);

    const homeLinks = screen.getAllByRole("link", { name: "Home" });

    expect(homeLinks.length).toBeGreaterThan(0);
    for (const link of homeLinks) {
      expect(link).toHaveAttribute("aria-current", "page");
    }
  });

  it("opens and closes the mobile menu", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    const menu = document.getElementById("mobile-nav");
    expect(menu).toHaveClass("hidden");

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    expect(menu).toHaveClass("block");
    expect(screen.getByRole("button", { name: "Close menu" })).toHaveAttribute(
      "aria-expanded",
      "true"
    );

    await user.click(screen.getByRole("button", { name: "Close menu" }));

    expect(menu).toHaveClass("hidden");
  });

  it("closes the mobile menu after a link is chosen", async () => {
    const user = userEvent.setup();
    render(<SiteHeader />);

    await user.click(screen.getByRole("button", { name: "Open menu" }));

    const menu = document.getElementById("mobile-nav");
    const about = menu?.querySelector('a[href="/about"]');
    expect(about).toBeInstanceOf(HTMLAnchorElement);

    await user.click(about as HTMLAnchorElement);

    expect(menu).toHaveClass("hidden");
  });
});
