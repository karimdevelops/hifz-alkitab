export interface TranslatedName {
  language_name: string;
  name: string;
}

export interface Chapter {
  id: number;
  revelation_order: number;
  bismillah_pre: boolean;
  name_simple: string;
  name_arabic: string;
  verses_count: number;
  translated_name: TranslatedName;
}

export interface ChaptersResponse {
  chapters: Chapter[];
}
export interface Word {
  id: number;
  line_number: number;
  audio_url: string | null;
  text_indopak: string;
  translation: {
    text: string;
    language_name: string;
  };
}

export interface Verse {
  id: number;
  words: Word[];
}

export interface Surah extends Chapter {
  verses: Verse[];
}
