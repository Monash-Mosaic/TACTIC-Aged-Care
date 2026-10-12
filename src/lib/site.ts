import type { NavItem } from "@/types/navigation";

export const site = {
  name: "TACTIC",
  description: "Mapping residential care realities.",
} as const;

export const mainNav: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "TACTIC Narrative", href: "/narrative" },
  { label: "Pattern Explorer", href: "/pattern-explorer" },
  { label: "About Us", href: "/about" },
];

export const toolLink: NavItem = {
  label: "Get the Tool",
  href: "/tool",
};

type HeroAction = {
  label: string;
  href: string;
};

type HeroContent = {
  titleLines: readonly string[];
  body: string;
  imageAlt: string;
  /** Public path such as "/images/hero.png". Null keeps the layout placeholder. */
  imageSrc: string | null;
  actions: readonly HeroAction[];
};

export const hero: HeroContent = {
  titleLines: ["Mapping Residential", "Care Realities"],
  body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum.",
  imageAlt: "Portrait accompanying the residential care realities introduction",
  imageSrc: null,
  actions: [
    { label: "Explore Ideas", href: "/narrative" },
    { label: "Get the Tool", href: "/tool" },
  ],
};
