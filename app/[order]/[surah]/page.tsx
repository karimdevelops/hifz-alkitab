import SurahPage from "@/app/[order]/[surah]/_componens/SurahPage";
import { fetchChapters, fetchSurah } from "@/app/lib/data";

export async function generateStaticParams() {
  const chapters = await fetchChapters(false);
  return chapters.flatMap((chap) => [
    { order: "surah", surah: chap.id.toString() },
    { order: "revelation-order", surah: chap.id.toString() },
  ]);
}

export default async function Home({
  params,
}: {
  params: Promise<{ order: string; surah: string }>;
}) {
  const { surah, order } = await params;
  const reveal = order === "revelation-order";

  let surahId: number;
  if (reveal) {
    const chapters = await fetchChapters(true);
    surahId = chapters[Number(surah) - 1].id;
  } else {
    surahId = Number(surah);
  }

  const surahData = await fetchSurah(surahId);
  const fNum = surahData?.id.toString().padStart(3, "0");

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div
        dir="rtl"
        lang="ar"
        className="font-indopak flex flex-col gap-10 px-1 tracking-wide"
      >
        <div className="font-surah-name text-app-primary bg-app-primary-darker border-app-primary min-w-max rounded-xl border py-1 text-center text-5xl">
          {"surah" + fNum}
        </div>
        {surahData?.bismillah_pre ? (
          <div className="text-center text-3xl">
            بِسۡمِ اللهِ الرَّحۡمٰنِ الرَّحِيۡمِ
          </div>
        ) : (
          ""
        )}
        {surahData ? <SurahPage surahData={surahData} /> : null}
      </div>
    </div>
  );
}
