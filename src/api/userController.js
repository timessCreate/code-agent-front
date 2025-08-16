import request from '../request.js'

// 导出一个异步函数，用于用户注册
export async function userRegister(params) {
  // 发送POST请求，请求地址为'/user/register'
  return request('/user/register', {
    // 请求方法为POST
    method: 'POST',
    // 如果params存在，则将其展开
    ...(params || {}),
  })
}
// 导出一个异步函数userLogin，用于用户登录
export async function userLogin(params) {
  // 发送POST请求，请求路径为'/user/login'
  return request('/user/login', {
    // 请求方法为POST
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: { ...(params || {}) },
  })
}

// 导出一个异步函数，用于获取登录用户信息
export async function getLoginUser(params) {
  // 发送POST请求，获取登录用户信息
  return request('/user/get/login', {
    method: 'GET',
    ...(params || {}),
  })
}

// 导出一个异步函数addUser，用于添加用户
export async function addUser(params) {
  return request('/user/add', {
    method: 'POST',
    ...(params || {}),
  })
}

// 导出一个异步函数，用于根据id获取用户信息
export async function getUserById(params) {
  // 发送post请求，获取用户信息
  return request('/user/get', {
    method: 'GET',
    ...(params || {}),
  })
}

// 导出一个异步函数，用于根据用户ID获取用户信息
export async function getUserVOById(params) {
  // 发送GET请求，获取用户信息
  return request('/user/get/vo', {
    method: 'GET',
    ...(params || {}),
  })
}

// 导出一个异步函数，用于删除用户
export async function deleteUser(params) {
  // 发送POST请求，请求地址为'/user/delete'
  return request('/user/delete', {
    // 请求方法为POST
    method: 'POST',
    // 如果params存在，则将其展开
    ...(params || {}),
  })
}

// 导出一个异步函数，用于更新用户信息
export async function updateUser(params) {
  // 发送POST请求，更新用户信息
  return request('/user/update', {
    method: 'POST',
    ...(params || {}),
  })
}

// 导出一个异步函数，用于分页查询用户信息
export async function listUserVOByPage(params) {
  // 发送POST请求，请求路径为'/user/list/page/vo'，请求参数为params
  return request('/user/list/page/vo', {
    method: 'POST',
    ...(params || {}),
  })
}
