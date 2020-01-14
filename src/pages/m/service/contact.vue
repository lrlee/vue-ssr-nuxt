<template>
  <div>
    <div class="nav detail-top">
      <p class="title">联系客服</p>
      <nuxt-link :to="`/m/service?ip=${ip}`" class="home-link">
        <span class="home-icon"></span>
        <span class="home-name">首页</span>
      </nuxt-link>
    </div>
    <div class="content">
      <div class="customer-service">
        <div class="cs-box contact-qq">
          <div class="contact-logo">
            <div class="qq-icon"></div>
            <p class="logo-name">官方客服QQ</p>
          </div>
          <div class="qq-numbers">
            <p>客服QQ：{{ contactInfo.qq }}</p>
            <p>玩家QQ群号：{{ contactInfo.group_qq }}</p>
          </div>
          <a :href="`uniwebview://joingroup?url=${url_android};${url_ios}`" class="qq-send-btn">发送消息</a>
        </div>
        <div class="cs-box contact-wechat">
          <div class="contact-logo">
            <div class="wechat-icon"></div>
            <p class="logo-name">官方微信公众号</p>
          </div>
          <div class="wechat-QR">
            <div class="QR-img-box">
              <a :href="contactInfo.gzh_img" class="QR-img-dowbload" download>
                <img :src="contactInfo.gzh_img" class="QR-img" />
              </a>
            </div>
            <div class="wechat-text">
              <p class="wechat-title">官方微信公众号</p>
              <p class="wechat-name">全民泡泡超人</p>
            </div>
          </div>
        </div>
        <div class="cs-box notice">
          <p class="contact-logo">客服公告</p>
          <div class="notice-content">
            <h3 class="notice-title">{{ contactInfo.title }}</h3>
            <div v-html="contactInfo.description" class="notice-text"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getContactInfo } from '~/api/service'
import * as local from '@/utils/local'
export default {
  layout: 'serviceM',
  data() {
    return {
      ip: '',
      url_android: encodeURIComponent(
        'mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3DFxcq8VEqYXoAQBq4IfJKvHAs4NnEU4eb'
      ),
      url_ios: encodeURIComponent(
        'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=707841609&key=50569d2d089dfffdac32cf1adfdd5be82c9c953e5cfc78d80616551b63f2fe5e&card_type=group&source=external'
      )
    }
  },
  asyncData() {
    return getContactInfo().then(res => {
      const contactInfo = res.data
      return {
        contactInfo
      }
    })
  },
  mounted() {
    this.ip = local.getIP() || ''
  }
}
</script>
<style lang="less" scoped></style>
