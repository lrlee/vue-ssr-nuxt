<template>
  <div class="part-container">
    <div class="top">
      <div class="title part-title-type2">
        <div class="title-order"></div>
        <p class="title-text">
          <span class="part-title-white">呼朋唤友</span><span class="part-title-yellow">领福利</span>
        </p>
      </div>
      <p class="top-note">活动期间，成功邀请对应数量好友完成预约，可累计领取对应的邀请预约礼</p>
    </div>
    <div class="content">
      <div :class="{ light: invitedNum > 0 }" class="wire wire1"></div>
      <div :class="{ light: invitedNum > 2 }" class="wire wire2"></div>
      <div :class="{ light: invitedNum > 4 }" class="wire wire3"></div>
      <div :class="{ light: invitedNum > 7 }" class="wire wire4"></div>
      <ul class="gift-list">
        <li :class="{ light: invitedNum > 0 }" class="gift-item light">
          <div class="gift-box">
            <div v-if="part3Data[0] && part3Data[0].awards" class="gift-wrapper">
              <img :src="part3Data[0].awards[0].pic" class="gift-pic" />
              <p class="gift-name">
                {{ $t('game.' + checkSafeData(part3Data[0].awards[0].name, 'key')) }}
                x
                {{ part3Data[0].awards[0].amount }}
              </p>
              <div class="gift-label">邀请1位好友</div>
              <div class="paopao-pic"></div>
            </div>
          </div>
        </li>
        <li :class="{ light: invitedNum > 2 }" class="gift-item">
          <div class="gift-box">
            <div v-if="part3Data[1] && part3Data[1].awards" class="gift-wrapper">
              <img :src="part3Data[1].awards[0].pic" class="gift-pic" />
              <p class="gift-name">
                {{ $t('game.' + checkSafeData(part3Data[1].awards[0].name, 'key')) }}
                x
                {{ part3Data[1].awards[0].amount }}
              </p>
              <div class="gift-label">邀请3位好友</div>
              <div class="paopao-pic"></div>
            </div>
          </div>
        </li>
        <li :class="{ light: invitedNum > 4 }" class="gift-item">
          <div class="gift-box">
            <div v-if="part3Data[2] && part3Data[2].awards" class="gift-wrapper">
              <img :src="part3Data[2].awards[0].pic" class="gift-pic" />
              <p class="gift-name">
                {{ $t('game.' + checkSafeData(part3Data[2].awards[0].name, 'key')) }}
                x
                {{ part3Data[2].awards[0].amount }}
              </p>
              <div class="gift-label">邀请5位好友</div>
              <div class="paopao-pic"></div>
            </div>
          </div>
        </li>
        <li :class="{ light: invitedNum > 7 }" class="gift-item">
          <div class="gift-box">
            <div v-if="part3Data[3] && part3Data[3].awards" class="gift-wrapper">
              <img :src="part3Data[3].awards[0].pic" class="gift-pic" />
              <p class="gift-name">
                {{ $t('game.' + checkSafeData(part3Data[3].awards[0].name, 'key')) }}
                x
                {{ part3Data[3].awards[0].amount }}
              </p>
              <div class="gift-label">邀请8位好友</div>
              <div class="paopao-pic"></div>
            </div>
          </div>
        </li>
      </ul>
      <div class="invite-count">
        <div class="invite-doll"></div>
        <div class="invite-board">
          <p class="invite-text">
            您已邀请
            <span class="invite-num">{{ invitedNum }}位</span>
            好友
          </p>
          <div class="invite-btn-box">
            <div @click="openBookPop" class="invite-btn btn">
              <span class="text">立即邀请</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { checkSafeData } from '@/utils/common'
