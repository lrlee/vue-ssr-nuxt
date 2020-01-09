<template>
  <nav class="nav-container">
    <div class="nav-list-wrapper">
      <i class="mask-left-icon icon"></i>
      <i class="mask-right-icon icon"></i>
      <ul class="nav-list">
        <template v-for="(item, index) in navData">
          <li
            @click="scrollToPart(`part${index + 1}`)"
            :key="index"
            :id="`nav${index + 1}`"
            :class="{ active: navTitle == item.title }"
            class="nav-item"
          >
            <i class="selected-icon icon"></i>
            <span class="item-name">{{ item.name }}</span>
            <span class="item-order">PART.0{{ index + 1 }}</span>
          </li>
        </template>
      </ul>
    </div>
    <div @click="openBookPop" class="nav-btn">
      <span class="btn-text">立即预约</span>
    </div>
  </nav>
</template>
<script>
export default {
  props: {
    navTitle: {
      type: String,
      default: '超人预约见面礼'
    }
  },
  data() {
    return {
      navData: [
        {
          title: '超人预约见面礼',
          name: '见面礼'
        },
        {
          title: '超人预约加码礼',
          name: '加码礼'
        },
        {
          title: '呼朋唤友领福利',
          name: '邀请礼'
        },
        {
          title: '游戏特色',
          name: '游戏特色'
        },
        {
          title: '凶萌角色',
          name: '凶萌角色'
        },
        {
          title: '高能赛场',
          name: '高能赛场'
        },
        {
          title: '趣味玩法',
          name: '趣味玩法'
        }
      ]
    }
  },
  watch: {
    navTitle() {
      const index = this.navData.findIndex(item => item.title === this.navTitle)
      document.getElementById(`nav${index + 1}`).scrollIntoViewIfNeeded(true)
    }
  },
  mounted() {
    this.$nextTick(() => {
      const index = this.navData.findIndex(item => item.title === this.navTitle)
      document.getElementById(`nav${index + 1}`).scrollIntoViewIfNeeded(true)
    })
  },
  methods: {
    scrollToPart(partName) {
      const element = document.getElementById(partName)
      // element.scrollIntoView({ block: 'center' })
      element.scrollIntoViewIfNeeded(true)
    },
    openBookPop() {
      this.$emit('openBookPop')
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
.nav-container {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 750 * @vw;
  height: 122 * @vw;
  background: url('~assets/images/guide/m/nav/nav_bg.png') no-repeat;
  background-size: contain;
  z-index: 10;
  display: flex;
  align-items: center;
}

.nav-list-wrapper {
  width: 469 * @vw;
  height: 122 * @vw;
  padding-top: 32 * @vw;
  overflow: hidden;
  position: relative;
  .mask-left-icon {
    position: absolute;
    left: 0;
    width: 26 * @vw;
    height: 90 * @vw;
    background: url('~assets/images/guide/m/nav/nav_mask_left.png') no-repeat;
    background-size: contain;
    z-index: 2;
  }
  .mask-right-icon {
    position: absolute;
    right: -3 * @vw;
    width: 26 * @vw;
    height: 90 * @vw;
    background: url('~assets/images/guide/m/nav/nav_mask_right.png') no-repeat;
    background-size: contain;
    z-index: 2;
  }
}

.nav-list {
  display: flex;
  width: 469 * @vw;
  height: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  position: relative;
  z-index: 1;
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 40 * @vw;
    position: relative;
    .selected-icon {
      position: absolute;
      top: 0;
      display: none;
      width: 102 * @vw;
      height: 11 * @vw;
      background: url('~assets/images/guide/m/nav/selected_icon.png') no-repeat;
      background-size: contain;
    }
    .item-name {
      color: #fff;
      font-size: 24 * @vw;
      white-space: nowrap;
      line-height: 1.5;
    }
    .item-order {
      color: #2b7a00;
      font-weight: 400;
      font-size: 18 * @vw;
      font-family: Arial;
    }
    &.active {
      .selected-icon {
        display: block;
      }
      .item-name {
        color: #fdee65;
        font-weight: bold;
      }
    }
  }
}

.nav-btn {
  width: 232 * @vw;
  height: 85 * @vw;
  background: url('~assets/images/guide/m/btn_book_normal.png') no-repeat;
  background-size: contain;
  margin-left: 30 * @vw;
  margin-top: 20 * @vw;
  line-height: 65 * @vw;
  text-align: center;
  &:active {
    background-image: url('~assets/images/guide/m/btn_book_tap.png');
  }
  .btn-text {
    color: #b36e11;
    font-size: 30 * @vw;
    font-weight: bold;
  }
}
</style>
