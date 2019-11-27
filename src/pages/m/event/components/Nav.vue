<template>
  <div class="nav">
    <div class="nav-wrap">
      <ul class="nav-list">
        <li v-for="item in navs" class="list-item">
          <nuxt-link :to="'/m/event/' + item.id" :class="[item.class, item.active]"></nuxt-link>
        </li>
      </ul>
      <div class="nav-mask left"></div>
      <div class="nav-mask right"></div>
    </div>
    <div class="scroll-left-right-tips"></div>
  </div>
</template>

<script>
const navs = [
  {
    id: 1,
    url: '/event/1',
    class: 'event01',
    active: ''
  },
  {
    id: 2,
    url: '/event/2',
    class: 'event02',
    active: ''
  },
  {
    id: 3,
    url: '/event/3',
    class: 'event03',
    active: ''
  },
  {
    id: 4,
    url: '/event/4',
    class: 'event04',
    active: ''
  },
  {
    id: 5,
    url: '/event/5',
    class: 'event05',
    active: ''
  },
  {
    id: 6,
    url: '/event/6',
    class: 'event06',
    active: ''
  }
]
export default {
  name: 'Nav',
  props: {
    select: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      navs
    }
  },
  created() {
    this.navs.forEach(e => (e.active = ''))
    const selectIndex = Number(this.select) - 1
    this.navs[selectIndex].active = 'active'
  }
}
</script>

<style lang="less" scoped>
@r: 1vw/7.5;
@keyframes moveLeftRight {
  50% {
    transform: translateX(0);
  }
}
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav {
  position: absolute;
  bottom: 0;
  z-index: 20;
  .scroll-left-right-tips {
    position: absolute;
    right: 30 * @r;
    top: 0;
    width: 191 * @r;
    height: 113 * @r;
    background: url('~assets/images/event/scroll_left_right.png') no-repeat;
    background-size: contain;
    transform: translateX(-10%);
    animation: moveLeftRight 1.5s ease infinite;
  }

  .nav-wrap {
    width: 740 * @r;
    height: 121 * @r;
    background: url('~assets/images/event/m_nav_bg.png') no-repeat;
    background-size: contain;
    padding: 0 20 * @r;
    position: relative;
    overflow: hidden;
    .nav-mask {
      position: absolute;
      bottom: -4 * @r;
      width: 21 * @r;
      height: 101 * @r;
      &.left {
        left: 10 * @r;
        background: url('~assets/images/event/m_navmask_left.png') no-repeat;
        background-size: contain;
      }
      &.right {
        right: 16 * @r;
        background: url('~assets/images/event/m_navmask_right.png') no-repeat;
        background-size: contain;
      }
    }
  }
  .nav-list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow-x: auto;
    position: relative;
    .list-item {
      width: 271 * @r;
      flex: none;
      a {
        display: block;
        width: 271 * @r;
        height: 79 * @r;
        transition: all 0.2s linear;
        &.active {
          width: 269 * @r;
          height: 104 * @r;
        }
      }
    }
    .event01 {
      background: url('~assets/images/event/nav_01_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_01_hover.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_01_hover.png');
      }
      &.active {
        background-image: url('~assets/images/event/nav_01_checked.png');
        &:hover {
          background-image: url('~assets/images/event/nav_01_checked.png');
        }
      }
    }
    .event02 {
      background: url('~assets/images/event/nav_02_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_02_hover.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_02_hover.png');
      }
      &.active {
        background-image: url('~assets/images/event/nav_02_checked.png');
        &:hover {
          background-image: url('~assets/images/event/nav_02_checked.png');
        }
      }
    }
    .event03 {
      background: url('~assets/images/event/nav_03_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_03_hover.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_03_hover.png');
      }
      &.active {
        background-image: url('~assets/images/event/nav_03_checked.png');
        &:hover {
          background-image: url('~assets/images/event/nav_03_checked.png');
        }
      }
    }
    .event04 {
      background: url('~assets/images/event/nav_04_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_04_hover.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_04_hover.png');
      }
      &.active {
        background-image: url('~assets/images/event/nav_04_checked.png');
        &:hover {
          background-image: url('~assets/images/event/nav_04_checked.png');
        }
      }
    }
    .event05 {
      background: url('~assets/images/event/nav_05_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_05_hover.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_05_hover.png');
      }
      &.active {
        background-image: url('~assets/images/event/nav_05_checked.png');
        &:hover {
          background-image: url('~assets/images/event/nav_05_checked.png');
        }
      }
    }
    .event06 {
      background: url('~assets/images/event/nav_06_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_06_hover.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_06_hover.png');
      }
      &.active {
        background-image: url('~assets/images/event/nav_06_checked.png');
        &:hover {
          background-image: url('~assets/images/event/nav_06_checked.png');
        }
      }
    }
  }
}
</style>
