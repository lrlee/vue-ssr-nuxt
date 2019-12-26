<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="paopao-svg">
      <image :href="paopaoUrl" width="12" height="12">
        <animateMotion path="M10,80 q100,120 120,20 q140,-50 160,0" begin="0s" dur="3s" repeatCount="indefinite" />
      </image>
    </svg>
  </div>
</template>
<script>
export default {
  data() {
    return {
      paopaoUrl: require('~/assets/images/pc/guide/paopao_pipe.png')
    }
  }
}
</script>
<style lang="less" scoped></style>
