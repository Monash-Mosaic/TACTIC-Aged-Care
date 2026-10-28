import Image from "next/image";

import { Button } from "@/components/ui/button";
import { hero } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-[1240px] items-center gap-12 px-6 py-16 lg:grid-cols-[minmax(0,36rem)_minmax(280px,1fr)] lg:gap-x-10 lg:px-10 lg:py-20">
        <div>
          <h1 className="text-[2rem] font-bold leading-[1.08] tracking-[-0.025em] text-ink sm:text-5xl lg:text-[3.35rem]">
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>
          <p className="mt-8 text-[15px] leading-[1.7] text-muted">{hero.body}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            {hero.actions.map((action) => (
              <Button
                key={action.href + action.label}
                href={action.href}
                showArrow
                className="h-12 w-full px-6 text-[15px] sm:w-auto sm:min-w-[11.25rem]"
              >
                {action.label}
              </Button>
            ))}
          </div>
        </div>

        <HeroMedia />
      </div>
    </section>
  );
}

function HeroMedia() {
  if (hero.imageSrc) {
    return (
      <div className="relative ml-auto aspect-[5/6] w-full max-w-[520px]">
        <Image
          src={hero.imageSrc}
          alt={hero.imageAlt}
          fill
          priority
          className="object-contain object-bottom"
          sizes="(min-width: 1024px) 520px, 100vw"
        />
      </div>
    );
  }

  return (
    <div
      className="ml-auto flex aspect-[5/6] w-full max-w-[520px] items-center justify-center border border-dashed border-neutral-300 bg-neutral-50"
      role="img"
      aria-label="Hero image placeholder"
    >
      <span className="text-sm tracking-wide text-neutral-400">Image placeholder</span>
    </div>
  );
}
