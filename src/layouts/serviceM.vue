<template>
  <div class="container">
    <div class="main">
      <nuxt />
    </div>
    <div class="bottom-space"></div>
    <div class="bottom-wrapper">
      <div class="bottom-left">
        <div class="operate-btn back-btn" onclick="window.history.back()">
          <i class="icon icon-back"></i>
        </div>
        <div class="operate-btn next-btn" onclick="window.history.forward()">
          <i class="icon icon-next"></i>
        </div>
        <div class="operate-btn refresh-btn" onclick="window.location.reload()">
          <i class="icon icon-refresh"></i>
        </div>
      </div>
      <a href="uniwebview://close" class="back-to-game">
        <i class="icon icon-back-game"></i>
        <span class="link-back-game">返回游戏</span>
      </a>
    </div>
  </div>
</template>
<script>
import * as local from '@/utils/local'
export default {
  mounted() {
    const ip = this.$route.query.ip || ''
    if (ip) {
      local.setIP(ip)
    } else {
      local.removeIP()
    }
  }
}
</script>
<style lang="less">
@vw: 1vw/13.34;
@vh: 1vh/7.5;
@vmin: 1vmin/7.5;
@media screen and (orientation: landscape) {
  @vw: 1vw/13.34;
  @vmin: 1vmin/7.5;
}

