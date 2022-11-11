export type DBInfoType = {
    id: string,
    name: string
}

export type DBDataType = {
    name: string,
    description: string
}

export type DatabaseType = {
    id: string,
    name: string,
    contents: DBDataType[]
}