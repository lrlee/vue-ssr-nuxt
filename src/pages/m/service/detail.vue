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
.detail {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
