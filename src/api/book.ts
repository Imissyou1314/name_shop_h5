import request from 'utils/http'
import { Book } from '#/store'

enum API {
  BooK = '/book'
}

export const getAllBook = () => {
  return request<Book>({
    url: API.BooK,
    method: 'GET',
  })
}