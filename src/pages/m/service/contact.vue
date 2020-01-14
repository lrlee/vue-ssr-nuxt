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
<style lang="less" scoped>
@vw: 1vw/13.34;
@vh: 1vh/7.5;
@vmin: 1vmin/7.5;
@media screen and (orientation: portrait) {
  @vw: 1vw/7.5;
  @vmin: 1vmin/13.34;
  .customer-service {
    flex-direction: column !important;
    .cs-box {
      border-right: none !important;
      border-bottom: 1 * @vmin solid #2384ca;
      flex: none !important;
    }
  }
}
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav {
  width: 100%;
  height: 90 * @vh;
  border-top-left-radius: 10 * @vmin;
  border-top-right-radius: 10 * @vmin;
}
.detail-top {
  background-color: rgba(10, 37, 57, 0.6);
  width: 100%;
  padding: 0 63 * @vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .title {
    font-size: 32 * @vmin;
  }
  .home-link {
    display: flex;
    align-items: center;
    transition: all 0.3s linear;
    .home-icon {
      display: block;
      width: 26 * @vmin;
      height: 26 * @vmin;
      background: url('~assets/images/service/home_icon_normal.png') no-repeat;
      background-size: contain;
    }
    .home-name {
      line-height: 90 * @vh;
      font-size: 24 * @vmin;
      color: #148be0;
      margin-left: 10 * @vmin;
    }
    &:active {
      .home-icon {
        background-image: url('~assets/images/service/home_icon_tap.png');
      }
      .home-name {
        color: #1cabeb;
      }
    }
  }
}
.content {
  width: 100%;
  height: 530 * @vh;
  box-sizing: border-box;
  font-size: 26 * @vmin;
  position: relative;
  overflow: auto;
  .customer-service {
    width: 100%;
    height: 100%;
    display: flex;
    .cs-box {
      padding: 30 * @vmin 0;
      flex: 1;
      border-right: 1 * @vmin solid #2384ca;
      .flex-column-center;
      &:last-child {
        border: none;
      }
      .contact-logo {
        .flex-column-center;
        color: #57b9ff;
        .logo-name {
          margin-top: 10 * @vmin;
        }
      }
    }
    .contact-qq {
      .qq-icon {
        width: 55 * @vmin;
        height: 59 * @vmin;
        background: url('~assets/images/service/qq_icon.png') no-repeat;
        background-size: contain;
      }
      .qq-numbers {
        line-height: 1.5;
        font-size: 22 * @vmin;
        margin-top: 60 * @vmin;
      }
      .qq-send-btn {
        color: #a3d9ff;
        width: 200 * @vmin;
        height: 74 * @vmin;
        line-height: 74 * @vmin;
        text-align: center;
        background-color: #148be0;
        border-radius: 4 * @vmin;
        margin-top: 40 * @vmin;
      }
    }
    .contact-wechat {
      .wechat-icon {
        width: 69 * @vmin;
        height: 55 * @vmin;
        background: url('~assets/images/service/wechat_icon.png') no-repeat;
        background-size: contain;
      }
      .wechat-QR {
        margin-top: 40 * @vmin;
        text-align: center;
        line-height: 1.5;
        font-size: 22 * @vmin;
        .QR-img-box {
          width: 231 * @vmin;
          height: 231 * @vmin;
          background-color: #fff;
          border-radius: 20 * @vmin;
          display: flex;
          align-items: center;
          justify-content: center;
          .QR-img-dowbload {
            font-size: 0;
          }
          .QR-img {
            width: 200 * @vmin;
            height: 200 * @vmin;
            background-color: cadetblue;
          }
        }
      }
      .wechat-text {
        margin-top: 10 * @vmin;
        .wechat-name {
          font-weight: bold;
        }
      }
    }
    .notice {
      .notice-content {
        margin-top: 20 * @vmin;
        font-size: 22 * @vmin;
        .notice-title {
          font-size: 22 * @vmin;
          text-align: center;
        }
        .notice-text {
          width: 340 * @vmin;
          margin-top: 10 * @vmin;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
