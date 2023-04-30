export interface Surah {
    code: number
    status: string
    data: Data
}

export interface Data {
    number: number
    name: string
    englishName: string
    englishNameTranslation: string
    revelationType: string
    numberOfAyahs: number
    ayahs: Ayahs[]
    edition: SurahEdition
}

export interface Ayahs {
    number: number
    audio: string
    audioSecondary: string[]
    text: string
    numberInSurah: number
    juz: number
    manzil: number
    page: number
    ruku: number
    hizbQuarter: number
    sajda: boolean
}

export interface SurahEdition {
    direction: null
    englishName: string
    format: string
    identifier: string
    language: string
    name: string
    type: string
}
