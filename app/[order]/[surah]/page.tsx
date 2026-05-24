"use cache";

import { fetchSurah } from "@/app/lib/data";
import Word from "@/components/Word";
import { cacheLife } from "next/cache";

export default async function Home({
  params,
}: {
  params: Promise<{ surah: number }>;
}) {
  cacheLife("max");

  const { surah } = await params;
  const surahData = await fetchSurah(Number(surah));
  const fNum = surahData?.number.toString().padStart(3, "0");

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div className="font-surah-name text-app-primary bg-app-primary-darker border-app-primary rounded-xl border px-35 py-1 text-5xl">
        {"surah" + fNum}
      </div>
      <div
        dir="rtl"
        lang="ar"
        className="font-indopak max-w-162 px-20 text-center"
      >
        {surahData != null
          ? surahData.ayahs.map((ayah, i: number) => (
              <span className="gap-2 text-4xl/20 *:ml-2" key={i}>
                {ayah.text.split(" ").map((word, i) => (
                  <Word text={word} key={i} />
                ))}
                <span className="font-digital-khatt px-2 align-middle text-4xl">
                  {"\u06DD" + ayah.numberInSurah.toLocaleString("ar-EG")}
                </span>
              </span>
            ))
          : null}
      </div>
    </div>
  );
}
