import request from './request'

export function getDownloadLink() {
  return request({
    url: `/download_app`,
    method: 'get'
  })
}

// 下载埋点
export function downloadMicrospot(outId = 0) {
  return request({
    url: `/stat/download/pc/${outId}`,
    method: 'get'
  })
}
