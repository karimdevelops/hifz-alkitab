import { Chapter } from "@/lib/definitions";

export async function fetchChapters(): Promise<Chapter[]> {
  try {
    const allChaps = await fetch("https://quranapi.pages.dev/api/surah.json");
    const chapsData = await allChaps.json();
    return chapsData;
  } catch (e) {
    console.log("API error", e);
    return [];
  }
}
