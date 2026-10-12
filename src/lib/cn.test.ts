import { cn } from "@/lib/cn";

describe("cn", () => {
  it("joins class names", () => {
    expect(cn("a", "b", "c")).toBe("a b c");
  });

  it("drops empty values", () => {
    expect(cn("a", false, null, undefined, "", "b")).toBe("a b");
  });
});
