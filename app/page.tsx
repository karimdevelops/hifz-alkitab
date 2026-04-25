import { fetchChapters } from "@/lib/data";
import { Suspense } from "react";

export default async function Home() {
  const chaps = await fetchChapters();
  return (
    <div className="flex min-h-[90vh] flex-col gap-10 p-5 md:p-10">
      <h1 className="text-primary font-noto-arabic self-center text-4xl font-bold">
        حفظ
      </h1>
      <Suspense>
        <ul className="flex flex-col gap-5">
          {chaps.map((chap, i: number) => (
            <li key={i}>
              <div className="border-secondary hover:border-primary flex gap-5 rounded-xl border-2 px-5 py-3 transition-all hover:cursor-pointer [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:gap-2">
                <div>
                  <p className="font-bold">{i + 1}</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{chap.surahName}</h3>
                  <p className="text-sm">{chap.surahNameTranslation}</p>
                </div>
                <div className="font-noto-arabic ml-auto items-end">
                  <h3 className="text-lg font-semibold">
                    {chap.surahNameArabic}
                  </h3>
                  <p className="text-sm">{chap.totalAyah} Ayahs</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Suspense>
    </div>
  );
}
