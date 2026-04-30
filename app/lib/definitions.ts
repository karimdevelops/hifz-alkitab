export interface Chapter {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  revelationType: string;
  numberOfAyahs: number;
}

export interface Ayah {
  numberInSurah: number;
  text: string;
}

export interface Surah extends Chapter {
  ayahs: Ayah[];
}
