<template>
  <header class="header-container">
    <div class="left-wrapper">
      <i class="logo-icon icon"></i>
      <div class="title-wrapper">
        <p class="title-name">全民泡泡超人</p>
        <p class="title-desc">全民休闲竞技手游</p>
      </div>
    </div>
    <div class="btn toHome-btn">
      <span class="btn-text">进入官网</span>
      <i class="icon enter-icon"></i>
    </div>
  </header>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
.header-container {
  position: absolute;
  z-index: 10;
  top: 0;
  right: 0;
  width: 750 * @vw;
  height: 104 * @vw;
  background: linear-gradient(90deg, rgba(0, 43, 176, 1), rgba(0, 30, 123, 1));
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 28 * @vw;
}
.left-wrapper {
  display: flex;
  .logo-icon {
    width: 113 * @vw;
    height: 113 * @vw;
    background: url('~assets/images/logo.png') no-repeat;
    background-size: contain;
    transform: translateY(13 * @vw);
  }
  .title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 19 * @vw;
    .title-name {
      font-size: 26 * @vw;
      color: #fff;
    }
    .title-desc {
      margin-top: 3 * @vw;
      font-size: 24 * @vw;
      color: #30a3f6;
    }
  }
}
.toHome-btn {
  width: 175 * @vw;
  height: 57 * @vw;
  background: url('~assets/images/guide/m/btn_toHome_normal.png') no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  &:active {
    background-image: url('~assets/images/guide/m/btn_toHome_click.png');
  }
  .btn-text {
    color: #fff;
    font-size: 26 * @vw;
    font-weight: bold;
    padding-bottom: 5 * @vw;
  }
  .enter-icon {
    width: 9.9 * @vw;
    height: 17.1 * @vw;
    background: url('~assets/images/guide/m/enter_icon.png') no-repeat;
    background-size: contain;
    margin-left: 10 * @vw;
  }
}
</style>
