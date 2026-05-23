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
      <div className="font-surah-name bg-app-primary-darker border-app-primary rounded-full border px-35 py-1 text-5xl">
        {"surah" + fNum}
      </div>
      <div dir="rtl" className="font-indopak max-w-100">
        {surahData != null
          ? surahData.ayahs.map((ayah, i: number) => (
              <div key={i} className="flex flex-col items-center gap-5">
                <p
                  className="ml-5 flex flex-wrap justify-center gap-4 text-4xl/20"
                  lang="ar"
                >
                  {ayah.text.split(" ").map((word, i) => (
                    <Word text={word} key={i} />
                  ))}
                </p>
                <span className="px-2 text-center text-base">
                  {ayah.numberInSurah}
                </span>
                <div></div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
