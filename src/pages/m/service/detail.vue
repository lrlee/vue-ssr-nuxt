<template>
  <div class="detail">
    <div class="nav detail-top">
      <p class="title">{{ title }}</p>
      <nuxt-link :to="`/m/service?ip=${ip}`" class="home-link">
        <span class="home-icon"></span>
        <span class="home-name">首页</span>
      </nuxt-link>
    </div>
    <div class="toTop-icon hide"></div>
    <div class="content">
      <div class="QA-answer">
        <p class="question-text">Q: {{ detailInfo.title }}</p>
        <p class="answer-text">A: <span v-html="detailInfo.description"></span></p>
        <div class="QA-feedback">
          <div v-if="!isSubmited" class="feedback-btn">
            <div @click="feedback(true)" class="btn resolve-btn">
              <span class="icon btn-resolve-icon"></span>
              <span>已解决</span>
            </div>
            <div @click="feedback(false)" class="btn unresolve-btn">
              <span class="icon btn-unresolve-icon"></span>
              <span>未解决</span>
            </div>
          </div>
          <div v-else class="feedback-result">
            <span v-if="feedbackBool" class="resolve-result"
              ><span class="icon success-icon"></span>评价已提交，感谢您的反馈！</span
            >
            <span v-else class="unresolve-result"
              ><span class="icon success-icon"></span>评价已提交，若以上内容没有帮助，请点击<nuxt-link
                :to="`/m/service/contact?ip=${ip}`"
                class="contact-service-link"
                >联系客服</nuxt-link
              ></span
            >
          </div>
        </div>
      </div>
    </div>
    <div v-if="showErr" class="err-pop">操作频繁，1分钟后重试</div>
  </div>
</template>
<script>
import { getQADetailById, feedbackQA } from '~/api/service'
import * as local from '@/utils/local'
export default {
  layout: 'serviceM',
  data() {
    return {
      ip: '',
      showErr: false,
      isSubmited: false, // 反馈是否提交
      feedbackBool: false // 提交反馈值 true 已解决/false 未解决
    }
  },
  computed: {
    isIos() {
      return /like mac os x/i.test(this.$store.state.userAgent)
    }
  },
  asyncData({ route }) {
    const id = route.params.id
    const title = route.query.type + (+route.query.index + 1)
    return getQADetailById(id).then(res => {
      const detailInfo = res.data
      return {
        title,
        id,
        detailInfo
      }
    })
  },
  mounted() {
    this.ip = local.getIP() || ''
  },
  methods: {
    feedback(solved) {
      this.feedbackBool = solved
      const ip = this.ip || '0.0.0.0'
      const platform = this.isIos ? 'ios' : 'android'
      const params = {
        platform,
        client_ip: ip,
        qid: this.id,
        solved
      }
      feedbackQA(params).then(res => {
        if (res.code === 0) {
          this.isSubmited = true
        } else if (res.code === 400) {
          this.showErr = true
          this.isSubmited = false
          setTimeout(() => {
            this.showErr = false
          }, 1500)
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/13.34;
@vh: 1vh/7.5;
@vmin: 1vmin/7.5;
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  .contact-service-link {
    color: #ffca14;
    text-decoration: underline;
    transition: all 0.3s linear;
    margin-left: 3 * @vmin;
    &:active {
      color: #ffdc62;
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
}
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
</style>
