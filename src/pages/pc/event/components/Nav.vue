<template>
  <nav class="nav">
    <nuxt-link class="nav-item home" to="/event" />
    <template v-for="nav in navs">
      <nuxt-link :key="nav.id" :to="nav.url" :class="[{ active: nav.active }, nav.class]" class="nav-item" />
    </template>
  </nav>
</template>

<script>
export default {
  props: {
    selectedType: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      navs: [
        {
          id: '1',
          url: '/event/1',
          class: 'event01',
          active: true
        },
        {
          id: '2',
          url: '/event/2',
          class: 'event02',
          active: false
        },
        {
          id: '3',
          url: '/event/3',
          class: 'event03',
          active: false
        },
        {
          id: '4',
          url: '/event/4',
          class: 'event04',
          active: false
        },
        {
          id: '5',
          url: '/event/5',
          class: 'event05',
          active: false
        },
        {
          id: '6',
          url: '/event/6',
          class: 'event06',
          active: false
        }
      ]
    }
  },
  created() {
    this.navs.forEach(item => {
      if (item.id === this.selectedType) {
        item.active = true
      } else {
        item.active = false
      }
    })
  }
}
</script>
<style lang="less" scoped>
@r: 1vw/19.2;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.nav {
  width: 215 * @r;
  height: 650 * @r;
  background: url('~assets/images/event/nav_bg.png') top left no-repeat;
  background-size: contain;
  box-sizing: border-box;
  padding: 30 * @r 20 * @r 0;
  .flex-column-center;
  .nav-item {
    width: 162 * @r;
    height: 80 * @r;
    transition: all 0.2s linear;
    &.home {
      background: url('~assets/images/event/nav_home_normal.png') center no-repeat;
      background-size: contain;
      // 提前加载好图片
      &::after {
        content: '';
        background-image: url('~assets/images/event/nav_home_hover.png'), url('~assets/images/event/nav_home_click.png');
      }
      &:hover {
        background-image: url('~assets/images/event/nav_home_hover.png');
      }
      &:active {
        background-image: url('~assets/images/event/nav_home_click.png');
      }
    }
    &.event01 {
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
    &.event02 {
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
    &.event03 {
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
    &.event04 {
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
    &.event05 {
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
    &.event06 {
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