export default {
  props: {
    invitedNum: {
      type: Number,
      default: 0
    },
    part3Data: {
      type: Array || Object,
      default: null
    }
  },
  methods: {
    checkSafeData(param, key) {
      return checkSafeData(param, key)
    },
    openBookPop() {
      this.$emit('openBookPop')
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
@keyframes rise_paopao {
  from {
    transform: translateY(120 * @vw);
  }
  to {
    transform: translateY(-120 * @vw);
  }
}
@keyframes move_updown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10 * @vw);
  }
  100% {
    transform: translateY(0);
  }
}
.part-container {
  position: absolute;
  bottom: -450 * @vw;
  z-index: 2;
  width: 750 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 630 * @vw;
  .top {
    position: absolute;
    top: -520 * @vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .title {
      display: flex;
      justify-content: center;
      position: relative;
      .title-order {
        width: 108 * @vw;
        height: 28 * @vw;
        background: url('~assets/images/guide/part03.png') no-repeat;
        background-size: contain;
        position: absolute;
      }
      .title-text {
        font-size: 38 * @vw;
        line-height: 100 * @vw;
      }
    }
    .top-note {
      width: 468 * @vw;
      color: #fff;
      font-size: 24 * @vw;
      text-align: center;
      margin-top: 20 * @vw;
    }
  }
}
.content {
  width: 750 * @vw;
  height: 660 * @vw;
  background: url('~assets/images/guide/m/part3_bg.png') no-repeat;
  background-size: contain;
  position: relative;
  .wire {
    position: absolute;
    z-index: 2;
  }
  .wire1 {
    top: 90 * @vw;
    left: -28 * @vw;
    width: 396 * @vw;
    height: 92 * @vw;
    background: url('~assets/images/guide/m/wire1.png') no-repeat;
    background-size: contain;
    &.light {
      background-image: url('~assets/images/guide/m/wire1_light.png');
    }
  }
  .wire2 {
    top: 90 * @vw;
    right: -50 * @vw;
    width: 321 * @vw;
    height: 106 * @vw;
    background: url('~assets/images/guide/m/wire2.png') no-repeat;
    background-size: contain;
    &.light {
      background-image: url('~assets/images/guide/m/wire2_light.png');
    }
  }
  .wire3 {
    bottom: 70 * @vw;
    left: -108 * @vw;
    width: 259 * @vw;
    height: 35 * @vw;
    background: url('~assets/images/guide/m/wire3.png') no-repeat;
    background-size: contain;
    &.light {
      background-image: url('~assets/images/guide/m/wire3_light.png');
    }
  }
  .wire4 {
    bottom: 70 * @vw;
    right: -30 * @vw;
    width: 268 * @vw;
    height: 32 * @vw;
    background: url('~assets/images/guide/m/wire4.png') no-repeat;
    background-size: contain;
    &.light {
      background-image: url('~assets/images/guide/m/wire4_light.png');
    }
  }
  .gift-list {
    width: 100%;
    padding: 0 25 * @vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: absolute;
    z-index: 1;
    top: -340 * @vw;
    .gift-item {
      position: relative;
      width: 308 * @vw;
      height: 440 * @vw;
      display: flex;
      align-items: flex-end;
      z-index: 1;
      margin-bottom: 30 * @vw;
      .gift-box {
        width: 308 * @vw;
        height: 355 * @vw;
        background: url('~assets/images/guide/gift_part3_bg.png') no-repeat;
        background-size: contain;
        overflow: hidden;
        .gift-wrapper {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          padding-bottom: 65 * @vw;
          overflow: hidden;
          .gift-pic {
            opacity: 0.5;
            width: 120 * @vw;
          }
          .gift-name {
            margin-top: 5 * @vw;
            color: #1c3899;
            font-size: 16 * @vw;
            text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
          }
          .gift-label {
            margin-top: 11 * @vw;
            width: 144 * @vw;
            height: 41 * @vw;
            background: url('~assets/images/guide/gift_label_part3.png') no-repeat;
            background-size: contain;
            text-align: center;
            line-height: 41 * @vw;
            color: #054392;
            font-weight: bold;
            font-size: 16 * @vw;
          }
          .paopao-pic {
            width: 177 * @vw;
            height: 166 * @vw;
            background: url('~assets/images/guide/paopao_part3.png') no-repeat;
            background-size: contain;
            position: absolute;
            z-index: -1;
            animation: rise_paopao 8s linear infinite;
            display: none;
          }
        }
      }
      &.light {
        .gift-box {
          width: 308 * @vw;
          height: 440 * @vw;
          background: url('~assets/images/guide/gift_part3_bg_light.png') no-repeat;
          background-size: contain;
        }
        .gift-wrapper {
          .gift-pic {
            opacity: 1;
            animation: move_updown 3.5s ease infinite;
          }
          .paopao-pic {
            display: block;
          }
        }
      }
    }
  }
  .invite-count {
    position: absolute;
    z-index: 2;
    bottom: -183 * @vw;
    width: 750 * @vw;
    display: flex;
    justify-content: center;
    .invite-doll {
      position: relative;
      width: 268 * @vw;
      height: 280 * @vw;
      background: url('~assets/images/guide/robot_doll_part3.png') no-repeat;
      background-size: contain;
      z-index: 2;
    }
    .invite-board {
      position: relative;
      bottom: -45 * @vw;
      left: -40 * @vw;
      width: 283 * @vw;
      height: 232 * @vw;
      background: url('~assets/images/guide/invite_bg.png') no-repeat;
      background-size: contain;
      z-index: 1;
      .invite-text {
        width: 100%;
        text-align: center;
        margin-top: 50 * @vw;
        font-size: 18 * @vw;
        color: #fff;
        .invite-num {
          color: #fde436;
          font-weight: bold;
        }
      }
      .invite-btn-box {
        width: 100%;
        padding-left: 12 * @vw;
      }
      .invite-btn {
        margin: 10 * @vw auto 0 auto;
        width: 234.3 * @vw;
        height: 80 * @vw;
        background: url('~assets/images/guide/m/btn_invite_normal.png') no-repeat;
        background-size: contain;
        text-align: center;
        line-height: 80 * @vw;
        &:hover {
          background-image: url('~assets/images/guide/m/btn_invite_tap.png');
        }
        .text {
          color: #b36e11;
          font-weight: bold;
          font-size: 32 * @vw;
        }
      }
    }
  }
}
</style>
