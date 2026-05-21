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
      <div dir="rtl" className="font-indopak max-w-100">
        {surahData != null
          ? surahData.ayahs.map((ayah, i: number) => (
              <div key={i} className="flex flex-col items-center gap-5">
                <p
                  className="ml-5 flex flex-wrap justify-center gap-4 text-4xl/20"
                  lang="ar"
                >
                  {/*replace with animations and use on events*/}
                  {ayah.text.split(" ").map((word, i) => (
                    <span
                      key={i}
                      className="ۖtransition border-app-foreground active:text-app-foreground hover:text-app-foreground hover:border-app-primary active:border-app-primary inline-block cursor-pointer border-b text-transparent transition delay-2000 hover:-translate-y-3 hover:delay-0 active:-translate-y-3 active:delay-0"
                    >
                      {word}
                    </span>
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
