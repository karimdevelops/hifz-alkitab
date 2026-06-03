"use client";

import { Surah, Verse, Word } from "@/app/lib/definitions";
import VerseWord from "@/components/VerseWord";
import { useDisplay } from "@/context/DisplayContext";

export default function SurahPage({ surahData }: { surahData: Surah }) {
  const { displayMode } = useDisplay();
  return (
    <div>
      {surahData != null
        ? surahData.verses.map((verse: Verse, i: number) => (
            <span
              className="*:mx-2 *:inline-block *:text-3xl/20 *:md:text-4xl/20"
              key={i}
            >
              {verse.words.map((word: Word, j: number) => (
                <VerseWord key={j} text={word.text_indopak} />
              ))}
              <span className="font-digital-khatt px-2 align-middle">
                {"\u06DD" + verse.verse_number.toLocaleString("ar-EG")}
              </span>
            </span>
          ))
        : null}
    </div>
  );
}
