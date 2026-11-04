"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { cn } from "@/lib/cn";
import { mainNav, toolLink } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <header className="bg-header text-white">
      <div className="mx-auto flex h-[95px] w-full max-w-[1440px] items-center justify-between gap-6 px-6 sm:px-12">
        <Logo />

        <div className="hidden items-center lg:flex">
          <nav aria-label="Primary" className="flex items-center gap-5">
            {mainNav.map((item) => {
              const current = pathname === item.href;

              return (
                <Button
                  key={item.href}
                  href={item.href}
                  variant="ghost"
                  current={current}
                  className={cn(
                    "relative h-10 px-1 text-[13px] after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white after:transition-transform",
                    current ? "after:scale-x-100" : "after:scale-x-0"
                  )}
                >
                  {item.label}
                </Button>
              );
            })}
          </nav>
          <Button
            href={toolLink.href}
            variant="outline"
            showArrow
            current={pathname === toolLink.href}
            className="ml-7 h-12 px-6 text-[13px]"
          >
            {toolLink.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-white/80 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="flex w-4 flex-col gap-1" aria-hidden="true">
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
            <span className="h-px w-full bg-white" />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={cn("border-t border-white/15 bg-header lg:hidden", open ? "block" : "hidden")}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex w-full max-w-[1440px] flex-col gap-2 px-6 py-4 sm:px-12"
        >
          {mainNav.map((item) => {
            const current = pathname === item.href;

            return (
              <Button
                key={item.href}
                href={item.href}
                variant={current ? "outline" : "ghost"}
                current={current}
                onClick={closeMenu}
                className="h-11 justify-start px-3.5"
              >
                {item.label}
              </Button>
            );
          })}
          <Button
            href={toolLink.href}
            variant="outline"
            showArrow
            current={pathname === toolLink.href}
            onClick={closeMenu}
            className="h-11 justify-start px-3.5"
          >
            {toolLink.label}
          </Button>
        </nav>
      </div>
    </header>
  );
}
