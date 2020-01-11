<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <div class="title-order"></div>
      <p id="part5" class="title-text">
        <span class="part-title-white">凶萌角色</span>
      </p>
    </div>
    <div class="content">
      <div class="role-container">
        <ul class="role-list">
          <li
            v-for="(item, index) in roleInfo"
            :key="index"
            :class="[`role-head-${item.id}`, selectedId === item.id ? 'active' : '']"
            @click="selecteRole(item.id, index)"
            class="role-item btn"
          ></li>
        </ul>
        <i class="role-left"></i>
        <i class="role-right"></i>
      </div>
      <div class="screen-container">
        <div class="screen-main">
          <div class="name-wrapper">
            <div v-html="$t('game.' + roleInfo[selectedIndex].name_key)" class="role-name"></div>
            <ul class="star-list">
              <li v-for="num in roleInfo[selectedIndex].star" :key="num" class="star-item"></li>
            </ul>
          </div>
          <p v-html="$t('game.' + roleInfo[selectedIndex].desc_key)" class="character-desc"></p>
        </div>
        <p @click="openRolePop" class="screen-btn">查看技能介绍</p>
      </div>
      <div class="role-display">
        <div class="role-stage_light"></div>
        <div class="role-stage">
          <div :class="`role-${selectedId}`" class="role-pic"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    roleInfo: {
      required: true,
      type: Array
    }
  },
  data() {
    return {
      selectedId: this.roleInfo[0] ? this.roleInfo[0].id : 1,
      selectedIndex: 0
    }
  },
  methods: {
    selecteRole(id, index) {
      this.selectedId = id
      this.selectedIndex = index
    },
    openRolePop() {
      this.$emit('openRolePop', this.roleInfo[this.selectedIndex])
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.part-container {
  position: relative;
  z-index: 2;
  margin-top: 230 * @vw;
  width: 750 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    position: relative;
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part05.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      font-size: 38 * @vw;
      line-height: 100 * @vw;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    .role-container {
      height: 183 * @vw;
      width: 750 * @vw;
      margin-top: 31 * @vw;
      .role-list {
        display: flex;
        overflow: auto;
        transition: all 1s;
        .role-item {
          width: 118 * @vw;
          height: 131 * @vw;
          margin-left: 10 * @vw;
          margin-top: 16 * @vw;
          flex: none;
          &:nth-child(1) {
            margin-left: 28 * @vw;
          }
          &:hover,
          &.active {
            width: 118 * @vw;
            height: 131 * @vw;
          }
        }
      }
      .role-left {
        position: absolute;
        top: 0;
        left: 0;
        width: 28 * @vw;
        height: 183 * @vw;
        background: url('~assets/images/guide/m/role_left.png') no-repeat;
        background-size: contain;
      }
      .role-right {
        position: absolute;
        top: 0;
        right: 0;
        width: 28 * @vw;
        height: 183 * @vw;
        background: url('~assets/images/guide/m/role_right.png') no-repeat;
        background-size: contain;
      }
    }
    .screen-container {
      width: 372 * @vw;
      height: 561 * @vw;
      align-self: flex-start;
      margin-top: 71 * @vw;
      margin-left: 19 * @vw;
      background: url('~assets/images/guide/m/screen_bg.png') no-repeat;
      background-size: contain;
      .screen-main {
        margin-left: 45 * @vw;
        .name-wrapper {
          display: flex;
        }
        .role-name {
          font-size: 46 * @vw;
          font-weight: bold;
          color: #ffffff;
          margin-top: 20 * @vw;
          margin-right: 10 * @vw;
        }
        .star-list {
          display: flex;
          align-items: flex-end;
          margin-top: 6 * @vw;
          margin-left: 4 * @vw;
          .star-item {
            width: 38 * @vw;
            height: 35 * @vw;
            background: url('~assets/images/guide/star.png') no-repeat;
            background-size: contain;
            margin-right: 13 * @vw;
            margin-bottom: 13 * @vw;
          }
        }
        .character-desc {
          width: 290 * @vw;
          height: 200 * @vw;
          margin-top: 2 * @vw;
          overflow: scroll;
          color: #ffffff;
          font-size: 24 * @vw;
          margin-top: 10 * @vw;
        }
      }
      .screen-btn {
        width: 350 * @vw;
        height: 82 * @vw;
        font-size: 26 * @vw;
        margin: 8 * @vw;
        font-weight: bold;
        color: #fff448;
        text-align: center;
        margin-top: 62 * @vw;
      }
    }
    .role-display {
      height: 498 * @vw;
      width: 410 * @vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      right: 0 * @vw;
      top: 342 * @vw;

      .role-stage_light {
        position: absolute;
        bottom: 82 * @vw;
        width: 268 * @vw;
        height: 98 * @vw;
        background: url('~assets/images/guide/stage_light.png') no-repeat;
        background-size: contain;
        z-index: 2;
      }
      .role-stage {
        width: 410 * @vw;
        height: 304 * @vw;
        background: url('~assets/images/guide/stage.png') no-repeat;
        background-size: contain;
        position: absolute;
        bottom: 0 * @vw;
        display: flex;
        justify-content: center;
        z-index: 1;
        .role-pic {
          position: absolute;
          bottom: 102 * @vw;
        }
      }
    }
  }
}
.role-head-1 {
  background: url('~assets/images/guide/role/role_head/head_1.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_1_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-2 {
  background: url('~assets/images/guide/role/role_head/head_2.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_2_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-4 {
  background: url('~assets/images/guide/role/role_head/head_4.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_4_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-7 {
  background: url('~assets/images/guide/role/role_head/head_7.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_7_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-8 {
  background: url('~assets/images/guide/role/role_head/head_8.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_8_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-12 {
  background: url('~assets/images/guide/role/role_head/head_12.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_12_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-14 {
  background: url('~assets/images/guide/role/role_head/head_14.png') no-repeat;
  background-size: contain;
  &.active {
    background: url('~assets/images/guide/role/role_head/head_14_active.png') no-repeat;
    background-size: contain;
  }
}
.role-1 {
  width: 327 * @vw;
  height: 482 * @vw;
  background: url('~assets/images/guide/role/role_display/role_1.png') no-repeat;
  background-size: contain;
}
.role-2 {
  width: 312 * @vw;
  height: 402 * @vw;
  background: url('~assets/images/guide/role/role_display/role_2.png') no-repeat;
  background-size: contain;
}
.role-4 {
  width: 380 * @vw;
  height: 369 * @vw;
  background: url('~assets/images/guide/role/role_display/role_4.png') no-repeat;
  background-size: contain;
}
.role-7 {
  width: 323 * @vw;
  height: 432 * @vw;
  background: url('~assets/images/guide/role/role_display/role_7.png') no-repeat;
  background-size: contain;
}
.role-8 {
  width: 317 * @vw;
  height: 376 * @vw;
  background: url('~assets/images/guide/role/role_display/role_8.png') no-repeat;
  background-size: contain;
}
.role-12 {
  width: 293 * @vw;
  height: 479 * @vw;
  background: url('~assets/images/guide/role/role_display/role_12.png') no-repeat;
  background-size: contain;
}
.role-14 {
  width: 367 * @vw;
  height: 371 * @vw;
  background: url('~assets/images/guide/role/role_display/role_14.png') no-repeat;
  background-size: contain;
}
</style>
