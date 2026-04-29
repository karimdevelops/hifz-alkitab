"use cache";

import ChapterLink from "@/app/(home)/_components/ChapterLink";
import { fetchChapters } from "@/app/lib/data";
import { cacheLife } from "next/cache";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{ surah: "surah" }, { surah: "reveal-order" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ surah: string }>;
}) {
  cacheLife("max");

  let chaps;
  const { surah } = await params;

  if (surah == "reveal-order") {
    chaps = await fetchChapters(true);
  } else if (surah == "surah") {
    chaps = await fetchChapters(false);
  } else {
    redirect("/surah");
  }

  return (
    <ul className="flex flex-col gap-5">
      {chaps.map((chap) => (
        <li key={chap.number}>
          <ChapterLink chap={chap} />
        </li>
      ))}
    </ul>
  );
}
