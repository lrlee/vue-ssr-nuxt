<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">凶萌角色</span>
      </p>
    </div>
    <div class="content">
      <div class="role-select">
        <ul class="role-list">
          <li v-for="item in roleInfo" :key="item" :class="'role-' + item.id" class="role-item"></li>
        </ul>
        <div class="prev-btn btn"></div>
        <div class="next-btn btn"></div>
      </div>
      <div class="role-display">
        <div class="role-stage_light"></div>
        <div class="role-stage">
          <div class="role-pic"></div>
        </div>
      </div>
      <div class="role-introduct"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    roleInfo: {
      required: true,
      type: Object
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
.part-container {
  margin-top: 280 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/pc/guide/part05.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    display: flex;
    align-items: center;
    margin-top: 70 * @vw;
    .role-select {
      position: relative;
      width: 264 * @vw;
      height: 521 * @vw;
      background: url('~assets/images/pc/guide/role_select_bg.png') no-repeat;
      background-size: contain;
      margin-right: 20 * @vw;
      .role-list {
        .role-item {
          width: 118 * @vw;
          height: 131 * @vw;
          &:nth-of-type((n-1)*7+1) {
          }
        }
      }
      .prev-btn {
        position: absolute;
        right: 31 * @vw;
        bottom: 12 * @vw;
        width: 20 * @vw;
        height: 69 * @vw;
        background: url('~assets/images/pc/guide/role_select_pre.png') no-repeat;
        background-size: contain;
      }
      .next-btn {
        position: absolute;
        right: 31 * @vw;
        top: 20 * @vw;
        width: 20 * @vw;
        height: 69 * @vw;
        background: url('~assets/images/pc/guide/role_select_next.png') no-repeat;
        background-size: contain;
      }
    }
    .role-display {
      height: 700 * @vw;
      width: 540 * @vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      .role-stage_light {
        position: absolute;
        bottom: 105 * @vw;
        width: 346 * @vw;
        height: 125 * @vw;
        background: url('~assets/images/pc/guide/stage_light.png') no-repeat;
        background-size: contain;
        z-index: 2;
      }
      .role-stage {
        width: 531 * @vw;
        height: 393 * @vw;
        background: url('~assets/images/pc/guide/stage.png') no-repeat;
        background-size: contain;
        position: absolute;
        bottom: 0 * @vw;
        display: flex;
        justify-content: center;
        z-index: 1;
        .role-pic {
          position: absolute;
          bottom: 130 * @vw;
          width: 383 * @vw;
          height: 556 * @vw;
          background: url('~assets/images/pc/guide/role_lili_part5.png') no-repeat;
          background-size: contain;
        }
      }
    }
    .role-introduct {
      margin-top: 30 * @vw;
      width: 536 * @vw;
      height: 603 * @vw;
      background: url('~assets/images/pc/guide/role_introduce_bg.png') no-repeat;
      background-size: contain;
    }
  }
}
</style>
