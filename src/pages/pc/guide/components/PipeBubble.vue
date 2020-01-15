<template>
  <div>
    <svg
      :width="width / 19.2 + 'vw'"
      :height="height / 19.2 + 'vw'"
      :viewBox="viewBox"
      xmlns="http://www.w3.org/2000/svg"
    >
      <template v-for="(item, index) in 50">
        <image :key="item" :href="paopaoUrl" :width="(13 * Math.random()) / 19.2 + 'vw'" style="opacity: 0">
          <animate :begin="12000 * randomArr[index] + 'ms'" attributeName="opacity" values="1" />
          <animateMotion :path="path" :begin="12000 * randomArr[index] + 'ms'" dur="12s" repeatCount="indefinite" />
        </image>
      </template>
    </svg>
  </div>
</template>
<script>
export default {
  props: {
    path: {
      require: true,
      type: String,
      default: ''
    },
    width: {
      type: Number,
      default: 605
    },
    height: {
      type: Number,
      default: 742
    }
  },
  data() {
    return {
      paopaoUrl: require('~/assets/images/guide/paopao_pipe.png'),
      viewBox: `0 0 ${this.width} ${this.height}`,
      paopao_rate: 1, // 泡泡变化比例
      randomArr: new Array(50).fill(1)
    }
  },
  created() {
    this.randomArr.forEach((item, index) => {
      this.$set(this.randomArr, index, Math.random())
    })
  }
}
</script>
<style lang="less" scoped></style>
