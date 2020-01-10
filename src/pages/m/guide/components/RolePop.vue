<template>
  <div @wheel.prevent class="pop">
    <div class="pop-content">
      <div class="role-intro-wrapper">
        <div class="role-intro">
          <div @click="closeRolepop" class="close-box">
            <i class="close-icon icon"></i>
          </div>
          <div class="role-intro-des">
            <div class="name-wrapper">
              <span class="role-name">{{ $t('game.' + roleData.name_key) }}</span>
              <ul class="star-list">
                <li v-for="num in roleData.star" :key="num" class="star-item"></li>
              </ul>
            </div>
            <p v-html="$t('game.' + roleData.desc_key)" class="character-desc"></p>
          </div>
        </div>
      </div>
      <div class="pop-box">
        <div class="ability-intro">
          <div class="ability-label">技能</div>
          <p v-html="$t('game.' + roleData.skill_desc_key)"></p>
        </div>
      </div>
      <div class="ability-display-wrapper">
        <div class="ability-display">
          <ul class="ability-values">
            <li class="value-item bubble">
              <div class="icon-wrapper"><i class="bubble-icon icon"></i></div>
              <span class="values-name">数量</span>
              <ul class="values-display">
                <li v-for="base in roleData.base.bubble" :key="'b' + base" class="water-drop-icon base"></li>
                <li
                  v-for="max in roleData.max.bubble - roleData.base.bubble"
                  :key="'m' + max"
                  class="water-drop-icon max"
                ></li>
                <li
                  v-for="def in roleData.threshold.bubble - roleData.max.bubble"
                  :key="'d' + def"
                  class="water-drop-icon default"
                ></li>
              </ul>
            </li>
            <li class="value-item waterspout">
              <div class="icon-wrapper"><i class="waterspout-icon icon"></i></div>
              <span class="values-name">水柱</span>
              <ul class="values-display">
                <li v-for="base in roleData.base.waterspout" :key="'b1' + base" class="water-drop-icon base"></li>
                <li
                  v-for="max in roleData.max.waterspout - roleData.base.waterspout"
                  :key="'m1' + max"
                  class="water-drop-icon max"
                ></li>
                <li
                  v-for="def in roleData.threshold.waterspout - roleData.max.waterspout"
                  :key="'d1' + def"
                  class="water-drop-icon default"
                ></li>
              </ul>
            </li>
            <li class="value-item speed">
              <div class="icon-wrapper"><i class="speed-icon icon"></i></div>
              <span class="values-name">速度</span>
              <ul class="values-display">
                <li v-for="base in roleData.base.speed" :key="'b2' + base" class="water-drop-icon base"></li>
                <li
                  v-for="max in roleData.max.speed - roleData.base.speed"
                  :key="'m2' + max"
                  class="water-drop-icon max"
                ></li>
                <li
                  v-for="def in roleData.threshold.speed - roleData.max.speed"
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
      <i class="pipe_left icon"></i>
      <i class="pipe_right icon"></i>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    roleData: {
      type: Object,
      default: null
    }
  },
  methods: {
    closeRolepop() {
      this.$emit('closeRolepop')
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
.pop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.pop-content {
  position: relative;
  width: 637 * @vw;
  height: 222 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-size: 24 * @vw;
  .pop-box {
    position: relative;
    z-index: 3;
    width: 637 * @vw;
    height: 222 * @vw;
    background: url('~assets/images/guide/m/pop_role/ability_bg.png') no-repeat;
    background-size: contain;
    animation: toScale 0.2s cubic-bezier(0, 0, 0.74, 1.19);
    @keyframes toScale {
      0% {
        transform: scale(0);
      }
      100% {
        transform: scale(1);
      }
    }
    .ability-intro {
      width: 100%;
      padding: 52 * @vw 39 * @vw 0 39 * @vw;
      .ability-label {
        width: 99 * @vw;
        height: 42 * @vw;
        background: url('~assets/images/guide/m/pop_role/ability_label.png') no-repeat;
        background-size: contain;
        color: #0d1d4e;
        text-align: center;
        line-height: 42 * @vw;
        margin-bottom: 20 * @vw;
      }
    }
  }
  .role-intro-wrapper {
    width: 637 * @vw;
    height: 280 * @vw;
    position: absolute;
    top: -270 * @vw;
    z-index: 4;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  }
  .role-intro {
    margin: 0 auto;
    width: 542 * @vw;
    height: 264 * @vw;
    background: url('~assets/images/guide/m/pop_role/introduct_bg.png') no-repeat;
    background-size: contain;
    visibility: hidden;
    animation: toUp 0.3s cubic-bezier(0, 0, 0.53, 1.33) 0.2s;
    animation-fill-mode: forwards;
    transform: translateY(15 * @vw);
    @keyframes toUp {
      0% {
        visibility: visible;
        transform: translateY(240 * @vw);
      }
      100% {
        visibility: visible;
        transform: translateY(15 * @vw);
      }
    }
    .close-box {
      width: 80 * @vw;
      height: 80 * @vw;
      background: url('~assets/images/guide/m/pop_role/close_bg.png') no-repeat;
      background-size: contain;
      position: absolute;
      top: -25 * @vw;
      right: -21 * @vw;
      display: flex;
      .close-icon {
        margin: auto;
        width: 42 * @vw;
        height: 42 * @vw;
        background: url('~assets/images/guide/m/pop_role/close_icon.png') no-repeat;
        background-size: contain;
        animation: toRotate 0.6s cubic-bezier(0.25, 0.1, 0.74, 1.27) 0.4s;
        @keyframes toRotate {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      }
    }
    .role-intro-des {
      width: 100%;
      padding: 35 * @vw 34 * @vw 0 34 * @vw;
      .name-wrapper {
        display: flex;
        align-items: flex-end;
        .role-name {
          color: #fff;
          font-size: 46 * @vw;
          font-weight: bold;
        }
        .star-list {
          display: flex;
          margin-left: 17 * @vw;
          margin-bottom: 8 * @vw;
          .star-item {
            width: 38 * @vw;
            height: 35 * @vw;
            background: url('~assets/images/guide/star.png') no-repeat;
            background-size: contain;
            margin-right: 13 * @vw;
          }
        }
      }
      .character-desc {
        margin-top: 10 * @vw;
      }
    }
  }
  .ability-display-wrapper {
    width: 668 * @vw;
    height: 457 * @vw;
    background: url('~assets/images/guide/m/pop_role/ability_display_bg.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: 150 * @vw;
    z-index: 2;
    visibility: hidden;
    animation: toDown 0.3s cubic-bezier(0, 0, 0.53, 1.33) 0.2s;
    animation-fill-mode: forwards;
    @keyframes toDown {
      0% {
        visibility: visible;
        transform: translateY(-220 * @vw);
      }
      100% {
        visibility: visible;
        transform: translateY(0);
      }
    }
    .ability-display {
      width: 100%;
      padding: 73 * @vw 0 0 126 * @vw;
      .water-drop-icon {
        width: 26 * @vw;
        height: 33 * @vw;
        // margin-top: 5 * @vw;
        &.base {
          background: url('~assets/images/guide/role/water_drop_base.png') no-repeat;
          background-size: 100%;
        }
        &.max {
          background: url('~assets/images/guide/role/water_drop_max.png') no-repeat;
          background-size: 100%;
        }
        &.default {
          background: url('~assets/images/guide/role/water_drop_default.png') no-repeat;
          background-size: 100%;
        }
      }
      .ability-values {
        height: 260 * @vw;
        font-size: 26 * @vw;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: none;
        .value-item {
          display: flex;
          align-items: center;
          .icon-wrapper {
            width: 60 * @vw;
            display: flex;
            justify-content: center;
          }
          .bubble-icon {
            width: 54 * @vw;
            height: 62 * @vw;
            background: url('~assets/images/guide/role/role_ability_bubble.png') no-repeat;
            background-size: contain;
          }
          .waterspout-icon {
            width: 57 * @vw;
            height: 59 * @vw;
            background: url('~assets/images/guide/role/role_ability_spout.png') no-repeat;
            background-size: contain;
          }
          .speed-icon {
            width: 51 * @vw;
            height: 55 * @vw;
            background: url('~assets/images/guide/role/role_ability_speed.png') no-repeat;
            background-size: contain;
          }
          .values-name {
            margin: 0 20 * @vw;
            padding-bottom: 10 * @vw;
          }
          .values-display {
            display: flex;
            flex: none;
            align-items: center;
          }
        }
      }
      .value-reference {
        display: flex;
        height: 60 * @vw;
        .reference-item {
          font-size: 24 * @vw;
          display: flex;
          align-items: center;
          margin-right: 53 * @vw;
          .text {
            margin-left: 8 * @vw;
          }
          &.max {
            .text {
              color: #2df6f4;
            }
          }
          .water-drop-icon {
            margin-top: 14 * @vw;
          }
        }
      }
    }
  }
  .pipe_left {
    width: 68 * @vw;
    height: 202 * @vw;
    background: url('~assets/images/guide/m/pop_role/pipe_left.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: 85 * @vw;
    left: -30 * @vw;
    visibility: hidden;
    z-index: 1;
    animation: toLeft 0.4s ease 0.3s;
    animation-fill-mode: forwards;
    @keyframes toLeft {
      0% {
        visibility: visible;
        transform: translateX(80 * @vw);
      }
      100% {
        visibility: visible;
        transform: translateX(0);
      }
    }
  }
  .pipe_right {
    width: 68 * @vw;
    height: 202 * @vw;
    background: url('~assets/images/guide/m/pop_role/pipe_right.png') no-repeat;
    background-size: contain;
    position: absolute;
    top: 85 * @vw;
    right: -30 * @vw;
    z-index: 1;
    visibility: hidden;
    animation: toRight 0.4s ease 0.3s;
    animation-fill-mode: forwards;
    @keyframes toRight {
      0% {
        visibility: visible;
        transform: translateX(-80 * @vw);
      }
      100% {
        visibility: visible;
        transform: translateX(0);
      }
    }
  }
}
</style>
