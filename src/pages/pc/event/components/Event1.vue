<template>
  <div class="event_content event1">
    <div class="event-text">
      <div class="title-img"></div>
      <p class="note">
        <span class="text-dot"></span>
        登录全民泡泡超人手游，即可领取【新手礼包】，开启礼包将获得丰厚的奖励喔。
      </p>
    </div>
    <div class="event-prize">
      <div class="prize-img"></div>
    </div>
    <div class="event-bottom">
      <div class="download-img1"></div>
      <div class="download-img2 download-doll"></div>
      <a :href="downloadLinks.android_link" target="_blank" class="download-btn"></a>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['downloadLinks'])
  },
  watch: {
    downloadLinks() {
      console.log(this.downloadLinks)
    }
  },
  methods: {}
}
</script>
