"use client";

import { Chapter } from "@/app/lib/definitions";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChapterLink({
  i,
  reveal,
  chap,
}: {
  i: number;
  reveal: boolean;
  chap: Chapter;
}) {
  const pathname = usePathname();

  return (
    <Link
      href={pathname + "/" + chap.number}
      className="border-app-secondary hover:border-app-primary flex gap-5 rounded-xl border-2 px-5 py-3 transition-all hover:cursor-pointer [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:gap-2"
    >
      <div>
        <p className="font-bold">{i + 1}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{chap.englishName}</h3>
        {reveal ? (
          <p className="text-sm">
            {chap.number}: {chap.englishNameTranslation}
          </p>
        ) : (
          <p className="text-sm">{chap.englishNameTranslation}</p>
        )}
      </div>
      <div className="ml-auto items-end">
        <h3 className="font-kitab text-xl font-bold">{chap.name}</h3>
        <p className="text-sm">{chap.numberOfAyahs} Ayahs</p>
      </div>
    </Link>
  );
}
