<template>
  <div @wheel.prevent @click="$emit('closeVideo')" class="pop">
    <div class="content">
      <video ref="video" class="video" controls src="/video/千与千寻（7分钟看完）_超清.mp4"></video>
      <i @click="$emit('closeVideo')" class="close-icon icon btn"></i>
    </div>
    <div class="close"></div>
  </div>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {}
  },
  watch: {
    dialogVisible() {
      if (this.dialogVisible) {
        this.$refs.video.play()
      } else {
        this.$refs.video.pause()
      }
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/19.2;
.pop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
  .content {
    width: 837 * @vw;
    border-radius: 10 * @vw;
    padding: 20 * @vw;
    background-color: rgb(0, 168, 255);
    box-shadow: inset 0 0 8.55 * @vw 0.45 * @vw rgba(39, 122, 255, 0.004);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    .video {
      width: 100%;
      border-radius: 6 * @vw;
    }
  }
  .close-icon {
    position: absolute;
    right: -49 * @vw;
    top: 0;
    width: 33 * @vw;
    height: 33 * @vw;
    background: url('~assets/images/pc/guide/close_pop.png') no-repeat;
    background-size: contain;
  }
}
</style>
