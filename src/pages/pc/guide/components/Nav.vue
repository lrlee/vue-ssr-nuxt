<template>
  <div class="nav-box">
    <div :class="['nav-open', { hide: !isOpen }]">
      <img class="nav-title" src="~/assets/images/guide/nav/title_bg.png" />
      <div class="nav-content">
        <span @click="isOpen = false" class="nav-handle-left btn">收起</span
        ><img class="nav-content-bg" src="~/assets/images/guide/nav/content_bg.png" />
        <div :class="['menu-text', 'btn', { active: title == '超人预约见面礼' }]" @click="onTextClick('part1')">
          超人预约见面礼
        </div>
        <div :class="['menu-text', 'btn', { active: title == '超人预约加码礼' }]" @click="onTextClick('part2')">
          超人预约加码礼
        </div>
        <div :class="['menu-text', 'btn', { active: title == '呼朋唤友领福利' }]" @click="onTextClick('part3')">
          呼朋唤友领福利
        </div>
        <div :class="['menu-text', 'btn', { active: title == '游戏特色' }]" @click="onTextClick('part4')">
          游戏特色
          <img
            v-show="needShowSegment('游戏特色', '凶萌角色')"
            class="menu-segment"
            src="~/assets/images/guide/nav/content_segment.png"
          />
        </div>
        <div :class="['menu-text', 'btn', { active: title == '凶萌角色' }]" @click="onTextClick('part5')">
          凶萌角色
          <img
            v-show="needShowSegment('凶萌角色', '高能赛场')"
            class="menu-segment"
            src="~/assets/images/guide/nav/content_segment.png"
          />
        </div>
        <div :class="['menu-text', 'btn', { active: title == '高能赛场' }]" @click="onTextClick('part6')">
          高能赛场
          <img
            v-show="needShowSegment('高能赛场', '趣味玩法')"
            class="menu-segment"
            src="~/assets/images/guide/nav/content_segment.png"
          />
        </div>
        <div :class="['menu-text', 'btn', { active: title == '趣味玩法' }]" @click="onTextClick('part7')">
          趣味玩法
        </div>
      </div>
      <div @click="onBackTopClick" class="nav-handle-bottom btn">返回顶部</div>
    </div>
    <div :class="['nav-handle-open', 'btn', { hide: isOpen }]" @mouseenter="isOpen = true">展开</div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    scrollCallback: {
      type: Function,
      default: undefined
    }
  },
  data() {
    return {
      isOpen: true
    }
  },
  methods: {
    onTextClick(title) {
      if (this.scrollCallback) {
        this.scrollCallback(title)
      }
    },
    onBackTopClick() {
      if (this.scrollCallback) {
        this.scrollCallback('top')
      }
    },
    needShowSegment(title1, title2) {
      return this.title !== title1 && this.title !== title2
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/19.2;
.nav-box {
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 0;
  z-index: 100;
  .nav-title {
    width: 166 * @vw;
    height: 225 * @vw;
    transform: translate(38 * @vw, 63 * @vw);
    position: relative;
  }
  .nav-content {
    position: relative;
    .nav-handle-left {
      display: inline-block;
      width: 23 * @vw;
      height: 75 * @vw;
      vertical-align: top;
      margin-top: 31 * @vw;
      background: url('~assets/images/guide/nav/handle_left.png') no-repeat;
      background-size: cover;
      font-size: 14 * @vw;
      font-weight: 500;
      color: #1f750b;
      padding-left: 4 * @vw;
      padding-top: 26 * @vw;
      line-height: 16 * @vw;
    }
    .nav-content-bg {
      width: 205 * @vw;
      height: 394 * @vw;
    }
    .menu-text {
      font-size: 16 * @vw;
      width: 168 * @vw;
      height: 49 * @vw;
      padding-top: 10 * @vw;
      color: #bafe95;
      position: absolute;
      z-index: 10;
      left: 0;
      right: 0;
      text-align: center;
      margin: 0 auto;
      transform: translateX(5 * @vw);
      top: 0;
      &:nth-child(3) {
        top: 40 * @vw;
      }
      &:nth-child(4) {
        top: 75 * @vw;
      }
      &:nth-child(5) {
        top: 110 * @vw;
      }
      &:nth-child(6) {
        top: 208 * @vw;
      }
      &:nth-child(7) {
        top: 244 * @vw;
      }
      &:nth-child(8) {
        top: 286 * @vw;
      }
      &:nth-child(9) {
        top: 325 * @vw;
      }
    }
    .menu-segment {
      width: 148 * @vw;
      height: 1 * @vw;
      left: 0;
      right: 0;
      text-align: center;
      transform: translateY(-7 * @vw);
    }
    .active {
      background: url('~assets/images/guide/nav/choose_bg.png') no-repeat;
      background-size: cover;
      color: #1f750b;
      font-weight: bold;
    }
  }
  .nav-handle-bottom {
    display: inline-block;
    font-size: 14 * @vw;
    font-weight: 500;
    color: #2e9106;
    width: 131 * @vw;
    height: 39 * @vw;
    margin-left: 54 * @vw;
    background: url('~assets/images/guide/nav/handle_bottom.png') no-repeat;
    background-size: contain;
    padding-left: 30 * @vw;
    padding-top: 12 * @vw;
  }

  .nav-handle-open {
    display: inline-block;
    background: url('~assets/images/guide/nav/handle_open.png') no-repeat;
    background-size: contain;
    width: 180 * @vw;
    height: 230 * @vw;
    font-size: 14 * @vw;
    color: #ffffff;
    font-weight: 500;
    padding-top: 212 * @vw;
    padding-left: 132 * @vw;
  }
}
.hide {
  display: none;
}
</style>
