import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/user/logout',
    method: 'get'
  })
}

export function getRoles() {
  return request({
    url: '/user/roles',
    method: 'get'
  })
}

export function getUsers() {
  return request({
    url: '/user/get_users',
    method: 'get'
  })
}

export function getDomains() {
  return request({
    url: '/user/get_domains',
    method: 'get'
  })
}
