import request from 'utils/http'
import { Book } from '#/store'
import { WordsRes } from '../types/store'

enum API {
  BooK = '/book'
}

export const getAllBook = () => {
  return request<Book>({
    url: API.BooK,
    method: 'GET'
  })
}

export const getEntityWords = (fileName: string, index: number) => {
  return request<WordsRes>({
    url: `${API.BooK}/words?name=${fileName}&index=${index}`,
    method: 'GET'
  })
}
