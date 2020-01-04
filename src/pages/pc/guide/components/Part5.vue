<template>
  <div class="part-container">
    <div id="part5" class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">凶萌角色</span>
      </p>
    </div>
    <div class="content">
      <div class="role-select">
        <div class="select-list-box">
          <ul :style="{ transform: moveY }" class="role-list">
            <li
              v-for="(item, index) in roleInfo"
              :key="index"
              :class="[`role-head-${item.id}`, selectedId === item.id ? 'active' : '']"
              @click="selecteRole(item.id, index)"
              class="role-item btn"
            ></li>
          </ul>
        </div>
        <div @click="seletcToPrev" :class="{ disabled: pageIndex === 0 }" class="prev-btn btn"></div>
        <div @click="seletcToNext" :class="{ disabled: pageIndex === totalPage - 1 }" class="next-btn btn"></div>
      </div>
      <div class="role-display">
        <div class="role-stage_light"></div>
        <div class="role-stage">
          <div :class="`role-${selectedId}`" class="role-pic"></div>
        </div>
      </div>
      <div class="role-introduct">
        <div class="role-base-desc">
          <div class="name-wrapper">
            <span v-html="$t('game.' + roleInfo[selectedIndex].name_key)" class="role-name"></span>
            <ul class="star-list">
              <li v-for="num in roleInfo[selectedIndex].star" :key="num" class="star-item"></li>
            </ul>
          </div>
          <p v-html="$t('game.' + roleInfo[selectedIndex].desc_key)" class="character-desc"></p>
        </div>
        <div class="role-ability-desc">
          <div class="ability-label">技能</div>
          <p v-html="$t('game.' + roleInfo[selectedIndex].skill_desc_key)"></p>
        </div>
        <div class="role-ability-display">
          <ul class="ability-values">
            <li class="value-item bubble">
              <i class="bubble-icon icon"></i>
              <span class="values-name">数量</span>
              <ul class="values-display">
                <li
                  v-for="base in roleInfo[selectedIndex].base.bubble"
                  :key="'b' + base"
                  class="water-drop-icon base"
                ></li>
                <li
                  v-for="max in roleInfo[selectedIndex].max.bubble - roleInfo[selectedIndex].base.bubble"
                  :key="'m' + max"
                  class="water-drop-icon max"
                ></li>
                <li
                  v-for="def in roleInfo[selectedIndex].threshold.bubble - roleInfo[selectedIndex].max.bubble"
                  :key="'d' + def"
                  class="water-drop-icon default"
                ></li>
              </ul>
            </li>
            <li class="value-item waterspout">
              <i class="waterspout-icon icon"></i>
              <span class="values-name">水柱</span>
              <ul class="values-display">
                <li
                  v-for="base in roleInfo[selectedIndex].base.waterspout"
                  :key="'b1' + base"
                  class="water-drop-icon base"
                ></li>
                <li
                  v-for="max in roleInfo[selectedIndex].max.waterspout - roleInfo[selectedIndex].base.waterspout"
                  :key="'m1' + max"
                  class="water-drop-icon max"
                ></li>
                <li
                  v-for="def in roleInfo[selectedIndex].threshold.waterspout - roleInfo[selectedIndex].max.waterspout"
                  :key="'d1' + def"
                  class="water-drop-icon default"
                ></li>
              </ul>
            </li>
            <li class="value-item speed">
              <i class="speed-icon icon"></i>
              <span class="values-name">速度</span>
              <ul class="values-display">
                <li
                  v-for="base in roleInfo[selectedIndex].base.speed"
                  :key="'b2' + base"
                  class="water-drop-icon base"
                ></li>
                <li
                  v-for="max in roleInfo[selectedIndex].max.speed - roleInfo[selectedIndex].base.speed"
                  :key="'m2' + max"
                  class="water-drop-icon max"
                ></li>
                <li
                  v-for="def in roleInfo[selectedIndex].threshold.speed - roleInfo[selectedIndex].max.speed"
                  :key="'d2' + def"
                  class="water-drop-icon default"
                ></li>
              </ul>
            </li>
          </ul>
          <ul class="value-reference">
            <li class="reference-item base">
              <i class="water-drop-icon base icon"></i>
              <span class="text">基础值</span>
            </li>
            <li class="reference-item max">
              <i class="water-drop-icon max icon"></i>
              <span class="text">最大值</span>
            </li>
          </ul>
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
      pageIndex: 0,
      totalPage: this.roleInfo.length / 7,
      selectedId: this.roleInfo[0] ? this.roleInfo[0].id : 1,
      selectedIndex: 0
    }
  },
  computed: {
    moveY() {
      return 'translateY(' + -this.pageIndex * (655 / 19.2) + 'vw)'
    }
  },
  methods: {
    seletcToPrev() {
      if (this.pageIndex > 0) {
        this.pageIndex--
      }
    },
    seletcToNext() {
      if (this.pageIndex < this.totalPage - 1) {
        this.pageIndex++
      }
    },
    selecteRole(id, index) {
      this.selectedId = id
      this.selectedIndex = index
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
.role-head-1 {
  background: url('~assets/images/guide/role/role_head/head_1.png') no-repeat;
  background-size: contain;
  &:hover,
  &.active {
    background: url('~assets/images/guide/role/role_head/head_1_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-2 {
  background: url('~assets/images/guide/role/role_head/head_2.png') no-repeat;
  background-size: contain;
  &:hover,
  &.active {
    background: url('~assets/images/guide/role/role_head/head_2_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-4 {
  background: url('~assets/images/guide/role/role_head/head_4.png') no-repeat;
  background-size: contain;
  &:hover,
  &.active {
    background: url('~assets/images/guide/role/role_head/head_4_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-7 {
  background: url('~assets/images/guide/role/role_head/head_7.png') no-repeat;
  background-size: contain;
  &:hover,
  &.active {
    background: url('~assets/images/guide/role/role_head/head_7_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-8 {
  background: url('~assets/images/guide/role/role_head/head_8.png') no-repeat;
  background-size: contain;
  &:hover,
  &.active {
    background: url('~assets/images/guide/role/role_head/head_8_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-12 {
  background: url('~assets/images/guide/role/role_head/head_12.png') no-repeat;
  background-size: contain;
  &:hover,
  &.active {
    background: url('~assets/images/guide/role/role_head/head_12_active.png') no-repeat;
    background-size: contain;
  }
}
.role-head-14 {
  background: url('~assets/images/guide/role/role_head/head_14.png') no-repeat;
  background-size: contain;
  &:hover,
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
  width: 369 * @vw;
  height: 474 * @vw;
  background: url('~assets/images/guide/role/role_display/role_2.png') no-repeat;
  background-size: contain;
}
.role-4 {
  width: 456 * @vw;
  height: 441 * @vw;
  background: url('~assets/images/guide/role/role_display/role_4.png') no-repeat;
  background-size: contain;
}
.role-7 {
  width: 382 * @vw;
  height: 510 * @vw;
  background: url('~assets/images/guide/role/role_display/role_7.png') no-repeat;
  background-size: contain;
}
.role-8 {
  width: 369 * @vw;
  height: 437 * @vw;
  background: url('~assets/images/guide/role/role_display/role_8.png') no-repeat;
  background-size: contain;
}
.role-12 {
  width: 322 * @vw;
  height: 526 * @vw;
  background: url('~assets/images/guide/role/role_display/role_12.png') no-repeat;
  background-size: contain;
}
.role-14 {
  width: 417 * @vw;
  height: 420 * @vw;
  background: url('~assets/images/guide/role/role_display/role_14.png') no-repeat;
  background-size: contain;
}
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
      background: url('~assets/images/guide/part05.png') no-repeat;
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
    margin-bottom: 70 * @vw;
    margin-left: 100 * @vw;
    .role-select {
      position: relative;
      width: 264 * @vw;
      height: 521 * @vw;
      background: url('~assets/images/guide/role_select_bg.png') no-repeat;
      background-size: contain;
      margin-right: 20 * @vw;
      .select-list-box {
        position: absolute;
        left: -25 * @vw;
        top: -20 * @vw;
        width: 240 * @vw;
        height: 570 * @vw;
        overflow: hidden;
      }
      .role-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        transition: all 1s;
        .role-item {
          width: 118 * @vw;
          height: 131 * @vw;
          &:hover,
          &.active {
            width: 118 * @vw;
            height: 131 * @vw;
          }
          position: relative;
          // &:nth-of-type(3n + 1) {
          //   margin: 0 20 * @vw;
          // }
          &:nth-of-type(7n + 1) {
            margin: 0 20 * @vw;
          }
          &:nth-of-type(7n + 2),
          &:nth-of-type(7n + 3) {
            top: -20 * @vw;
          }
          &:nth-of-type(7n + 4) {
            top: -20 * 2 * @vw;
            margin: 0 20 * @vw;
          }
          &:nth-of-type(7n + 5),
          &:nth-of-type(7n + 6) {
            top: -20 * 3 * @vw;
          }
          &:nth-of-type(7n + 7) {
            top: -20 * 4 * @vw;
            margin: 0 20 * @vw;
          }
        }
      }
      .prev-btn {
        position: absolute;
        right: 31 * @vw;
        bottom: 12 * @vw;
        width: 20 * @vw;
        height: 69 * @vw;
        background: url('~assets/images/guide/role_select_pre.png') no-repeat;
        background-size: contain;
        &.disabled {
          background-image: url('~assets/images/guide/role_select_pre_disabled.png');
        }
      }
      .next-btn {
        position: absolute;
        right: 31 * @vw;
        top: 20 * @vw;
        width: 20 * @vw;
        height: 69 * @vw;
        background: url('~assets/images/guide/role_select_next.png') no-repeat;
        background-size: contain;
        &.disabled {
          background-image: url('~assets/images/guide/role_select_next_disabled.png');
        }
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
        background: url('~assets/images/guide/stage_light.png') no-repeat;
        background-size: contain;
        z-index: 2;
      }
      .role-stage {
        width: 531 * @vw;
        height: 393 * @vw;
        background: url('~assets/images/guide/stage.png') no-repeat;
        background-size: contain;
        position: absolute;
        bottom: 0 * @vw;
        display: flex;
        justify-content: center;
        z-index: 1;
        .role-pic {
          position: absolute;
          bottom: 130 * @vw;
          // width: 383 * @vw;
          // height: 556 * @vw;
          // background: url('~assets/images/guide/role_lili_part5.png') no-repeat;
          // background-size: contain;
        }
      }
    }
    .role-introduct {
      margin-top: 30 * @vw;
      width: 536 * @vw;
      height: 603 * @vw;
      background: url('~assets/images/guide/role_introduce_bg.png') no-repeat;
      background-size: contain;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 16 * @vw;
      line-height: 1.5;
      color: #fff;
      .role-base-desc {
        width: 371 * @vw;
        height: 170 * @vw;
        padding-top: 10 * @vw;
        .name-wrapper {
          display: flex;
          .role-name {
            font-size: 48 * @vw;
            font-weight: bold;
          }
          .star-list {
            display: flex;
            align-items: flex-end;
            margin-left: 17 * @vw;
            .star-item {
              width: 28 * @vw;
              height: 26 * @vw;
              background: url('~assets/images/guide/star.png') no-repeat;
              background-size: contain;
              margin-right: 13 * @vw;
              margin-bottom: 13 * @vw;
            }
          }
        }
      }
      .role-ability-desc {
        width: 407 * @vw;
        height: 112 * @vw;
        margin-top: 22 * @vw;
        padding-top: 10 * @vw;
        .ability-label {
          width: 71 * @vw;
          height: 30 * @vw;
          background: url('~assets/images/guide/ability_label.png') no-repeat;
          background-size: contain;
          color: #0d1d4e;
          text-align: center;
          line-height: 30 * @vw;
          margin-bottom: 11 * @vw;
        }
      }
      .role-ability-display {
        width: 361 * @vw;
        height: 234 * @vw;
        margin-top: 10 * @vw;
        .water-drop-icon {
          width: 19 * @vw;
          height: 24 * @vw;
          margin-top: 5 * @vw;
          &.base {
            background: url('~assets/images/guide/role/water_drop_base.png') no-repeat;
            background-size: contain;
          }
          &.max {
            background: url('~assets/images/guide/role/water_drop_max.png') no-repeat;
            background-size: contain;
          }
          &.default {
            background: url('~assets/images/guide/role/water_drop_default.png') no-repeat;
            background-size: contain;
          }
        }
        .ability-values {
          height: 190 * @vw;
          font-size: 16 * @vw;
          color: #fff;
          padding: 20 * @vw 30 * @vw;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .value-item {
            display: flex;
            align-items: center;
            .bubble-icon {
              width: 37 * @vw;
              height: 43 * @vw;
              background: url('~assets/images/guide/role/role_ability_bubble.png') no-repeat;
              background-size: contain;
            }
            .waterspout-icon {
              width: 39 * @vw;
              height: 40 * @vw;
              background: url('~assets/images/guide/role/role_ability_spout.png') no-repeat;
              background-size: contain;
            }
            .speed-icon {
              width: 35 * @vw;
              height: 38 * @vw;
              background: url('~assets/images/guide/role/role_ability_speed.png') no-repeat;
              background-size: contain;
            }
            .values-name {
              margin: 0 20 * @vw 0 8 * @vw;
            }
            .values-display {
              display: flex;
            }
          }
        }
        .value-reference {
          display: flex;
          padding: 8 * @vw 30 * @vw;
          .reference-item {
            font-size: 14 * @vw;
            display: flex;
            align-items: center;
            margin-right: 56 * @vw;
            .text {
              margin-left: 5 * @vw;
            }
            &.max {
              .text {
                color: #2df6f4;
              }
            }
          }
        }
      }
    }
  }
}
</style>
