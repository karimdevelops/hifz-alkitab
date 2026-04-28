import { Chapter } from "@/app/lib/definitions";

export async function fetchChapters(): Promise<Chapter[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const { CHAPTERS_API_URL } = process.env;

    if (!CHAPTERS_API_URL)
      throw new Error("Missing CHAPTERS_API_URL key in env variables.");

    const allChaps = await fetch(CHAPTERS_API_URL);
    const chapsData = await allChaps.json();
    const fChapsData = chapsData.data.map((chap: Chapter) => {
      return {
        name: chap.name.replace("سورة", ""),
        englishName: chap.englishName,
        englishNameTranslation: chap.englishNameTranslation,
        numberOfAyahs: chap.numberOfAyahs,
      };
    });
    return fChapsData;
  } catch (e) {
    console.log("API error", e);
    return [];
  }
}

export async function fetchChaptersReveal(): Promise<Chapter[]> {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));

    const { CHAPTERS_REVEAL_API_URL } = process.env;

    if (!CHAPTERS_REVEAL_API_URL)
      throw new Error("Missing CHAPTERS_API_URL key in env variables.");

    const allChaps = await fetch(CHAPTERS_REVEAL_API_URL);
    const chapsData = await allChaps.json();
    const fChapsData = chapsData.data.map((chap: Chapter) => {
      return {
        name: chap.name.replace("سورة", ""),
        englishName: chap.englishName,
        englishNameTranslation: chap.englishNameTranslation,
        numberOfAyahs: chap.numberOfAyahs,
      };
    });
    return fChapsData;
  } catch (e) {
    console.log("API error", e);
    return [];
  }
}
