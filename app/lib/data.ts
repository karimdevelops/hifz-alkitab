import { Chapter } from "@/app/lib/definitions";

export async function fetchChapters(reveal: boolean): Promise<Chapter[]> {
  try {
    let allChaps;
    const { CHAPTERS_API_URL } = process.env;
    const { CHAPTERS_REVEAL_API_URL } = process.env;

    if (!CHAPTERS_API_URL || !CHAPTERS_REVEAL_API_URL)
      throw new Error("Missing ...API_URL key in env variables.");

    if (reveal) allChaps = await fetch(CHAPTERS_REVEAL_API_URL);
    else allChaps = await fetch(CHAPTERS_API_URL);

    const chapsData = await allChaps.json();

    const fChapsData = chapsData.data.map((chap: Chapter) => {
      return {
        name: chap.name.replace("سورة", ""),
        number: chap.number,
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
