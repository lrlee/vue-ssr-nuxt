<template>
  <div @wheel.prevent class="pop">
    <div class="pop-content">
      <i @click="closeGiftPop" class="close-icon icon"></i>
      <i v-if="isAcheived" class="light-icon icon"></i>
      <i v-if="isAcheived" class="rotate-light-icon icon"></i>
      <i v-if="isAcheived" class="seal-icon icon"></i>
      <div class="pop-box">
        <p class="gift-title">
          预约热力值<span class="book-num">{{ stepNum }}</span
          ><span class="num-unit">w</span>福利礼包
        </p>
        <ul v-if="giftData" class="gift-list">
          <li v-for="(gift, index) in giftData.awards" :key="index" class="gift-item">
            <div :class="{ major: gift.major }" class="gift-box">
              <div v-if="gift.tag" class="gift-label">
                <span class="label-text">{{ gift.tag }}</span>
              </div>
              <img :src="gift.pic" class="gift-pic" />
              <span class="gift-num">x{{ gift.amount }}</span>
            </div>
            <p :title="$t('game.' + checkSafeData(gift.name, 'key'))" class="gift-name">
              {{ $t('game.' + checkSafeData(gift.name, 'key')) }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { checkSafeData } from '@/utils/common'
export default {
  props: {
    giftData: {
      type: Object,
      default: null
    },
    bookedTotal: {
      type: Number,
      default: 0
    }
  },
  computed: {
    stepNum() {
      return this.giftData ? this.giftData.marker.slice(0, -1) : null
    },
    isAcheived() {
      return +this.stepNum * 10000 <= this.bookedTotal
    }
  },
  methods: {
    checkSafeData(param, key) {
      return checkSafeData(param, key)
    },
    closeGiftPop() {
      this.$emit('closeGiftPop')
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
.pop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.pop-content {
  width: 646 * @vw;
  height: 775 * @vw;
  position: relative;
  display: flex;
  justify-content: center;
  animation: scale 0.3s cubic-bezier(0.31, 0.95, 0.65, 1.23);
  @keyframes scale {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  .close-icon {
    width: 112 * @vw;
    height: 103 * @vw;
    background: url('~assets/images/guide/m/pop_gift/close_icon.png') no-repeat;
    background-size: contain;
    position: absolute;
    bottom: -95 * @vw;
    right: 17 * @vw;
    z-index: 1;
    visibility: hidden;
    animation: toDown 1s 0.3s;
    animation-fill-mode: forwards;
    @keyframes toDown {
      0% {
        visibility: visible;
        transform: translateY(-100 * @vw);
      }
      25% {
        visibility: visible;
        transform: translateY(0);
      }
      50% {
        visibility: visible;
        transform: rotate(-5deg);
      }
      100% {
        visibility: visible;
        transform: rotate(0);
      }
    }
  }
  .light-icon {
    width: 717 * @vw;
    height: 384 * @vw;
    background: url('~assets/images/guide/m/pop_gift/light.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: -95 * @vw;
    z-index: 1;
    animation: lightFlash 3s infinite;
    @keyframes lightFlash {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
  .rotate-light-icon {
    width: 617 * @vw;
    height: 617 * @vw;
    background: url('~assets/images/guide/m/pop_gift/rotate_light.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: -95 * @vw;
    z-index: 1;
    animation: lightRotate 6s linear infinite;
    @keyframes lightRotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
  .seal-icon {
    width: 120 * @vw;
    height: 106 * @vw;
    background: url('~assets/images/guide/m/pop_gift/seal_icon.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: 143 * @vw;
    right: 56 * @vw;
    z-index: 3;
  }
  .pop-box {
    width: 646 * @vw;
    height: 775 * @vw;
    background: url('~assets/images/guide/m/pop_gift/pop_bg.png') no-repeat;
    background-size: contain;
    position: relative;
    z-index: 2;
    padding-top: 213 * @vw;
    .gift-title {
      width: 100%;
      text-align: center;
      font-size: 38 * @vw;
      color: #6f3601;
      line-height: 95 * @vw;
      background: linear-gradient(0deg, rgba(111, 54, 1, 1) 0%, rgba(208, 135, 6, 1) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      .book-num {
        font-weight: bold;
        font-size: 72 * @vw;
      }
      .num-unit {
        font-weight: bold;
        font-size: 50 * @vw;
      }
    }
    .gift-list {
      width: 646 * @vw;
      margin-top: 40 * @vw;
      padding: 0 55 * @vw;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      pointer-events: none;
      .gift-item {
        width: 170 * @vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 55 * @vw;
        .gift-box {
          position: relative;
          width: 132 * @vw;
          height: 135 * @vw;
          background: url('~assets/images/guide/m/pop_gift/gift_bg.png') no-repeat;
          background-size: contain;
          display: flex;
          align-items: center;
          justify-content: center;
          .gift-pic {
            width: 84 * @vw;
          }
          .gift-label {
            position: absolute;
            top: 0;
            right: 0;
            width: 66 * @vw;
            height: 32 * @vw;
            background-color: #ff5757;
            border-radius: 0 9 * @vw 0 12 * @vw;
            text-align: center;
            line-height: 32 * @vw;
            .label-text {
              color: #fff;
              font-size: 24 * @vw;
              display: inline-block;
              max-width: 50 * @vw;
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
            }
          }
          .gift-num {
            position: absolute;
            color: #fff;
            font-size: 20 * @vw;
            bottom: 10 * @vw;
            right: 10 * @vw;
            text-shadow: #6f3601 1 * @vw 0 0, #6f3601 0 1 * @vw 0, #6f3601 -1 * @vw 0 0, #6f3601 0 -1 * @vw 0;
          }
        }
        .gift-name {
          width: 152 * @vw;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 24 * @vw;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          text-shadow: #6f3601 1 * @vw 0 0, #6f3601 0 1 * @vw 0, #6f3601 -1 * @vw 0 0, #6f3601 0 -1 * @vw 0;
        }
      }
    }
  }
}
</style>
