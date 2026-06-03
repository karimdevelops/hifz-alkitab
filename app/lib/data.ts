import { Chapter, ChaptersResponse, Surah } from "@/app/lib/definitions";

const LOCAL_DEV = process.env.LOCAL_DEV === "true";

const CHAPTERS_API_URL = LOCAL_DEV
  ? process.env.CHAPTERS_API_URL_LOCAL!
  : process.env.CHAPTERS_API_URL_PROD!;

const SURAH_API_URL = LOCAL_DEV
  ? process.env.SURAH_API_URL_LOCAL!
  : process.env.SURAH_API_URL_PROD!;

export async function fetchChapters(reveal: boolean): Promise<Chapter[]> {
  try {
    const res = await fetch(CHAPTERS_API_URL, { next: { revalidate: false } });
    const data: ChaptersResponse = await res.json();

    let chapters = data.chapters.map((chap) => ({
      id: chap.id,
      revelation_order: chap.revelation_order,
      bismillah_pre: chap.bismillah_pre,
      name_simple: chap.name_simple,
      name_arabic: chap.name_arabic,
      verses_count: chap.verses_count,
      translated_name: chap.translated_name,
    }));

    if (reveal)
      chapters.sort((a, b) => a.revelation_order - b.revelation_order);

    return chapters;
  } catch (e) {
    console.log("API error", e);
    return [];
  }
}

export async function fetchSurah(number: number): Promise<Surah | null> {
  try {
    const verseUrl = LOCAL_DEV
      ? `${SURAH_API_URL}/${number}`
      : `${SURAH_API_URL}${number}?language=ar&words=true&word_fields=text_indopak&per_page=all`;

    const [metaRes, verseRes] = await Promise.all([
      fetch(`${CHAPTERS_API_URL}/${number}`, { next: { revalidate: false } }),
      fetch(verseUrl, { next: { revalidate: false } }),
    ]);

    const metaData = await metaRes.json();
    const verseData = await verseRes.json();

    return {
      ...(LOCAL_DEV ? metaData : metaData.chapter),
      verses: verseData.verses,
    };
  } catch (e) {
    console.log("API error", e);
    return null;
  }
}
