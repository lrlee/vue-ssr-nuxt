<template>
  <div class="part-container">
    <div class="pipe2"></div>
    <div class="title part-title-type1">
      <div class="title-order"></div>
      <p id="part1" class="title-text">
        <span class="part-title-white">超人预约</span><span class="part-title-yellow">见面礼</span>
      </p>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <p class="content-title"><span class="title-text">预约即得，人人有份</span></p>
        <ul class="gift-list">
          <template v-for="(gift, index) in part1Data">
            <li v-if="index < 5" :key="index" :class="'gift' + (index + 1)" class="gift-item">
              <div class="gift-pic-box">
                <img :src="part1Data[index].pic" class="gift-pic" />
              </div>
              <p class="gift-name">
                {{ $t('game.' + checkSafeData(part1Data[index].name, 'key')) }}
              </p>
              <div class="ribbon-icon">
                <span>x{{ part1Data[index].amount }}</span>
              </div>
              <div v-if="part1Data[index].major" class="label-major"></div>
            </li>
          </template>
        </ul>
        <div class="book-btn-box">
          <div @click="openBookPop" class="book-btn btn">
            立即预约
          </div>
        </div>
        <div class="part-description">
          <i class="description-order-icon icon"></i>
          <p class="description-text">
            活动期间，使用手机号码成功预约的玩家，进入游戏点击系统邮件可领取“预约见面礼包”x1，开启后可获得丰厚奖励，每个手机号码仅可预约1次。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { checkSafeData } from '@/utils/common'
export default {
  props: {
    part1Data: {
      type: Array || Object,
      required: true,
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
.part-container {
  position: relative;
  z-index: 2;
  margin-top: 100 * @vw;
  width: 750 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pipe2 {
    position: absolute;
    top: 820 * @vw;
    right: 0;
    width: 91 * @vw;
    height: 761 * @vw;
    background: url('~assets/images/guide/m/pipe2.png') no-repeat;
    background-size: contain;
  }
  .title {
    display: flex;
    justify-content: center;
    transform: translateY(40 * @vw);
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part01.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      font-size: 38 * @vw;
      line-height: 100 * @vw;
    }
  }
}
.content {
  width: 720 * @vw;
  height: 1072 * @vw;
  background: url('~assets/images/guide/m/part1_bg.png') no-repeat;
  background-size: contain;
  .content-wrapper {
    width: 100%;
    padding: 0 20 * @vw 0 30 * @vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .content-title {
    width: 571 * @vw;
    height: 50 * @vw;
    margin-top: 102 * @vw;
    text-align: center;
    background: url('~assets/images/guide/m/line_part1.png') center center no-repeat;
    background-size: 100%;
    .title-text {
      padding-right: 20 * @vw;
      font-size: 28 * @vw;
      font-weight: bold;
      color: #fefda4;
      line-height: 50 * @vw;
      text-shadow: #012e65 1px 0 0, #012e65 0 1px 0, #012e65 -1px 0 0, #012e65 0 -1px 0;
    }
  }
  .gift-list {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 31 * @vw;
    .gift-item {
      position: relative;
      width: 182 * @vw;
      height: 246 * @vw;
      background: url('~assets/images/guide/gift3_bg_part1.png') no-repeat;
      background-size: contain;
      margin: 0 18 * @vw 54 * @vw 18 * @vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      .gift-pic-box {
        height: 160 * @vw;
        width: 182 * @vw;
        display: flex;
        align-items: center;
        justify-content: center;
        .gift-pic {
          width: 110 * @vw;
        }
      }
      .gift-name {
        text-align: center;
        color: #0065aa;
        font-size: 24 * @vw;
        font-weight: bold;
        line-height: 1.5;
      }
      .ribbon-icon {
        width: 140 * @vw;
        height: 42 * @vw;
        background: url('~assets/images/guide/ribbon_part1.png') no-repeat;
        background-size: contain;
        text-align: center;
        font-size: 24 * @vw;
        color: #fff;
        font-weight: bold;
        text-shadow: #28a001 1px 0 0, #28a001 0 1px 0, #28a001 -1px 0 0, #28a001 0 -1px 0;
      }
      .label-major {
        position: absolute;
        top: 0;
        left: 12 * @vw;
        width: 37 * @vw;
        height: 60 * @vw;
        background: url('~assets/images/guide/label_major_part1.png') no-repeat;
        background-size: contain;
      }
    }
  }
  .book-btn-box {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: -15 * @vw;
    .book-btn {
      width: 282 * @vw;
      height: 96 * @vw;
      background: url('~assets/images/guide/m/btn_book_normal.png') no-repeat;
      background-size: contain;
      text-align: center;
      line-height: 78 * @vw;
      color: #b36e11;
      font-size: 32 * @vw;
      font-weight: bold;
      &:active {
        background-image: url('~assets/images/guide/m/btn_book_tap.png');
      }
    }
  }
}
</style>
