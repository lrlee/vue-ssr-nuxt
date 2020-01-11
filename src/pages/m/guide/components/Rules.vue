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
    </div>
    <div class="code-parent">
      <ul class="code-item-parent">
        <a :href="contactsInfo.woa.qrcode" download>
          <li class="code-item">
            <img :src="codeOptions[0].bg" class="code-icon" />
            <span class="code-bg-text">{{ codeOptions[0].bgText }} </span>
          </li>
        </a>
        <a target="_blank" href="https://weibo.com/u/7054585490?is_hot=1">
          <li class="code-item">
            <img :src="codeOptions[1].bg" class="code-icon" />
            <span class="code-bg-text">{{ codeOptions[1].bgText }} </span>
          </li>
        </a>
        <a :href="isIos ? qqLink_ios : qqLink_android" target="_blank">
          <li class="code-item">
            <img :src="codeOptions[2].bg" class="code-icon" />
            <span class="code-bg-text">{{ codeOptions[2].bgText }} </span>
          </li>
        </a>
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
      type: Object,
      default: null
    }
  },
  data() {
    return {
      qqLink_android:
        'mqqopensdkapi://bizAgent/qm/qr?url=http%3A%2F%2Fqm.qq.com%2Fcgi-bin%2Fqm%2Fqr%3Ffrom%3Dapp%26p%3Dandroid%26k%3DFxcq8VEqYXoAQBq4IfJKvHAs4NnEU4eb',
      qqLink_ios:
        'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=707841609&key=50569d2d089dfffdac32cf1adfdd5be82c9c953e5cfc78d80616551b63f2fe5e&card_type=group&source=external',
      rulesOptions,
      codeOptions: [
        {
          bg: require('~/assets/images/guide/m/wx_icon.png'),
          bgText: '官方公众号'
        },
        {
          bg: require('~/assets/images/guide/m/wb_icon.png'),
          bgText: '官方微博'
        },
        {
          bg: require('~/assets/images/guide/m/qq_icon.png'),
          bgText: '官方交流群'
        }
      ]
    }
  },
  computed: {
    isIos() {
      return /like mac os x/i.test(this.$store.state.userAgent)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.part-container {
  position: relative;
  margin-top: 103 * @vw;
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
    width: 694 * @vw;
    margin-top: 60 * @vw;
    display: flex;
    position: relative;
    .rules-detail {
      flex-grow: 1;
      .content-line {
        display: flex;
        .content-tag {
          display: inline-block;
          width: 24 * @vw;
          height: 28 * @vw;
          background: url('~assets/images/guide/rules/tag_icon.png') no-repeat;
          background-size: contain;
          line-height: 25 * @vw;
          font-size: 24 * @vw;
          color: #001b52;
          text-align: start;
          padding-left: 4 * @vw;
          padding-top: 3 * @vw;
          font-family: Arial;
          transform: translateY(8 * @vw);
        }
        .content-desc {
          max-width: 666 * @vw;
          font-size: 24 * @vw;
          color: #61baff;
          margin-left: 6 * @vw;
          line-height: 1.6;
        }
      }
    }
  }
  .code-parent {
    width: 694 * @vw;
    height: 80 * @vw;
    margin-top: 81 * @vw;
    .code-item-parent {
      display: flex;
      justify-content: space-between;
      .code-item {
        width: 218 * @vw;
        height: 80 * @vw;
        display: flex;
        align-items: center;
        position: relative;
        background: url('~assets/images/guide/m/contact_btn_bg.png') no-repeat;
        background-size: contain;
        &::after {
          content: '';
          background-image: url('~assets/images/guide/m/contact_btn_tap_bg.png');
        }
        &:active {
          background-image: url('~assets/images/guide/m/contact_btn_tap_bg.png');
        }
        .code-icon {
          height: 24 * @vw;
          margin-left: 23 * @vw;
        }
        .code-bg-text {
          font-size: 24 * @vw;
          color: #ffffff;
          margin-left: 11 * @vw;
        }
        &:nth-child(1) {
          .code-icon {
            width: 31 * @vw;
            margin-left: 21 * @vw;
          }
        }
        &:nth-child(2) {
          .code-icon {
            width: 30 * @vw;
            margin-left: 35 * @vw;
          }
        }
        &:nth-child(3) {
          .code-bg-text {
            margin-left: 13 * @vw;
          }
        }
      }
    }
  }
}
</style>
