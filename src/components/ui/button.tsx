import Link from "next/link";

import { cn } from "@/lib/cn";

type ButtonVariant = "solid" | "outline" | "ghost";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  showArrow?: boolean;
  current?: boolean;
  className?: string;
  onClick?: () => void;
};

const variants: Record<ButtonVariant, string> = {
  solid: "border border-ink bg-ink text-white hover:bg-[#2a2a2a]",
  outline: "border border-current bg-transparent hover:bg-white/10",
  ghost: "border border-transparent bg-transparent hover:bg-white/10",
};

export function Button({
  href,
  children,
  variant = "solid",
  showArrow = false,
  current = false,
  className,
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={current ? "page" : undefined}
      className={cn(
        "inline-flex h-10 items-center justify-center gap-2 px-4 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current",
        variants[variant],
        className,
      )}
    >
      {children}
      {showArrow ? <ArrowIcon /> : null}
    </Link>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      className="size-3.5 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M2.5 8h10.5M9.25 4.25 13 8l-3.75 3.75"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
