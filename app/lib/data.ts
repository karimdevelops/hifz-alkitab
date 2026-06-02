import { Chapter, ChaptersResponse, Surah } from "@/app/lib/definitions";

export async function fetchChapters(reveal: boolean): Promise<Chapter[]> {
  try {
    let allChaps;
    const { CHAPTERS_API_URL } = process.env;

    if (!CHAPTERS_API_URL)
      throw new Error("Missing ...API_URL key in env variables.");
    else
      allChaps = await fetch(CHAPTERS_API_URL, {
        next: { revalidate: false },
      });

    const chapsData: ChaptersResponse = await allChaps.json();
    const fChapsData = chapsData.chapters.map((chap: Chapter) => {
      return {
        id: chap.id,
        revelation_order: chap.revelation_order,
        bismillah_pre: chap.bismillah_pre,
        name_simple: chap.name_simple,
        name_arabic: chap.name_arabic,
        verses_count: chap.verses_count,
        translated_name: chap.translated_name,
      };
    });

    if (reveal)
      fChapsData.sort((a, b) => a.revelation_order - b.revelation_order);

    return fChapsData;
  } catch (e) {
    console.log("API error", e);
    return [];
  }
}

export async function fetchSurah(number: number): Promise<Surah | null> {
  try {
    const { SURAH_API_URL, CHAPTERS_API_URL } = process.env;

    if (!CHAPTERS_API_URL || !SURAH_API_URL)
      throw new Error("Missing API_URL in env variables.");

    const [metaRes, verseRes] = await Promise.all([
      fetch(`${CHAPTERS_API_URL}/${number}`, { next: { revalidate: false } }),
      fetch(
        `${SURAH_API_URL}${number}?language=ar&words=true&word_fields=text_indopak&per_page=all`,
        { next: { revalidate: false } },
      ),
    ]);

    const metaData = await metaRes.json();
    const verseData = await verseRes.json();

    return {
      ...metaData.chapter,
      verses: verseData.verses,
    };
  } catch (e) {
    console.log("API error", e);
    return null;
  }
}
