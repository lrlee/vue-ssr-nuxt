<template>
  <div class="part-container">
    <div class="pipe3"></div>
    <div class="title part-title-type1">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">超人预约</span><span class="part-title-yellow">加码礼</span>
      </p>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <div class="achieve-box box-10w"></div>
        <div class="achieve-box box-30w"></div>
        <div class="achieve-box box-50w"></div>
        <div class="achieve-box box-80w"></div>
        <div class="achieve-box box-100w"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.part-container {
  position: relative;
  z-index: 2;
  margin-top: 80 * @vw;
  width: 750 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pipe3 {
    position: absolute;
    top: 1300 * @vw;
    left: 0;
    width: 137 * @vw;
    height: 1019 * @vw;
    background: url('~assets/images/guide/m/pipe3.png') no-repeat;
    background-size: contain;
  }
  .title {
    display: flex;
    justify-content: center;
    transform: translateY(28 * @vw);
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part02.png') no-repeat;
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
  width: 716 * @vw;
  height: 1549 * @vw;
  background: url('~assets/images/guide/m/part2_bg.png') no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
}
.content-wrapper {
  width: 559 * @vw;
  margin-top: 40 * @vw;
  .achieve-box {
    width: 100%;
    &.box-10w {
      height: 296 * @vw;
    }
    &.box-30w {
      height: 265 * @vw;
    }
    &.box-50w {
      height: 248 * @vw;
    }
    &.box-80w {
      height: 252 * @vw;
    }
    &.box-100w {
      height: 235 * @vw;
    }
  }
}
</style>
