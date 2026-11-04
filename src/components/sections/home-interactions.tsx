"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";

const measures = [
  "Perceived Usefulness",
  "Perceived Ease of Use",
  "Perceived Role Impact",
  "Alignment with Values",
] as const;

export function PatternExplorer() {
  const [ratings, setRatings] = useState<Record<string, number>>(
    Object.fromEntries(measures.map((measure) => [measure, 1]))
  );

  return (
    <section
      id="pattern-explorer"
      className="page-shell py-10 md:py-12"
      aria-labelledby="pattern-heading"
    >
      <h2 id="pattern-heading" className="section-title">
        The Pattern Explorer
      </h2>
      <div className="mt-9 grid gap-x-24 gap-y-10 lg:grid-cols-2">
        {measures.map((measure) => (
          <fieldset key={measure} className="flex min-w-0 flex-col items-center">
            <legend className="w-full text-center font-serif text-[1.12rem] font-semibold">
              {measure}
            </legend>
            <div className="mt-7 flex w-full max-w-[420px] justify-between gap-3">
              {[1, 2, 3, 4, 5].map((value) => {
                const selected = ratings[measure] === value;
                return (
                  <button
                    key={value}
                    type="button"
                    aria-label={`${measure}: ${value}`}
                    aria-pressed={selected}
                    onClick={() => setRatings((current) => ({ ...current, [measure]: value }))}
                    className={`size-16 border text-[13px] transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                      selected
                        ? "border-black bg-[#101113] text-white"
                        : "border-[#54575c] bg-white text-[#24262a] hover:bg-[#f5f5f3]"
                    }`}
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </fieldset>
        ))}
      </div>
      <Button href="/pattern-explorer" showArrow className="mt-12 h-[48px] w-full text-[13px]">
        Get the Results
      </Button>
    </section>
  );
}

type PromptCardProps = {
  title: string;
  prompt: string;
};

export function PromptCard({ title, prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function copyPrompt() {
    await navigator.clipboard.writeText(prompt);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  }

  return (
    <article className="editorial-shadow bg-white p-6">
      <h3 className="border-b border-[#7c7c75] pb-4 font-serif text-[1.3rem] font-semibold">
        {title}
      </h3>
      <p className="mt-6 min-h-[145px] bg-[#f5f5f3] p-6 text-[14px] leading-[1.55] text-[#42464b]">
        {prompt}
      </p>
      <button
        type="button"
        onClick={copyPrompt}
        className="mt-4 inline-flex h-12 items-center gap-2 border border-[#54575c] px-5 text-[13px] transition-colors hover:bg-[#f5f5f3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        {copied ? "Copied" : "Copy Prompt"}
        <CopyIcon />
      </button>
    </article>
  );
}

function CopyIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="size-4" fill="none">
      <path d="M5.5 5.5h7v7h-7zM3 10.5V3h7.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}
