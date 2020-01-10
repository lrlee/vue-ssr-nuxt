<template>
  <div>
    <div v-if="number == '-1'" class="number-dot">
      <div class="dot-pic"></div>
    </div>
    <ul ref="numberList" v-else :style="{ transform: moveY }" class="numbers-list">
      <li v-for="(num, i) in 10" :key="i" class="number-item">
        <div :class="`num-${i}`" class="num-pic"></div>
      </li>
      <li v-for="(num2, i) in 10" :key="i + 10" class="number-item">
        <div :class="`num-${i}`" class="num-pic"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    number: {
      type: String,
      default: '0'
    }
  },
  data() {
    return {
      preNumber: '0',
      needToJump: false,
      moveY: `translateY(${-this.number * (56 / 7.5)}vw)`
    }
  },
  watch: {
    number(newVal, oldVal) {
      this.preNumber = oldVal
      if (this.number < this.preNumber) {
        this.$refs.numberList.style.transform = `translateY(${-(10 + +this.number) * (56 / 7.5)}vw)`
        this.$refs.numberList.style.transitionDuration = (10 + +this.number - this.preNumber) * 1 + 's'
        this.needToJump = true
      } else {
        if (this.needToJump) {
          this.$refs.numberList.style.transform = `translateY(${-this.preNumber * (56 / 7.5)}vw)`
          this.$refs.numberList.style.transitionDuration = '0ms'
        }
        this.needToJump = false
        setTimeout(() => {
          this.$refs.numberList.style.transform = `translateY(${-this.number * (56 / 7.5)}vw)`
          this.$refs.numberList.style.transitionDuration = this.number - this.preNumber * 1 + 's'
        }, 300)
      }
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
.number-dot {
  width: 33 * @vw;
  height: 56 * @vw;
  display: flex;
  align-items: center;
  justify-content: center;
  .dot-pic {
    width: 11 * @vw;
    height: 12 * @vw;
    background: url('~assets/images/guide/count_dot.png') no-repeat;
    background-size: contain;
  }
}
.numbers-list {
  transition: all 2s ease;
  .number-item {
    width: 33 * @vw;
    height: 56 * @vw;
    display: flex;
    align-items: center;
    justify-content: center;
    .num-pic {
      width: 24 * @vw;
      height: 41 * @vw;
    }
    .num-0 {
      background: url('~assets/images/guide/0.png') no-repeat;
      background-size: contain;
    }
    .num-1 {
      width: 18 * @vw;
      background: url('~assets/images/guide/1.png') no-repeat;
      background-size: contain;
    }
    .num-2 {
      background: url('~assets/images/guide/2.png') no-repeat;
      background-size: contain;
    }
    .num-3 {
      background: url('~assets/images/guide/3.png') no-repeat;
      background-size: contain;
    }
    .num-4 {
      width: 27 * @vw;
      background: url('~assets/images/guide/4.png') no-repeat;
      background-size: contain;
    }
    .num-5 {
      background: url('~assets/images/guide/5.png') no-repeat;
      background-size: contain;
    }
    .num-6 {
      background: url('~assets/images/guide/6.png') no-repeat;
      background-size: contain;
    }
    .num-7 {
      background: url('~assets/images/guide/7.png') no-repeat;
      background-size: contain;
    }
    .num-8 {
      background: url('~assets/images/guide/8.png') no-repeat;
      background-size: contain;
    }
    .num-9 {
      background: url('~assets/images/guide/9.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
