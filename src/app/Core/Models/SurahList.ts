export interface SurahList {
    code: number,
    status: string,
    data: Data[]
}

export interface Data {
    number: number,
    name: string,
    englishName: string,
    englishNameTranslation: string,
    numberOfAyahs: number,
    revelationType: string
}