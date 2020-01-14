<template>
  <div class="container index">
    <div class="top">
      <div class="logo-icon"></div>
      <p class="logo-breif"></p>
    </div>
    <div class="title">
      <div class="title-name"></div>
      <div class="title-time"></div>
    </div>
    <a href="/m/event/1" class="enter-btn">
      <span class="enter-text"></span>
      <span class="enter-icon"></span>
    </a>
  </div>
</template>
<script>
export default {
  layout: 'oneScreen'
}
</script>
<style lang="less" scoped>
@r: 1vw/7.5;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  height: 100%;
  width: 100%;
  .flex-column-center;
  &.index {
    background: url('~assets/images/event/m_index_bg.jpg') center no-repeat;
    background-size: cover;
    position: relative;
    .top {
      margin-top: 48 * @r;
      .logo-icon {
        width: 297 * @r;
        height: 125 * @r;
        background: url('~assets/images/event/logo.png') no-repeat;
        background-size: contain;
      }
      .logo-breif {
        width: 308 * @r;
        height: 29 * @r;
        margin-top: 13 * @r;
        background: url('~assets/images/event/index_title.png') no-repeat;
        background-size: contain;
      }
    }
    .title {
      margin-top: 50 * @r;
      .flex-column-center;
      .title-name {
        width: 667 * @r;
        height: 250 * @r;
        background: url('~assets/images/event/index_txt.png') no-repeat;
        background-size: contain;
      }
      .title-time {
        width: 468 * @r;
        height: 125 * @r;
        background: url('~assets/images/event/index_date.png') no-repeat;
        background-size: contain;
      }
    }
    .enter-btn {
      position: absolute;
      bottom: 77 * @r;
      right: 29 * @r;
      width: 226 * @r;
      height: 229 * @r;
      background: url('~assets/images/event/m_index/enter_bg.png') no-repeat;
      background-size: contain;
      .flex-column-center;
      justify-content: center;
      transform: scale(0.8);
      animation: scaleToggle 2s infinite linear;
      .enter-text {
        width: 190 * @r;
        height: 63 * @r;
        background: url('~assets/images/event/m_index/enter_text.png') no-repeat;
        background-size: contain;
        margin-bottom: 30 * @r;
      }
      .enter-icon {
        width: 95 * @r;
        height: 73 * @r;
        background: url('~assets/images/event/m_index/enter_icon.png') no-repeat;
        background-size: contain;
        position: absolute;
        transform: translate(0, 60%);
      }
      @keyframes scaleToggle {
        0% {
          transform: scale(0.8);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(0.8);
        }
      }
    }
  }
}
</style>
