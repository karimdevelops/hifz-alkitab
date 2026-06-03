"use client";

import { Surah, Verse, Word } from "@/app/lib/definitions";
import VerseWord from "@/components/VerseWord";
import { useDisplay } from "@/context/DisplayContext";

export default function SurahPage({ surahData }: { surahData: Surah }) {
  const { displayMode } = useDisplay();
  if (displayMode == "linebyline")
    return (
      <div className="flex flex-col gap-20">
        {surahData != null
          ? surahData.verses.map((verse: Verse, i: number) => (
              <div className="border-b-2" key={i}>
                <div className="*:mx-2 *:inline-block *:text-4xl/20 *:md:text-5xl/20">
                  {verse.words.map((word: Word, j: number) => (
                    <VerseWord key={j} hifz={false} text={word.text_indopak} />
                  ))}
                  <span className="font-digital-khatt px-2 align-middle">
                    {"\u06DD" + verse.verse_number.toLocaleString("ar-EG")}
                  </span>
                </div>
                <div dir="ltr" className="py-4 font-sans text-2xl! *:mx-1">
                  {verse.words.map((word: Word, j: number) => (
                    <VerseWord
                      key={j}
                      hifz={false}
                      text={word.translation.text}
                    />
                  ))}
                </div>
              </div>
            ))
          : null}
      </div>
    );
  else if (displayMode == "hifzreading")
    return (
      <div className="max-w-165">
        {surahData != null
          ? surahData.verses.map((verse: Verse, i: number) => (
              <span
                className="*:mx-2 *:inline-block *:text-3xl/20 *:md:text-4xl/20"
                key={i}
              >
                {verse.words.map((word: Word, j: number) => (
                  <VerseWord key={j} hifz={true} text={word.text_indopak} />
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
