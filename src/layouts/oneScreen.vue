<template>
  <div class="app">
    <nuxt />
    <Foot />
  </div>
</template>

<script>
import Foot from '@/components/pc/Foot'
export default {
  components: {
    Foot
  }
}
</script>

<style lang="less">
html,
body,
#__nuxt,
#__layout,
.app {
  height: 100%;
}
</style>
