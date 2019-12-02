<template>
  <div class="container">
    <Header :isIOS="isIOS"></Header>
    <div class="main">
      <Nav :select="type"></Nav>
      <div id="fixed-content" class="content">
        <div id="actual-content" @scroll="handleScroll" class="content-bg">
          <div class="txt-img"></div>
          <Main :select="type" :isIOS="isIOS"></Main>
          <div class="bottom-space"></div>
        </div>
        <div :class="['scroll-top-tips', { hide: hideScroll }]"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Main from './components/Main'
import Header from './components/Header'
import Nav from './components/Nav'
export default {
  layout: 'mobileOneScreen',
  components: {
    Main,
    Header,
    Nav
  },
  data() {
    return {
      type: '1',
      hideScroll: true
    }
  },
  // 用于在渲染页面前填充应用的状态树数据，与asyncData的方法类似，不同的是 ？它不会设置组件的数据
  async fetch({ store, params }) {
    await store.dispatch('getDownloadLinks')
  },
  created() {
    this.type = this.$route.params.type
  },
  mounted() {
    const fixHeight = document.getElementById('fixed-content').offsetHeight
    const actualHeight = document.getElementById('actual-content').scrollHeight
    this.hideScroll = fixHeight > actualHeight
  },
  methods: {
    handleScroll() {
      this.hideScroll = true
    }
  },
  computed: {
    ...mapState(['userAgent']),
    isIOS() {
      return /\(i[^;]+;( u;)? cpu.+mac os x/.test(this.userAgent.toLowerCase())
    }
  }
}
</script>
<style lang="less" scoped>
@vh: 1vh/13.34;
@r: 1vw/ 7.5;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
@keyframes moveTotop {
  0% {
    transform: translateY(0);
  }
  70% {
    transform: translateY(-50%);
  }
  100% {
    transform: translateY(0);
  }
}
.container {
  height: 100%;
  width: 750 * @r;
  .flex-column-center;
  background: url('~assets/images/event/m_event_bg.jpg') center no-repeat;
  background-size: cover;
}
.main {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
}

.content {
  width: 705 * @r;
  height: 1199 * @vh;
  background: url('~assets/images/event/pp_bg.png') repeat;
  border-top-left-radius: 20 * @r;
  border-top-right-radius: 20 * @r;
  position: relative;
  .scroll-top-tips {
    position: absolute;
    right: 13 * @r;
    top: 50%;
    width: 99 * @r;
    height: 129 * @r;
    background: url('~assets/images/event/scroll_top.png') no-repeat;
    background-size: contain;
    z-index: 999;
    animation: moveTotop 2s infinite;
  }
  .content-bg {
    border: 12 * @r solid transparent;
    overflow-y: auto;
    width: 705 * @r;
    height: 1199 * @vh;
    border-image: url('~assets/images/event/main_bk.png') 12 stretch;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    padding: 0 14 * @r;
    .bottom-space {
      width: 100%;
      height: 121 * @r;
    }
    .txt-img {
      width: 469 * @r;
      height: 176 * @r;
      margin-top: 12 * @r;
      background: url('~assets/images/event/content_txt.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
