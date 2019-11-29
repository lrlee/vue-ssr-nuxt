<template>
  <div>
    <header class="header">
      <!-- <div class="header-space"></div> -->
      <div class="header-container">
        <div class="header-left">
          <img src="@/assets/images/logo.png" class="download-logo" />
          <div class="left-text">
            <p class="text-title">泡泡超人</p>
            <p class="text-brief">全民休闲竞技手游</p>
          </div>
        </div>
        <div class="header-right">
          <span @click="toDownload" class="download-btn"></span>
          <span @click="showShare = true" class="share-icon"></span>
        </div>
      </div>
    </header>
    <div v-show="showShare" class="share-container">
      <div @click="showShare = false" class="share-mask"></div>
      <div class="share-content">
        <div class="content-main">
          <p class="title">分享到</p>
          <ul class="share-btn">
            <li @click="callShare('qqFriend')" class="btn-item" data-type="qqFriend">
              <span class="icon icon-qq"></span>
              <p class="icon-name">QQ好友</p>
            </li>
            <li @click="callShare('wechatFriend')" class="btn-item" data-type="wechatFriend">
              <span class="icon icon-wechat"></span>
              <p class="icon-name">微信好友</p>
            </li>
            <li @click="callShare('wechatTimeline')" class="btn-item" data-type="wechatTimeline">
              <span class="icon icon-wechatTimeline"></span>
              <p class="icon-name">朋友圈</p>
            </li>
            <li @click="callShare('weibo')" class="btn-item" data-type="weibo">
              <span class="icon icon-weibo"></span>
              <p class="icon-name">新浪微博</p>
            </li>
            <li @click="callShare('qZone')" class="btn-item" data-type="qZone">
              <span class="icon icon-qZone"></span>
              <p class="icon-name">QQ空间</p>
            </li>
          </ul>
        </div>
        <div @click="showShare = false" class="content-footer">
          <span>取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { downloadMicrospot } from '@/api'
export default {
  name: 'Header',
  head: {
    script: [{ src: '/js/NativeShare.min.js' }]
  },
  props: {
    isIOS: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      nativeShare: null,
      showShare: false
    }
  },
  computed: {
    ...mapState(['downloadLinks']),
    downloadLink() {
      if (this.isIOS) {
        return this.downloadLinks.ios_phone_link
      } else {
        return this.downloadLinks.android_link
      }
    }
  },
  mounted() {
    console.log(window.location.href)
    this.nativeShare = new NativeShare()
    const shareData = {
      title: '',
      desc: '',
      link: window.location.href,
      icon: '~assets/images/logo.png',
      // 不要过于依赖以下两个回调，很多浏览器是不支持的
      success: () => {
        console.log('success')
      },
      fail: () => {
        console.log('fail')
      }
    }
    this.nativeShare.setShareData(shareData)
  },
  methods: {
    callShare(type) {
      this.nativeShare.call(type)
    },
    toDownload() {
      downloadMicrospot().then(res => {
        if (this.isIOS) {
          window.open(this.downloadLink, '_blank')
        } else {
          window.open(this.downloadLink, '_self')
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
@r: 1vw/7.5;
.header {
  color: #fff;
  .header-space {
    height: 104 * @r;
  }
  .header-container {
    height: 104 * @r;
    width: 750 * @r;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 30 * @r;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-image: linear-gradient(90deg, #0f2e7a, #184088, #184088);
    border-bottom: 1 * @r solid #fed325;
    .header-left {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      .download-logo {
        width: 69 * @r;
        margin-top: 0;
      }
      .left-text {
        margin-left: 21 * @r;
        .text-title {
          font-size: 28 * @r;
        }
        .text-brief {
          font-size: 24 * @r;
          color: #6f9eff;
        }
      }
    }
    .header-right {
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      &::after {
        content: '';
        background-image: url('~assets/images/header/btn_tap.png'), url('~assets/images/header/share_icon_tap.png');
      }
      .download-btn {
        width: 156 * @r;
        height: 55 * @r;
        background: url('~assets/images/header/btn_normal.png') no-repeat;
        background-size: contain;
        transition: all 0.25s;
        &:active {
          background-image: url('~assets/images/header/btn_tap.png');
        }
      }
      .share-icon {
        margin-left: 40 * @r;
        width: 40 * @r;
        height: 40 * @r;
        background: url('~assets/images/header/share_icon_normal.png') no-repeat;
        background-size: contain;
        transition: all 0.25s;
        &:active {
          background-image: url('~assets/images/header/share_icon_tap.png');
        }
      }
    }
  }
}
.share-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  transition: all 0.25s;
  .share-mask {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
  }
  .share-content {
    position: fixed;
    bottom: 0;
    width: 750 * @r;
    height: 336 * @r;
    background-color: rgb(254, 254, 254);
    text-align: center;
    color: #a4a4a4;
    .content-main {
      .title {
        font-size: 28 * @r;
        line-height: 90 * @r;
      }
      .share-btn {
        height: 158 * @r;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .btn-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          &:active {
            .icon-name {
              color: #303030;
            }
            .icon {
              &.icon-qq {
                &:active {
                  background-image: url('~assets/images/header/icon_qq_tap.png');
                }
              }
              &.icon-wechat {
                &:active {
                  background-image: url('~assets/images/header/icon_wechat_tap.png');
                }
              }
              &.icon-wechatTimeline {
                &:active {
                  background-image: url('~assets/images/header/icon_wechatTimeline_tap.png');
                }
              }
              &.icon-weibo {
                &:active {
                  background-image: url('~assets/images/header/icon_weibo_tap.png');
                }
              }
              &.icon-qZone {
                &:active {
                  background-image: url('~assets/images/header/icon_qZone_tap.png');
                }
              }
            }
          }
          .icon {
            width: 74 * @r;
            height: 74 * @r;
            display: block;
            transition: all 0.25s;
            &.icon-qq {
              background: url('~assets/images/header/icon_qq_normal.png') no-repeat;
              background-size: contain;
              // 提前加载好图片
              &::after {
                content: '';
                background-image: url('~assets/images/header/icon_qq_tap.png');
              }
            }
            &.icon-wechat {
              background: url('~assets/images/header/icon_wechat_normal.png') no-repeat;
              background-size: contain;
              // 提前加载好图片
              &::after {
                content: '';
                background-image: url('~assets/images/header/icon_wechat_tap.png');
              }
            }
            &.icon-wechatTimeline {
              background: url('~assets/images/header/icon_wechatTimeline_normal.png') no-repeat;
              background-size: contain;
              // 提前加载好图片
              &::after {
                content: '';
                background-image: url('~assets/images/header/icon_wechatTimeline_tap.png');
              }
            }
            &.icon-weibo {
              background: url('~assets/images/header/icon_weibo_normal.png') no-repeat;
              background-size: contain;
              // 提前加载好图片
              &::after {
                content: '';
                background-image: url('~assets/images/header/icon_weibo_tap.png');
              }
            }
            &.icon-qZone {
              background: url('~assets/images/header/icon_qZone_normal.png') no-repeat;
              background-size: contain;
              // 提前加载好图片
              &::after {
                content: '';
                background-image: url('~assets/images/header/icon_qZone_tap.png');
              }
            }
          }
          .icon-name {
            font-size: 22 * @r;
            line-height: 50 * @r;
            transition: all 0.25s;
          }
        }
      }
    }
    .content-footer {
      line-height: 88 * @r;
      text-align: center;
      width: 750 * @r;
      font-size: 28 * @r;
      border-top: 1 * @r solid #a4a4a4;
      transition: all 0.25s;
      &:active {
        color: #303030;
      }
    }
  }
}
</style>
