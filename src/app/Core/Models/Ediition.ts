export interface Edition {
    code: 200,
    status: string,
    data: Data[]
}

export interface Data {
    identifier?: string
    language?: string
    name?: string
    englishName?: string
    format?: string
    type?: string
    direction?: string
}

