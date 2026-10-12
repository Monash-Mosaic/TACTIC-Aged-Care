import { existsSync } from "node:fs";
import path from "node:path";

import { hero, mainNav, site, toolLink } from "@/lib/site";

function pageFileForHref(href: string) {
  if (href === "/") {
    return path.join(process.cwd(), "src/app/page.tsx");
  }

  return path.join(process.cwd(), "src/app", href.slice(1), "page.tsx");
}

describe("site", () => {
  it("names the product", () => {
    expect(site.name).toBe("TACTIC");
    expect(site.description.length).toBeGreaterThan(0);
  });

  it("points every nav item at a real page", () => {
    const items = [...mainNav, toolLink];
    const hrefs = items.map((item) => item.href);

    expect(new Set(hrefs).size).toBe(hrefs.length);

    for (const item of items) {
      expect(item.label.length).toBeGreaterThan(0);
      expect(item.href.startsWith("/")).toBe(true);
      expect(existsSync(pageFileForHref(item.href))).toBe(true);
    }
  });

  it("gives the hero two title lines and in-site actions", () => {
    expect(hero.titleLines).toHaveLength(2);
    expect(hero.imageAlt.length).toBeGreaterThan(0);

    for (const action of hero.actions) {
      expect(action.href.startsWith("/")).toBe(true);
      expect(existsSync(pageFileForHref(action.href))).toBe(true);
    }
  });
});
