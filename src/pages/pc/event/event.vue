<template>
  <div class="container event">
    <div class="main_event">
      <div class="nav-box">
        <div class="logo_icon"></div>
        <Nav :selectedType="type"></Nav>
      </div>
      <section class="content">
        <div class="txt_img"></div>
        <Content :selectedType="type"></Content>
      </section>
      <Download :selectedType="type" />
    </div>
    <Foot />
  </div>
</template>
<script>
import Nav from './components/Nav'
import Content from './components/Content'
import Download from './components/Download'
import Foot from '@/components/pc/Foot'
export default {
  layout: 'oneScreen',
  components: {
    Foot,
    Nav,
    Content,
    Download
  },
  data() {
    return {
      type: '1'
    }
  },
  // 用于在渲染页面前填充应用的状态树数据，与asyncData的方法类似，不同的是 ？它不会设置组件的数据
  async fetch({ store, params }) {
    await store.dispatch('getDownloadLinks')
  },
  created() {
    this.type = this.$route.params.type
  }
}
</script>
<style lang="less" scoped>
@r: 1vw/19.2;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 780px;
  background: url('~assets/images/event/event_bg.jpg') center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
}
.main_event {
  display: flex;
  flex-direction: row;
  align-items: center;
  // justify-content: center;
  .nav-box {
    .flex-column-center;
    height: 840 * @r;
    .logo_icon {
      width: 180 * @r;
      height: 75 * @r;
      margin-bottom: 30 * @r;
      background: url('~assets/images/event/logo.png') center no-repeat;
      background-size: contain;
    }
  }
}
.content {
  width: 1100 * @r;
  height: 840 * @r;
  min-width: 800px;
  min-height: 608px;
  background: url('~assets/images/event/content_bg.png') top left no-repeat;
  background-size: contain;
  box-sizing: border-box;
  padding: 0 45 * @r;
  position: relative;
  .txt_img {
    width: 440 * @r;
    height: 165 * @r;
    margin-top: -30 * @r;
    background: url('~assets/images/event/content_txt.png') center no-repeat;
    background-size: contain;
  }
}
</style>
