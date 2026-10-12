import Image from "next/image";
import Link from "next/link";

import { site } from "@/lib/site";

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-center"
      aria-label={`${site.name} home`}
    >
      <Image
        src="/logo.png"
        alt=""
        width={79}
        height={18}
        priority
        className="h-[18px] w-auto"
      />
    </Link>
  );
}
