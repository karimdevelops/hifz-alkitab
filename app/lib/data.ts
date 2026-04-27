import { Chapter } from "@/app/lib/definitions";

export async function fetchChapters(): Promise<Chapter[]> {
  try {
    const { CHAPTERS_API_URL } = process.env;

    if (!CHAPTERS_API_URL)
      throw new Error("Missing CHAPTERS_API_URL key in env variables.");

    const allChaps = await fetch(CHAPTERS_API_URL);
    const chapsData = await allChaps.json();
    return chapsData;
  } catch (e) {
    console.log("API error", e);
    return [];
  }
}
