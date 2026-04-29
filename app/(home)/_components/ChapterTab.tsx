"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChapterTab() {
  const pathname = usePathname();

  return (
    <ul className="flex max-w-fit justify-center gap-2 self-center font-semibold *:rounded-full *:px-3 *:py-2">
      <li
        className={`${pathname == "/surah" ? "bg-app-primary text-app-background" : ""}`}
      >
        <Link href={"/surah"} replace>
          Surah
        </Link>
      </li>
      <li
        className={`${pathname == "/reveal-order" ? "bg-app-primary text-app-background" : ""}`}
      >
        <Link href={"/reveal-order"} replace>
          Revelation Order
        </Link>
      </li>
    </ul>
  );
}
