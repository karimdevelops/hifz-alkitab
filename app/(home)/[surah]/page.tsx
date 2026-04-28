import ChapterLink from "@/app/(home)/_components/ChapterLink";
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
  console.log(chaps);
  return (
    <div>
      <ul className="flex flex-col gap-5">
        {chaps.map((chap) => (
          <li key={chap.number}>
            <ChapterLink chap={chap} />
          </li>
        ))}
      </ul>
    </div>
  );
}
