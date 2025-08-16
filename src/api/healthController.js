import request from '../request.js'

export async function healthCheck(params) {
  return request('/health/ok', {
    method: 'GET',
    ...(params || {}),
  })
}
