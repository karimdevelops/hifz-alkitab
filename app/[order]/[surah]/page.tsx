"use cache";

import { fetchSurah } from "@/app/lib/data";
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
      <div dir="rtl" className="font-digital-khatt max-w-100">
        {surahData != null
          ? surahData.ayahs.map((ayah, i: number) => (
              <div key={i} className="flex flex-col items-center gap-5">
                <p className="ml-5 text-4xl/20" lang="ar">
                  {ayah.text}
                </p>
                <span className="font-digital-khatt rounded-full self-stretch text-center border-2 border-dotted px-2 text-base">
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