@media screen and (orientation: portrait) {
  @vw: 1vw/7.5;
  @vmin: 1vmin/13.34;
  .tab {
    font-size: 26 * @vw !important;
    li.tab-item {
      flex: 1;
      padding: 0 !important;
      &:nth-last-child(2) {
        border-top-right-radius: 10 * @vmin;
      }
    }
    .tab-space {
      display: none !important;
    }
  }
  .content {
    padding-top: 20 * @vw;
  }
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
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url('~assets/images/service/index_bg.jpg') center no-repeat;
  background-size: cover;
  position: relative;
  .flex-column-center;
  justify-content: center;
  .err-pop {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.6);
    color: #fff;
    font-size: 28 * @vmin;
    text-align: center;
    max-width: 400 * @vmin;
    padding: 20 * @vmin;
    border-radius: 10 * @vmin;
  }
  .main {
    position: relative;
    width: 1274 * @vw;
    height: 622 * @vh;
    background-color: rgba(10, 37, 57, 0.5);
    border: 1px solid rgb(35, 132, 202);
    border-radius: 10 * @vmin;
    color: #f4f4f4;
    .nav {
      width: 100%;
      height: 90 * @vh;
      border-top-left-radius: 10 * @vmin;
      border-top-right-radius: 10 * @vmin;
    }
    .tab {
      height: 100%;
      width: 100%;
      font-size: 28 * @vmin;
      display: flex;
      align-items: center;
      .tab-space {
        flex: 2;
        height: 100%;
        background-color: rgb(10, 37, 57);
        opacity: 0.6;
        border-top-right-radius: 10 * @vmin;
      }
      .tab-item {
        background-color: rgb(10, 37, 57);
        position: relative;
        display: block;
        line-height: 90 * @vh;
        padding: 0 59 * @vw;
        opacity: 0.6;
        text-align: center;
        transition: all 0.3s linear;
        &:first-of-type {
          border-top-left-radius: 10 * @vmin;
        }
        .line {
          transition: all 0.3s linear;
          position: absolute;
          width: 36 * @vmin;
          height: 6 * @vmin;
          border-radius: 3px;
          background-color: #ffca14;
          bottom: 10 * @vmin;
          left: 50%;
          transform: translateX(-50%);
          opacity: 0;
        }
        &.active {
          opacity: 1;
          background-color: transparent;
          .line {
            opacity: 1;
          }
        }
      }
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
    .toTop-icon {
      position: absolute;
      bottom: 30 * @vh;
      right: 20 * @vw;
      width: 70 * @vmin;
      height: 70 * @vmin;
      background: url('~assets/images/service/toTop_normal.png') no-repeat;
      background-size: contain;
      z-index: 99;
      cursor: pointer;
      &::after {
        content: '';
        background-image: url('~assets/images/service/toTop_tap.png');
      }
      &:active {
        background-image: url('~assets/images/service/toTop_tap.png');
      }
    }
    .content {
      width: 100%;
      height: 530 * @vh;
      box-sizing: border-box;
      font-size: 26 * @vmin;
      position: relative;
      overflow: auto;
      .contact-animation {
        position: absolute;
        bottom: 46 * @vh;
        right: 118 * @vw;
        width: 130px * 0.5;
        height: 164px * 0.5;
        background: url('~assets/images/service/contact_animation.png');
        background-size: cover;
        background-position: 0;
        animation: contactA 1.8s infinite steps(32, end);
        // transform: scale(0.5);
      }
      @keyframes contactA {
        0% {
          background-position: 0;
        }
        100% {
          background-position: 4160px * 0.5;
        }
      }
    }
    .contact-service-link {
      color: #ffca14;
      text-decoration: underline;
      transition: all 0.3s linear;
      margin-left: 3 * @vmin;
      &:active {
        color: #ffdc62;
      }
    }
    .QA-list {
      padding: 0 40 * @vw;
      .item-a {
        color: #fff;
      }
      .list-item {
        line-height: 83 * @vmin;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1 * @vmin solid #2384ca;
        &.contact-service {
          border-bottom: none;
        }
        .item-left {
          margin-left: 20 * @vmin;
        }
        .item-link {
          padding-right: 20 * @vmin;
          padding-left: 50 * @vmin;
          height: 82 * @vmin;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          .arrow_right {
            display: inline-block;
            width: 14 * @vmin;
            height: 25 * @vmin;
            background: url('~assets/images/service/arrow_right.png') no-repeat;
            background-size: contain;
          }
        }
        &.contact-service {
          height: 110 * @vmin;
          justify-content: flex-start;
        }
      }
    }
    .QA-answer {
      padding: 53 * @vmin 63 * @vmin;
      .question-text {
        color: yellow;
        margin-bottom: 20 * @vmin;
        font-size: 32 * @vmin;
      }
      .answer-text {
        word-break: break-all;
      }
      .QA-feedback {
        margin-top: 75 * @vmin;
        .feedback-btn {
          display: flex;
          .btn {
            width: 200 * @vmin;
            height: 74 * @vmin;
            border-radius: 4 * @vmin;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #a3d9ff;
            background-color: #148be0;
            margin-right: 60 * @vw;
            &:active {
              background-color: #1cabeb;
              color: #fff;
              .btn-resolve-icon {
                background-image: url('~assets/images/service/resolve_icon_tap.png');
              }
              .btn-unresolve-icon {
                background-image: url('~assets/images/service/unresolve_icon_tap.png');
              }
            }
            .icon {
              margin-right: 15 * @vw;
            }
            .btn-resolve-icon {
              width: 31 * @vmin;
              height: 32 * @vmin;
              background: url('~assets/images/service/resolve_icon_normal.png') no-repeat;
              background-size: contain;
            }
            .btn-unresolve-icon {
              width: 30 * @vmin;
              height: 31 * @vmin;
              background: url('~assets/images/service/unresolve_icon_normal.png') no-repeat;
              background-size: contain;
            }
          }
        }
      }
      .feedback-result {
        margin-top: 30 * @vmin;
        .success-icon {
          // vertical-align: middle;
          margin-right: 10 * @vmin;
          width: 22 * @vmin;
          height: 22 * @vmin;
          background: url('~assets/images/service/success-icon.png') no-repeat;
          background-size: contain;
        }
      }
    }
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
  .bottom-space {
    width: 100vw;
    height: 88 * @vh;
  }
  .bottom-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 88 * @vh;
    background-color: #464646;
    display: flex;
    justify-content: space-between;
    .bottom-left {
      display: flex;
    }
    .icon-back {
      width: 16 * @vmin;
      height: 33 * @vmin;
      background: url('./~assets/images/service/icon_back_normal.png') no-repeat;
      background-size: contain;
    }
    .icon-next {
      width: 16 * @vmin;
      height: 33 * @vmin;
      background: url('./~assets/images/service/icon_next_normal.png') no-repeat;
      background-size: contain;
    }
    .icon-refresh {
      width: 35 * @vmin;
      height: 35 * @vmin;
      background: url('./~assets/images/service/icon_refresh_normal.png') no-repeat;
      background-size: contain;
    }
    .operate-btn {
      height: 88 * @vh;
      padding: 0 70 * @vw;
      display: flex;
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
      }
      .icon {
        margin: auto;
      }
    }
    .back-to-game {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 49 * @vw;
      .icon-back-game {
        width: 38 * @vmin;
        height: 35 * @vmin;
        background: url('~assets/images/service/icon_back_game.png') no-repeat;
        background-size: contain;
        margin-right: 20 * @vmin;
      }
      .link-back-game {
        font-size: 34 * @vmin;
        color: #fff;
      }
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>
