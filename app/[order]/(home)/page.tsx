import ChapterLink from "@/app/[order]/(home)/_components/ChapterLink";
import { fetchChapters } from "@/app/lib/data";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
  return [{ order: "surah" }, { order: "reveal-order" }];
}

export default async function Home({
  params,
}: {
  params: Promise<{ order: string }>;
}) {
  let chaps;
  let reveal: boolean;
  const { order } = await params;

  if (order == "revelation-order") {
    chaps = await fetchChapters(true);
    reveal = true;
  } else if (order == "surah") {
    chaps = await fetchChapters(false);
  } else {
    redirect("/surah");
  }

  return (
    <ul className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {chaps.map((chap, i: number) => (
        <li key={chap.number}>
          <ChapterLink i={i} reveal={reveal} chap={chap} />
        </li>
      ))}
    </ul>
  );
}
