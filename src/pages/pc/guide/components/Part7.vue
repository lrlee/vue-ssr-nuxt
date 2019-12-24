<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">趣味玩法</span>
      </p>
    </div>
    <div class="content">
      <video
        ref="video"
        :src="videoOptions[chooseIndex].url"
        @playing="isPlaying = true"
        @pause="isPlaying = false"
        class="video"
        controls
      >
        您的浏览器暂不支持视频播放，请下载最新版本的浏览器...
      </video>
      <img class="content-cover" src="~/assets/images/pc/guide/part7/part7_bg.png" />
      <div :class="['handle-left', { disable: chooseIndex === 0 }]" @click="handleLeftClick"></div>
      <div
        :class="['handle-right', { disable: chooseIndex === videoOptions.length - 1 }]"
        @click="handleRightClick"
      ></div>
      <div @click="handlePlayClick" v-show="!isPlaying" class="play"></div>
      <ul class="action-wrapper">
        <li
          v-for="(item, index) in videoOptions"
          :key="index"
          :class="['action-button', { active: chooseIndex === index }]"
          @click="handleButtonClick(index)"
        >
          <div class="button-title">{{ item.title }}</div>
          <div class="button-desc">{{ item.desc }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
const videoOptions = [
  { title: '经典房间', desc: '重温往日 惊喜连连', url: '/video/千与千寻（7分钟看完）_超清.mp4' },
  { title: '复活大战', desc: '精彩对抗 体验无限', url: '/video/千与千寻（7分钟看完）_超清.mp4' },
  { title: '百人吃鸡', desc: '多人同屏 王者争霸', url: '/video/千与千寻（7分钟看完）_超清.mp4' },
  { title: '休闲娱乐', desc: '机关道具 玩法百变', url: '/video/千与千寻（7分钟看完）_超清.mp4' }
]
export default {
  data() {
    return {
      videoOptions,
      chooseIndex: 0,
      isPlaying: false
    }
  },
  methods: {
    handleLeftClick() {
      if (this.chooseIndex > 0) {
        this.chooseIndex--
        this.$refs.video.load()
      }
    },
    handleRightClick() {
      if (this.chooseIndex < this.videoOptions.length - 1) {
        this.chooseIndex++
        this.$refs.video.load()
      }
    },
    handleButtonClick(index) {
      if (this.chooseIndex !== index) {
        this.chooseIndex = index
        this.$refs.video.load()
      }
    },
    handlePlayClick() {
      this.$refs.video.play()
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
.part-container {
  position: relative;
  margin-top: 239 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/pc/guide/part7/part07.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    position: relative;
    margin-top: 56 * @vw;
    width: 1207 * @vw;
    height: 766 * @vw;

    .video {
      width: 877 * @vw;
      height: 504 * @vw;
      position: absolute;
      top: 43 * @vw;
      left: 166 * @vw;
      background: #000000;
      border-top-left-radius: 50% 4%;
      border-top-right-radius: 50% 4%;
      border-bottom-right-radius: 50% 4%;
      border-bottom-left-radius: 50% 4%;
    }
    .content-cover {
      position: absolute;
      width: 1207 * @vw;
      height: 766 * @vw;
      pointer-events: none;
    }
    .handle-left {
      position: absolute;
      left: 3 * @vw;
      top: 290 * @vw;
      width: 46 * @vw;
      height: 70 * @vw;
      background: url('~assets/images/pc/guide/swiper_left.png') no-repeat;
      background-size: contain;
      &.disable {
        background: url('~assets/images/pc/guide/swiper_disable_left.png') no-repeat;
        background-size: contain;
      }
    }
    .handle-right {
      position: absolute;
      right: 4 * @vw;
      top: 290 * @vw;
      width: 46 * @vw;
      height: 70 * @vw;
      background: url('~assets/images/pc/guide/swiper_right.png') no-repeat;
      background-size: contain;
      &.disable {
        background: url('~assets/images/pc/guide/swiper_disable_right.png') no-repeat;
        background-size: contain;
      }
    }

    .play {
      position: absolute;
      left: 537 * @vw;
      top: 240 * @vw;
      width: 128 * @vw;
      height: 128 * @vw;
      background: url('~assets/images/pc/guide/part7/play_normal.png') no-repeat;
      background-size: contain;
      &:hover {
        background: url('~assets/images/pc/guide/part7/play_hover.png') no-repeat;
        background-size: contain;
      }
    }
    .action-wrapper {
      position: absolute;
      width: 903 * @vw;
      height: 96.9 * @vw;
      left: 154 * @vw;
      right: 150 * @vw;
      bottom: 102 * @vw;
      font-size: 0;

      .action-button {
        float: left;
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        &.active {
          .button-title {
            color: #d9ffbb;
            font-weight: bold;
            font-size: 22 * @vw;
            text-shadow: 0px 2px 6px rgba(39, 139, 0, 1);
          }
          .button-desc {
            color: #196f00;
            font-size: 16 * @vw;
            font-weight: bold;
          }
        }
        .button-title {
          color: #30a3f6;
          font-weight: bold;
          font-size: 18 * @vw;
        }
        .button-desc {
          color: #30a3f6;
          font-size: 16 * @vw;
        }
        &:nth-child(1) {
          width: 225 * @vw;
          height: 94 * @vw;
          background: url('~assets/images/pc/guide/part7/action_normal_01.png') no-repeat;
          background-size: contain;
          &.active {
            background: url('~assets/images/pc/guide/part7/action_active_01.png') no-repeat;
            background-size: contain;
          }
        }
        &:nth-child(2) {
          width: 226 * @vw;
          height: 88 * @vw;
          position: relative;
          top: 9 * @vw;
          background: url('~assets/images/pc/guide/part7/action_normal_02.png') no-repeat;
          background-size: contain;
          &.active {
            background: url('~assets/images/pc/guide/part7/action_active_02.png') no-repeat;
            background-size: contain;
          }
        }
        &:nth-child(3) {
          width: 226 * @vw;
          height: 88 * @vw;
          position: relative;
          top: 9 * @vw;
          background: url('~assets/images/pc/guide/part7/action_normal_03.png') no-repeat;
          background-size: contain;
          &.active {
            background: url('~assets/images/pc/guide/part7/action_active_03.png') no-repeat;
            background-size: contain;
          }
        }
        &:nth-child(4) {
          width: 225 * @vw;
          height: 94 * @vw;
          background: url('~assets/images/pc/guide/part7/action_normal_04.png') no-repeat;
          background-size: contain;
          &.active {
            background: url('~assets/images/pc/guide/part7/action_active_04.png') no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
}
</style>
