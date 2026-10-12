type PageIntroProps = {
  title: string;
};

export function PageIntro({ title }: PageIntroProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto w-full max-w-[1240px] px-6 py-20 lg:px-10">
        <h1 className="text-4xl font-bold tracking-[-0.025em] text-ink sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
