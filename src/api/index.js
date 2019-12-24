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

// 新闻 活动
export function getNewsByType(type) {
  return request({
    url: `/news/item?type=${type}`,
    method: 'get'
  })
}

// 公告
export function getNotice() {
  return request({
    url: `/notice/item?type=1`,
    method: 'get'
  })
}

// 攻略
export function getStrategy() {
  return request({
    url: `/strategy/item`,
    method: 'get'
  })
}

// 首页banner
export function getBannerByRecommend(recommendId = 'main_banner') {
  return request({
    url: `/recommend?id=banner_item&recommend_id=${recommendId}`,
    method: 'get'
  })
}
// 角色
export function getRoles() {
  return request({
    url: `/store/roles`,
    method: 'get'
  })
}

// 视频资源
export function getVideos() {
  return request({
    url: `/strategy/video`,
    method: 'get'
  })
}

// 新闻详情
export function getNewsDesc(newsId) {
  return request({
    url: `/news/item/one?id=${newsId}`,
    method: 'get'
  })
}

// 公告详情
export function getNoticeDesc(id) {
  return request({
    url: `/notice/item/one?id=${id}`,
    method: 'get'
  })
}

// 攻略详情
export function getStrategyDesc(id) {
  return request({
    url: `/strategy/item/one?id=${id}`,
    method: 'get'
  })
}

// 预约活动开关
export function bookingOnOrOff() {
  return request({
    url: `/booking/on_off`,
    method: 'get'
  })
}
// 预约活动 验证码
export function getBookVeriCode(data) {
  return request({
    url: `/captcha/sms/booking`,
    method: 'post',
    data
  })
}
// 用户预约
export function toBook(data) {
  return request({
    url: `/booking`,
    method: 'post',
    data
  })
}
// 预约有礼总人数
export function getBookTotal() {
  return request({
    url: `/booking/total`,
    method: 'get'
  })
}
