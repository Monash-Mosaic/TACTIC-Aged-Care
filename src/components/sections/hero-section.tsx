import Image from "next/image";

import { Button } from "@/components/ui/button";
import { hero } from "@/lib/site";

export function HeroSection() {
  return (
    <section className="bg-white" aria-labelledby="home-title">
      <div className="page-shell grid items-center gap-10 py-10 md:py-14 lg:min-h-[610px] lg:grid-cols-[minmax(0,36.5rem)_minmax(28rem,1fr)] lg:gap-x-1 lg:py-8">
        <div className="relative z-10 lg:pt-1">
          <h1
            id="home-title"
            className="font-serif text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.035em] text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.titleLines[0]}
            <br />
            {hero.titleLines[1]}
          </h1>
          <p className="mt-8 max-w-[36.5rem] text-[15px] leading-[1.6] text-muted">{hero.body}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {hero.actions.map((action) => (
              <Button
                key={action.href + action.label}
                href={action.href}
                showArrow
                className="h-[47px] w-full px-6 text-[14px]"
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
  return (
    <div className="relative ml-auto aspect-[612/590] w-full max-w-[612px]">
      <Image
        src={hero.imageSrc}
        alt={hero.imageAlt}
        fill
        priority
        className="object-contain object-bottom"
        sizes="(min-width: 1024px) 612px, 100vw"
      />
    </div>
  );
}
