<template>
  <div class="container">
    <div class="main">
      <nuxt />
    </div>
    <div class="bottom-space"></div>
    <div class="bottom-wrapper">
      <div class="bottom-left">
        <div class="operate-btn back-btn" onclick="window.history.back()">
          <i class="icon icon-back"></i>
        </div>
        <div class="operate-btn next-btn" onclick="window.history.forward()">
          <i class="icon icon-next"></i>
        </div>
        <div class="operate-btn refresh-btn" onclick="window.location.reload()">
          <i class="icon icon-refresh"></i>
        </div>
      </div>
      <a href="uniwebview://close" class="back-to-game">
        <i class="icon icon-back-game"></i>
        <span class="link-back-game">返回游戏</span>
      </a>
    </div>
  </div>
</template>
<script>
import * as local from '@/utils/local'
export default {
  head() {
    return {
      meta: [
        // 删除默认的苹果工具栏和菜单栏
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        // 苹果隐藏状态栏/设置状态栏颜色
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
        // safri 添加到主屏界面的显示标题
        { name: 'apple-mobile-web-app-title', content: '应用标题' },
        // UC强制横屏
        { name: 'screen-orientation', content: 'landscape' },
        // UC强制全屏
        { name: 'full-screen', content: 'yes' },
        // QQ强制全屏
        { name: 'x5-fullscreen', content: 'app' },
        // QQ强制横屏
        { name: 'x5-orientation', content: 'landscape' }
      ]
    }
  },
  mounted() {
    const ip = this.$route.query.ip || ''
    if (ip) {
      local.setIP(ip)
    } else {
      local.removeIP()
    }
  }
}
</script>
<style>
html,
body,
#__nuxt,
#__layout,
.app {
  height: 100%;
}
</style>
<style lang="less" scoped>
@vw: 1vw/13.34;
@vh: 1vh/7.5;
@vmin: 1vmin/7.5;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.container {
  position: relative;
  height: 100vh;
  width: 100vw;
  background: url('~assets/images/service/index_bg.jpg') center no-repeat;
  background-size: cover;
  position: relative;
  .flex-column-center;
  justify-content: center;
  .main {
    position: relative;
    width: 1274 * @vw;
    height: 622 * @vh;
    background-color: rgba(10, 37, 57, 0.5);
    border: 1px solid rgb(35, 132, 202);
    border-radius: 10 * @vmin;
    color: #f4f4f4;
  }
  .bottom-space {
    width: 100vw;
    height: 88 * @vh;
  }
  .bottom-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 88 * @vh;
    background-color: #464646;
    display: flex;
    justify-content: space-between;
    .bottom-left {
      display: flex;
    }
    .icon-back {
      width: 16 * @vmin;
      height: 33 * @vmin;
      background: url('./~assets/images/service/icon_back_normal.png') no-repeat;
      background-size: contain;
    }
    .icon-next {
      width: 16 * @vmin;
      height: 33 * @vmin;
      background: url('./~assets/images/service/icon_next_normal.png') no-repeat;
      background-size: contain;
    }
    .icon-refresh {
      width: 35 * @vmin;
      height: 35 * @vmin;
      background: url('./~assets/images/service/icon_refresh_normal.png') no-repeat;
      background-size: contain;
    }
    .operate-btn {
      height: 88 * @vh;
      padding: 0 70 * @vw;
      display: flex;
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
      }
      .icon {
        margin: auto;
      }
    }
    .back-to-game {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 49 * @vw;
      .icon-back-game {
        width: 38 * @vmin;
        height: 35 * @vmin;
        background: url('~assets/images/service/icon_back_game.png') no-repeat;
        background-size: contain;
        margin-right: 20 * @vmin;
      }
      .link-back-game {
        font-size: 34 * @vmin;
        color: #fff;
      }
      &:active {
        background-color: rgba(255, 255, 255, 0.1);
      }
    }
  }
}
</style>
