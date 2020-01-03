<template>
  <div class="container">
    <Header></Header>
    <div class="activity-bg">
      <div class="header-space"></div>
      <div class="index-container"></div>
    </div>
    <div class="introduct-bg"></div>
  </div>
</template>
<script>
import Header from './components/Header'
export default {
  components: {
    Header
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.header-space {
  width: 750 * @vw;
  height: 104 * @vw;
}
.activity-bg {
  width: 750 * @vw;
  min-height: 4771 * @vw;
  background: url('~assets/images/guide/m_bg/bg_activity.png') 0 180 * @vw no-repeat,
    url('~assets/images/guide/m_bg/index_bg.png') 0 0 no-repeat;
  background-size: 100%;
}
</style>
