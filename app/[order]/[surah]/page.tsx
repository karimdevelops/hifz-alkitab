import { fetchSurah } from "@/app/lib/data";

export default async function Home({
  params,
}: {
  params: Promise<{ surah: number }>;
}) {
  const { surah } = await params;
  const surahData = await fetchSurah(Number(surah));

  return (
    <div className="flex justify-center">
      <div
        dir="rtl"
        className="font-kitab flex max-w-100 flex-wrap justify-center"
      >
        {surahData
          ? surahData.ayahs.map((ayah, i: number) => (
              <span key={i} className="ml-5 text-3xl/20" lang="ar">
                {ayah.text}{" "}
                <span className="rounded-full border-2 px-2 text-sm">
                  {ayah.numberInSurah}
                </span>
              </span>
            ))
          : null}
      </div>
    </div>
  );
}
