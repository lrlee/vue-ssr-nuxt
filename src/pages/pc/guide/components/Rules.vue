<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <p class="title-text">
        <span class="part-title-white">活动规则</span>
      </p>
    </div>
    <div class="content">
      <ul class="rules-detail">
        <li v-for="(item, index) in rulesOptions" :key="index" class="content-line">
          <div class="content-tag">{{ index + 1 }}</div>
          <div class="content-desc">{{ item }}</div>
        </li>
      </ul>
      <div class="rules-button">
        <div @click="openBookPop" class="book-button btn"></div>
        <div class="book-text">指尖泡泡一触即发</div>
      </div>
      <div class="aircraft"></div>
    </div>
    <div class="code-parent">
      <ul class="code-item-parent">
        <li v-for="(item, index) in codeOptions" :key="index" class="code-item">
          <img :src="item.bg" class="code-bg" />
          <img :src="item.img" class="code-detail" />
          <div v-if="item.text" v-html="item.text" class="code-text"></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const rulesOptions = [
  '活动时间： XXXX年XX月XX日起至XXXX年XX月XX日当天XX点结束；',
  '本次首测为删档测试，仅限安卓用户参与，iOS用户敬请期待；',
  '游戏内奖励均通过游戏邮件形式发放，请进入游戏内领取，届时请关注官网公告信息与游戏内公告；',
  '用户使用刷奖软件，雇佣他人参加活动等任何不正当手段或违法违规行为，活动参与资格和获奖资格将被取消；',
  '若因不可抗拒的因素，比如网络、作弊等非官方原因导致活动出现异常情况，《全民泡泡超人》保留在法律允许的范围内，对活动规则进行解释的权利。'
]
export default {
  props: {
    contactsInfo: {
      default() {
        return {
          woa: {
            qrcode: undefined,
            desc: undefined
          },
          weibo: {
            qrcode: undefined,
            desc: undefined
          },
          qqgroup: {
            qrcode: undefined,
            desc: undefined
          }
        }
      },
      type: Object
    }
  },
  data() {
    return {
      rulesOptions,
      codeOptions: [
        {
          bg: require('~/assets/images/pc/guide/rules/wx_bg.png'),
          text: this.contactsInfo.woa.desc,
          img: this.contactsInfo.woa.qrcode
        },
        {
          bg: require('~/assets/images/pc/guide/rules/wb_bg.png'),
          text: this.contactsInfo.weibo.desc,
          img: this.contactsInfo.weibo.qrcode
        },
        {
          bg: require('~/assets/images/pc/guide/rules/qq_bg.png'),
          text: this.contactsInfo.qqgroup.desc,
          img: this.contactsInfo.qqgroup.qrcode
        }
      ]
    }
  },
  methods: {
    openBookPop() {
      this.$emit('openBookPop')
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
.part-container {
  position: relative;
  margin-top: 186 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    width: 1207 * @vw;
    margin-top: 76 * @vw;
    display: flex;
    position: relative;
    .rules-detail {
      flex-grow: 1;
      .content-line {
        display: flex;
        .content-tag {
          display: inline-block;
          width: 15 * @vw;
          height: 18 * @vw;
          background: url('~assets/images/pc/guide/rules/tag_icon.png') no-repeat;
          background-size: contain;
          line-height: 20 * @vw;
          font-size: 12 * @vw;
          color: #001b52;
          text-align: center;
          transform: translateY(5 * @vw);
        }
        .content-desc {
          max-width: 707 * @vw;
          font-size: 14 * @vw;
          color: #61baff;
          margin-left: 6 * @vw;
          line-height: 2;
        }
      }
    }
    .rules-button {
      .book-button {
        width: 269 * @vw;
        height: 112 * @vw;
        margin-top: 7 * @vw;
        background: url('~assets/images/pc/guide/rules/book_normal.png') no-repeat;
        background-size: contain;
        &:hover {
          background: url('~assets/images/pc/guide/rules/book_hover.png') no-repeat;
          background-size: contain;
        }
      }
      .book-text {
        width: 269 * @vw;
        font-size: 19 * @vw;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
      }
    }
    .aircraft {
      position: absolute;
      width: 147 * @vw;
      height: 178 * @vw;
      top: -83 * @vw;
      right: 227 * @vw;
      background: url('~assets/images/pc/guide/rules/aircraft.png') no-repeat;
      background-size: contain;
    }
  }
  .code-parent {
    width: 1207 * @vw;
    height: 337 * @vw;
    .code-item-parent {
      display: flex;
      justify-content: space-between;
      .code-item {
        width: 250 * @vw;
        height: 337 * @vw;
        position: relative;
        .code-bg {
          width: 200 * @vw;
          height: 210 * @vw;
        }
        .code-detail {
          position: absolute;
          top: -1 * @vw;
          right: 0;
          width: 200 * @vw;
          height: 200 * @vw;
        }
        .code-text {
          margin-top: 7 * @vw;
          font-size: 14 * @vw;
          color: #ffffff;
          text-align: center;
        }
      }
    }
  }
  @media (min-width: 1280px) {
    .code-parent {
      margin-top: 10 * @vw;
      .code-text {
        width: 320 * @vw;
      }
    }
  }

  @media (min-width: 1440px) {
    .code-parent {
      margin-top: 67 * @vw;
      .code-text {
        width: 280 * @vw;
      }
    }
  }
  @media (min-width: 1600px) {
    .code-parent {
      margin-top: 97 * @vw;
      .code-text {
        width: 250 * @vw;
      }
    }
  }
}
</style>
