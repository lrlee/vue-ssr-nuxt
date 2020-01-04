<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">呼朋唤友</span><span class="part-title-yellow">领福利</span>
      </p>
    </div>
    <div class="content"></div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.part-container {
  position: absolute;
  bottom: -450 * @vw;
  z-index: 2;
  width: 750 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-top: 630 * @vw;
  .title {
    position: absolute;
    top: -500 * @vw;
    display: flex;
    justify-content: center;
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
}
.content {
  width: 750 * @vw;
  height: 660 * @vw;
  background: url('~assets/images/guide/m/part3_bg.png') no-repeat;
  background-size: contain;
}
</style>
