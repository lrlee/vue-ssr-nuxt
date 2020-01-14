import request from './request'
// 问题类型
export function getQATypes() {
  return request({
    url: `/question/types`,
    method: 'get'
  })
}

export function getQALisyByType(typeId) {
  return request({
    url: `/question/items/${typeId}/1/1000`,
    method: 'get'
  })
}

export function getQADetailById(id) {
  return request({
    url: `/question/itemdetail/${id}`,
    method: 'get'
  })
}

// 问题反馈
export function feedbackQA(data) {
  return request({
    url: `/questionsolve`,
    method: 'post',
    data
  })
}

// 联系信息
export function getContactInfo() {
  return request({
    url: `/contact`,
    method: 'get'
  })
}
