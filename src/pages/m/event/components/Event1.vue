<template>
  <div class="event1">
    <div class="event-txt">
      <p class="title-img"></p>
      <p class="note">
        <span class="text-dot"></span>
        <span
          >亲爱的超人们！活动期间首次充值达到对应档次，将获得超人气的稀有奖励！XX永久皮肤、XX角色！快来带走它们吧！
        </span>
      </p>
    </div>
    <div class="event-prize">
      <div class="prize-img"></div>
    </div>
    <div class="event-download">
      <div class="download-doll"></div>
      <div @click="toDownload" class="download-btn"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Event1',
  methods: {
    toDownload() {
      this.$emit('toDownload')
    }
  }
}
</script>

<style scoped></style>
