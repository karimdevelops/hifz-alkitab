import { fetchChapters, fetchSurah } from "@/app/lib/data";
import { Verse, Word } from "@/app/lib/definitions";
import VerseWord from "@/components/VerseWord";

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
  const { surah } = await params;
  const surahData = await fetchSurah(Number(surah));
  const fNum = surahData?.id.toString().padStart(3, "0");

  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <div
        dir="rtl"
        lang="ar"
        className="font-indopak flex max-w-165 flex-col gap-10 px-1 text-center"
      >
        <div className="font-surah-name text-app-primary bg-app-primary-darker border-app-primary min-w-max rounded-xl border py-1 text-center text-5xl">
          {"surah" + fNum}
        </div>
        <div>
          {surahData != null
            ? surahData.verses.map((verse: Verse, i: number) => (
                <span
                  className="gap-5 *:ml-3 *:text-3xl/20 *:md:text-4xl/20"
                  key={i}
                >
                  {verse.words.map((word: Word, j: number) => (
                    <VerseWord key={j} text={word.text_indopak} />
                  ))}
                </span>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
