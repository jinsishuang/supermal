import { request } from './axios'

export function getHomeMultidata() {
  return request({
    url: '/api/home/img/list'
  })
}