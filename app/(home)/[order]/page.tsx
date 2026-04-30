"use cache";

import ChapterLink from "@/app/(home)/_components/ChapterLink";
import { fetchChapters } from "@/app/lib/data";
import { cacheLife } from "next/cache";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{ order: "surah" }, { order: "reveal-order" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ order: string }>;
}) {
  cacheLife("max");

  let chaps;
  let reveal: boolean;
  const { order } = await params;

  if (order == "reveal-order") {
    chaps = await fetchChapters(true);
    reveal = true;
  } else if (order == "surah") {
    chaps = await fetchChapters(false);
  } else {
    redirect("/surah");
  }

  return (
    <ul className="flex flex-col gap-5">
      {chaps.map((chap, i: number) => (
        <li key={chap.number}>
          <ChapterLink i={i} reveal={reveal} chap={chap} />
        </li>
      ))}
    </ul>
  );
}
