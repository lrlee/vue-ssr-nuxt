<template>
  <div class="event3">
    <div class="event-txt">
      <p class="title-img"></p>
      <time class="event-time">活动时间：2019年00月00日</time>
      <p class="note">
        <span class="text-dot"></span>
        <span
          >活动规则：<br />冲级ing！！！活动期间，当超人们达到指定等级时，除了可以领取丰厚的奖励！还可以收集XX【皮肤】碎片，兑换永久XX皮肤喔！一起来看看吧！
        </span>
      </p>
    </div>
    <div class="event-prize">
      <div class="prize-img"></div>
    </div>
    <div class="event-download">
      <div @click="toDownload" class="download-btn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event3',
  methods: {
    toDownload() {
      this.$emit('toDownload')
    }
  }
}
</script>

<style scoped></style>
