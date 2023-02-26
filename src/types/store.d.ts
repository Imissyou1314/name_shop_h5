export interface Book {
  title: string
  fileName: string
  desc: string
  total: number
  tag: string
}

export interface Entity {
  content: string
  title: string
  dynasty: string
  author: string
  book: string
}

export interface EntityRes {
  Entity: Entity
  Keys: string[]
}

export interface EntityResList {
  entityList: EntityRes
  [x: string]: EntityRes
  list: EntityRes[]
}

export interface WordsRes {
  words: string[]
}
