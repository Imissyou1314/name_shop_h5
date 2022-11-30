import request from 'utils/http'
import { EntityRes } from '#/store'
import { EntityResList } from '../types/store';

enum API {
  BooK = '/entity'
}

export const getAllEntity = (fileName:string) => {
  return request<EntityRes[]>({
    url: `${API.BooK}/${fileName}`,
    method: 'GET',
  })
}

export const getEntityKeys = (fileName:string, index:number) => {
  return request<EntityRes>({
    url: `${API.BooK}/${fileName}/${index}`,
    method: 'GET',
  })
}