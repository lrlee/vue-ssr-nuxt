<template>
  <div class="part-container">
    <div id="part7" class="title part-title-type2">
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
      <img class="content-cover" src="~/assets/images/guide/part7/part7_bg.png" />
      <div @click="handlePlayClick" v-show="!isPlaying" class="play btn"></div>
      <span v-show="!isPlaying" class="play-text">播放</span>
      <ul class="action-wrapper">
        <li
          v-for="(item, index) in videoOptions"
          :key="index"
          :class="['action-button', 'btn', { active: chooseIndex === index }]"
          @click="handleButtonClick(index)"
        >
          <div class="button-title">{{ item.title }}</div>
        </li>
      </ul>
      <img class="rabbit" src="~/assets/images/guide/m/rabbit.png" />
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
@import url('~assets/css/guide_m.less');
.part-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part7/part07.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    position: relative;
    margin-top: 37 * @vw;
    width: 750 * @vw;
    height: 509 * @vw;
    display: flex;
    justify-content: center;
    .video {
      width: 585 * @vw;
      height: 329 * @vw;
      position: absolute;
      top: 34 * @vw;
      background: #000000;
      border-top-left-radius: 50% 4%;
      border-top-right-radius: 50% 4%;
      border-bottom-right-radius: 50% 4%;
      border-bottom-left-radius: 50% 4%;
    }
    .content-cover {
      position: absolute;
      height: 509 * @vw;
      pointer-events: none;
    }

    .play {
      position: absolute;
      width: 85 * @vw;
      height: 85 * @vw;
      top: 120 * @vw;
      background: url('~assets/images/guide/m/play.png') no-repeat;
      background-size: contain;
    }
    .play-text {
      position: absolute;
      font-size: 24 * @vw;
      color: #ffffff;
      top: 205 * @vw;
    }
    .action-wrapper {
      position: absolute;
      display: flex;
      width: 599 * @vw;
      height: 73 * @vw;
      bottom: 64 * @vw;
      font-size: 0;
      .action-button {
        text-align: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        &.active {
          .button-title {
            color: #d9ffbb;
            font-weight: bold;
            font-size: 24 * @vw;
            text-shadow: 0px 2px 6px rgba(39, 139, 0, 1);
          }
        }
        .button-title {
          color: #30a3f6;
          font-weight: bold;
          font-size: 24 * @vw;
        }
        &:nth-child(1) {
          width: 149 * @vw;
          height: 71 * @vw;
          background: url('~assets/images/guide/m/action_normal_01.png') no-repeat;
          background-size: cover;
          &.active {
            background: url('~assets/images/guide/m/action_active_01.png') no-repeat;
            background-size: cover;
          }
        }
        &:nth-child(2) {
          width: 149 * @vw;
          height: 67 * @vw;
          position: relative;
          top: 6 * @vw;
          background: url('~assets/images/guide/m/action_normal_02.png') no-repeat;
          background-size: cover;
          &.active {
            background: url('~assets/images/guide/m/action_active_02.png') no-repeat;
            background-size: cover;
          }
        }
        &:nth-child(3) {
          width: 150 * @vw;
          height: 67 * @vw;
          position: relative;
          top: 6 * @vw;
          background: url('~assets/images/guide/m/action_normal_03.png') no-repeat;
          background-size: cover;
          &.active {
            background: url('~assets/images/guide/m/action_active_03.png') no-repeat;
            background-size: cover;
          }
        }
        &:nth-child(4) {
          width: 150 * @vw;
          height: 71 * @vw;
          background: url('~assets/images/guide/m/action_normal_04.png') no-repeat;
          background-size: contain;
          &.active {
            background: url('~assets/images/guide/m/action_active_04.png') no-repeat;
            background-size: contain;
          }
        }
      }
    }
    .rabbit {
      width: 106 * @vw;
      height: 201 * @vw;
      position: absolute;
      bottom: 0;
      right: 0;
    }
  }
}
</style>
