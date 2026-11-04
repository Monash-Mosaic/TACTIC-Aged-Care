import Link from "next/link";

import { PatternExplorer, PromptCard } from "@/components/sections/home-interactions";
import { Button } from "@/components/ui/button";

const narrativeCards = Array.from({ length: 6 }, (_, index) => ({
  id: `0${index + 1}`,
  title: "Evidence before ornament.",
  body: "This container establishes a calm, archival reading surface with strict geometry, a restrained hairline, and a barely perceptible shadow.",
}));

const lockedTools = [
  ["PDF / DOCX", "Staff Adoption & Sentiment\nDiagnostic Survey"],
  ["PDF / DOCX", "Qualitative Focus Group &\nStakeholder Protocol"],
  ["DOCX / XLTX", "Executive Board & Governance\nReporting Template"],
  ["PDF / DOCX", "Mitigation & Strategic\nIntervention Matrix"],
] as const;

const prompts = [
  {
    title: "Diagnostic report drafting",
    prompt:
      "AI Prompt, This container establishes a calm, archival reading surface with strict geometry, a restrained hairline, and a barely perceptible shadow.",
  },
  {
    title: "Survey scoring",
    prompt:
      "AI Prompt, This container establishes a calm, archival reading surface with strict geometry, a restrained hairline, and a barely perceptible shadow.",
  },
  {
    title: "Focus-group theming",
    prompt:
      "AI Prompt, This container establishes a calm, archival reading surface with strict geometry, a restrained hairline, and a barely perceptible shadow.",
  },
] as const;

export function HomeSections() {
  return (
    <>
      <NarrativeSection />
      <PatternExplorer />
      <ToolkitSection />
      <PromptSection />
      <SiteFooter />
    </>
  );
}

function NarrativeSection() {
  return (
    <section
      id="narrative"
      className="page-shell py-9 md:py-12"
      aria-labelledby="narrative-heading"
    >
      <h2 id="narrative-heading" className="section-title">
        The TACTiC Narrative
      </h2>
      <div className="mt-9 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {narrativeCards.map((card) => (
          <article key={card.id} className="editorial-shadow min-h-[270px] bg-white p-6">
            <p className="font-mono text-[10px] font-semibold tracking-[0.16em] text-[#54575c]">
              RESEARCH NOTE · 024
            </p>
            <h3 className="mt-5 max-w-[14rem] font-serif text-[1.65rem] font-semibold leading-[1.05]">
              {card.title}
            </h3>
            <p className="mt-7 text-[14px] leading-[1.55] text-[#7c7c75]">{card.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ToolkitSection() {
  return (
    <section id="toolkit" className="page-shell py-10 md:py-12" aria-labelledby="toolkit-heading">
      <h2 id="toolkit-heading" className="section-title">
        The TACTiC Toolkit
      </h2>
      <p className="mx-auto mt-4 max-w-[830px] text-center text-[14px] leading-6 text-[#54575c]">
        Download the foundational white paper, the four diagnostic toolkit documents, and structured
        AI assistance prompts.
      </p>

      <Link
        href="/tool"
        className="mt-8 flex min-h-[88px] items-center justify-between border border-[#42464b] px-8 py-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        <span>
          <span className="block font-mono text-[10px] font-semibold tracking-[0.14em] text-[#54575c]">
            PDF / DOCX
          </span>
          <span className="mt-2 block font-serif text-[1.25rem] font-semibold">
            TACTiC White Paper: Institutional Case &amp; Logic
          </span>
        </span>
        <DownloadIcon />
      </Link>

      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {lockedTools.map(([type, title]) => (
          <article
            key={title}
            className="flex min-h-[118px] items-center justify-between gap-5 bg-[#eaeae7] px-8 py-5 text-[#7c7c75]"
          >
            <div>
              <p className="font-mono text-[10px] font-semibold tracking-[0.14em]">{type}</p>
              <h3 className="mt-2 whitespace-pre-line font-serif text-[1.28rem] font-semibold leading-[1.15]">
                {title}
              </h3>
            </div>
            <span className="inline-flex h-12 min-w-[130px] items-center justify-center gap-2 border border-[#cecec9] bg-[#dfdfdc] px-4 text-[13px]">
              Locked <LockIcon />
            </span>
          </article>
        ))}
      </div>
      <Button href="/tool" showArrow className="mt-8 h-[48px] w-full text-[13px]">
        Unlock Locked Toolkits
      </Button>
    </section>
  );
}

function PromptSection() {
  return (
    <section className="page-shell py-8 md:py-10" aria-labelledby="prompts-heading">
      <h2 id="prompts-heading" className="section-title text-[1.8rem]">
        The TACTiC Toolkit
      </h2>
      <div className="mt-9 grid gap-8 lg:grid-cols-3">
        {prompts.map((prompt) => (
          <PromptCard key={prompt.title} {...prompt} />
        ))}
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="page-shell mt-10 flex flex-col gap-10 border-t border-[#42464b] pb-8 pt-10">
      <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-16">
        <nav className="order-1 flex flex-col text-[14px] leading-8 text-[#42464b] md:order-3 md:text-right">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
        </nav>

        <div className="order-2 flex flex-col gap-3 md:order-1">
          <p className="text-[14px] text-[#42464b]">Funded by</p>
          {/* eslint-disable-next-line @next/next/no-img-element -- preserve full logo; avoid optimizer crop */}
          <img
            src="/images/mccsa.png"
            alt="MCCSA"
            width={176}
            height={40}
            className="block h-auto w-[10.5rem] max-w-full overflow-visible object-contain"
          />
        </div>

        <div className="order-3 flex flex-col gap-3 md:order-2">
          <p className="text-[14px] text-[#42464b]">Developed by</p>
          {/* eslint-disable-next-line @next/next/no-img-element -- preserve full logo; avoid optimizer crop */}
          <img
            src="/images/mosaic.png"
            alt="MOSAIC — Monash Students For AI With Communities"
            width={176}
            height={40}
            className="block h-auto w-[10.5rem] max-w-full overflow-visible object-contain"
          />
        </div>
      </div>

      <p className="text-[13px] text-[#7c7c75] md:text-right">
        © &nbsp; All Rights Reserved · MCCSA
      </p>
    </footer>
  );
}

function DownloadIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-7" fill="none">
      <path d="M12 3v12m0 0 4-4m-4 4-4-4M5 16v4h14v-4" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-3.5" fill="none">
      <path
        d="M4.5 7V5a3.5 3.5 0 0 1 7 0v2M3.5 7h9v7h-9z"
        stroke="currentColor"
        strokeWidth="1.1"
      />
    </svg>
  );
}
