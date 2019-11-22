import request from './request'

export function getDownloadLink() {
  return request({
    url: `/download_app`,
    method: 'get'
  })
}
