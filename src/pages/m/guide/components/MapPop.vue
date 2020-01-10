<template>
  <div class="pop">
    <i @click="closeMapPop" class="close-icon icon"></i>
    <img v-if="mapData" :src="mapData.pic_big" class="map-pic" />
  </div>
</template>
<script>
export default {
  props: {
    mapData: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeMapPop() {
      this.$emit('closeMapPop')
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
.pop {
  width: 100vw;
  height: 100vh;
  overflow: auto;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.8);
}
.map-pic {
  width: 1920px/2;
}
.close-icon {
  width: 50 * @vw;
  height: 50 * @vw;
  background: url('~assets/images/guide/close_pop.png') no-repeat;
  background-size: 100%;
  position: fixed;
  right: 20 * @vw;
  top: 20 * @vw;
}
</style>
