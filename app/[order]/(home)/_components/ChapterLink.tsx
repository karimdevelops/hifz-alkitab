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
      href={pathname + "/" + chap.id}
      className="border-app-secondary hover:border-app-primary flex gap-5 rounded-xl border-2 px-5 py-3 transition-all hover:cursor-pointer [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:gap-2"
    >
      <div>
        <p className="font-bold">{i + 1}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">{chap.name_simple}</h3>
        {reveal ? (
          <p className="text-sm">
            {chap.id}: {chap.translated_name.name}
          </p>
        ) : (
          <p className="text-sm">{chap.translated_name.name}</p>
        )}
      </div>
      <div className="ml-auto items-end">
        <h3 className="font-kitab text-xl font-bold">{chap.name_arabic}</h3>
        <p className="text-sm">{chap.verses_count} Ayahs</p>
      </div>
    </Link>
  );
}
