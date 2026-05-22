"use cache";

import { fetchSurah } from "@/app/lib/data";
import Word from "@/components/ui/Word";
import { cacheLife } from "next/cache";

export default async function Home({
  params,
}: {
  params: Promise<{ surah: number }>;
}) {
  cacheLife("max");

  const { surah } = await params;
  const surahData = await fetchSurah(Number(surah));

  return (
    <div className="flex justify-center">
      <div dir="rtl" className="font-indopak max-w-100">
        {surahData != null
          ? surahData.ayahs.map((ayah, i: number) => (
              <div key={i} className="flex flex-col items-center gap-5">
                <p
                  className="ml-5 flex flex-wrap justify-center gap-4 text-4xl/20"
                  lang="ar"
                >
                  {ayah.text.split(" ").map((word, i) => (
                    <Word text={word} i={i} />
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
