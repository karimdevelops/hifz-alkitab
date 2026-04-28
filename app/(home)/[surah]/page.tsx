import { fetchChapters, fetchChaptersReveal } from "@/app/lib/data";
import { redirect } from "next/navigation";

export default async function Home({
  params,
}: {
  params: Promise<{ surah: string }>;
}) {
  let chaps;
  const { surah } = await params;

  if (surah == "reveal-order") {
    chaps = await fetchChaptersReveal();
  } else if (surah == "surah") {
    chaps = await fetchChapters();
  } else {
    redirect("/surah");
  }

  return (
    <div>
      <ul className="flex flex-col gap-5">
        {chaps.map((chap, i: number) => (
          <li key={i}>
            <div className="border-app-secondary hover:border-app-primary flex gap-5 rounded-xl border-2 px-5 py-3 transition-all hover:cursor-pointer [&>div]:flex [&>div]:flex-col [&>div]:justify-center [&>div]:gap-2">
              <div>
                <p className="font-bold">{i + 1}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">{chap.englishName}</h3>
                <p className="text-sm">{chap.englishNameTranslation}</p>
              </div>
              <div className="ml-auto items-end">
                <h3 className="font-kitab text-xl font-bold">{chap.name}</h3>
                <p className="text-sm">{chap.numberOfAyahs} Ayahs</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
