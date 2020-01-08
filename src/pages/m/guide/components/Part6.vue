<template>
  <div class="part-container">
    <div id="part6" class="title part-title-type2">
      <div class="title-order"></div>
      <p id="part6" class="title-text">
        <span class="part-title-white">高能赛场</span>
      </p>
    </div>
    <div class="content">
      <div class="pic-wraper">
        <ul class="select-wrapper">
          <li
            v-for="(item, index) in selectLists"
            :key="index"
            :class="{ active: selectedIndex === index }"
            @click="handleSelectPic(index)"
            class="select-item btn"
          >
            <span v-if="selectedIndex === index" class="item-title">{{ item.title }}</span>
          </li>
        </ul>
        <div class="pic-mask"></div>
        <ul class="pic-list">
          <li class="pic-item">
            <img :src="selectLists[selectedIndex].pic" class="item-image" />
          </li>
        </ul>
        <i @click="preClick()" class="pre-pic btn"></i>
        <i @click="nextClick()" class="next-pic btn"></i>
      </div>
      <template v-for="(item, index) in selectLists">
        <div :key="index" v-if="selectedIndex === index" class="introduct-wrapper">
          <p class="introduct-title">{{ item.title }}</p>
          <div class="hot-heart">
            <span class="hot-title">推荐:</span>
            <ul class="heart-list">
              <li v-for="heart in item.heartNum" :key="heart" class="heart-item"></li>
            </ul>
          </div>
          <div :class="'doll' + (index + 1)" class="pic-doll"></div>
          <p class="introduct-content">{{ item.content }}</p>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showpop: false,
      selectLists: [
        {
          title: '部落丛林',
          heartNum: 3,
          pic: require('~/assets/images/guide/map/map_conglin.jpg'),
          pic_big: require('~/assets/images/guide/map/map_big_conglin.jpg'),
          content:
            '古老的启星系部落，保留着宇宙最久远的智慧与文明。这里树木相伴，花草相依，远离喧嚣，是朴质的净土，探索的乐园。远古的人们热爱自由，热爱学问，拥有对宇宙最悠久的探索历史，成为宇宙历史和文明的见证者。'
        },
        {
          title: '沙漠遗迹',
          heartNum: 3,
          pic: require('~/assets/images/guide/map/map_shamo.jpg'),
          pic_big: require('~/assets/images/guide/map/map_big_shamo.jpg'),
          content:
            '当风雨不来，日月同辉，被风沙掩埋着的拉玛遗迹将重现于世。传说这所神秘的沙漠遗迹之下埋藏了大量宝藏，然而，所有进去过的人都无法寻找到出路，最终成为这座遗迹的一部分。你，能离开这里吗？'
        },
        {
          title: '风暴海船',
          heartNum: 3,
          pic: require('~/assets/images/guide/map/map_haidao.jpg'),
          pic_big: require('~/assets/images/guide/map/map_big_haidao.jpg'),
          content:
            '耳边是大海的呼啸，飓风的怒嚎，眼前是破旧的甲板，沉重的货箱。章鱼海盗听着船上传来的哭声，无比愤怒瞪向惊恐的人们。一边是可怜的章鱼宝宝，一边是无辜的人们，千钧一发，应该先帮谁呢？'
        },
        {
          title: '乐高乐园',
          heartNum: 3,
          pic: require('~/assets/images/guide/map/map_legao.jpg'),
          pic_big: require('~/assets/images/guide/map/map_big_legao.jpg'),
          content:
            '刺激的过山车轰轰而过，温馨的旋转木马缓缓转动，惊险的海盗船来回摇摆……欢迎来到欢乐的乐高乐园，和好朋友追逐，和喜欢的人打闹，唤醒内心的童真，成为一个快乐的孩子。'
        },
        {
          title: '梦幻城堡',
          heartNum: 3,
          pic: require('~/assets/images/guide/map/map_chengbao.jpg'),
          pic_big: require('~/assets/images/guide/map/map_big_chengbao.jpg'),
          content:
            '广场上有趣的玩偶，四周奇妙的建筑，远处漂浮的时钟，这所粉色的梦幻城堡充满了神奇色彩。这里是仙女座星系，受到宇宙之力的庇护，到处都充斥着魔法的力量，没有人可以破坏这里的宁静，这里是宇宙最和平最美丽的地方。'
        }
      ],
      selectedIndex: 0
    }
  },
  methods: {
    handleSelectPic(index) {
      this.selectedIndex = index
    },
    preClick() {
      this.selectedIndex--
      if (this.selectedIndex < 0) {
        this.selectedIndex = this.selectLists.length - 1
      }
    },
    nextClick() {
      this.selectedIndex++
      if (this.selectedIndex === this.selectLists.length) {
        this.selectedIndex = 0
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.introduct-title {
  font-weight: bold;
  font-size: 36 * @vw;
  color: #fff;
}
.introduct-content {
  margin-top: 42 * @vw;
  font-size: 24 * @vw;
  color: #fff;
  line-height: 1.5;
}
.hot-heart {
  display: flex;
  .hot-title {
    color: #2df6f4;
    font-size: 24 * @vw;
    line-height: 27 * @vw;
    margin-right: 13 * @vw;
  }
  .heart-list {
    display: flex;
    .heart-item {
      margin-right: 13 * @vw;
      width: 32 * @vw;
      height: 27 * @vw;
      background: url('~assets/images/guide/heart.png') no-repeat;
      background-size: contain;
    }
  }
}
.part-container {
  margin-top: 127 * @vw;
  height: 953 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part06.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    position: relative;
    width: 721 * @vw;
    height: 441 * @vw;
    top: 177 * @vw;
    left: -5 * @vw;
    background: url('~assets/images/guide/m/part6_bg.png') no-repeat;
    background-size: contain;
    .pic-wraper {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      top: -55 * @vw;
      z-index: 1;
      .pic-mask {
        position: absolute;
        width: 693 * @vw;
        height: 414 * @vw;
        background: url('~assets/images/guide/pic_mask_part6.png') no-repeat;
        background-size: contain;
        z-index: 3;
      }
      .pic-list {
        position: relative;
        z-index: 2;
        width: 668 * @vw;
        height: 374 * @vw;
        top: 4 * @vw;
        overflow: hidden;
        .pic-item {
          .item-image {
            width: 668 * @vw;
            height: 374 * @vw;
          }
        }
      }
      .pre-pic {
        position: absolute;
        top: 175 * @vw;
        width: 46 * @vw;
        height: 70 * @vw;
        left: 0;
        z-index: 4;
        background: url('~assets/images/guide/swiper_left.png') no-repeat;
        background-size: contain;
      }
      .next-pic {
        position: absolute;
        top: 175 * @vw;
        width: 46 * @vw;
        height: 70 * @vw;
        right: 0;
        z-index: 4;
        background: url('~assets/images/guide/swiper_right.png') no-repeat;
        background-size: contain;
      }
      .select-wrapper {
        width: 662 * @vw;
        position: absolute;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        top: -98 * @vw;
        .select-item {
          display: flex;
          align-items: center;
          justify-content: center;
          &.active,
          &:hover {
            .item-title {
              font-size: 23 * @vw;
              font-weight: bold;
              color: #04419e;
            }
          }
          &:nth-of-type(1) {
            width: 48 * @vw;
            height: 73 * @vw;
            background: url('~assets/images/guide/m/doll1_part6.png') no-repeat;
            background-size: contain;
            &.active,
            &:hover {
              width: 172 * @vw;
              height: 74 * @vw;
              background: url('~assets/images/guide/m/doll1_part6_1.png') no-repeat;
              background-size: contain;
              .item-title {
                margin-left: 36 * @vw;
                margin-top: 20 * @vw;
              }
            }
          }
          &:nth-of-type(2) {
            width: 72 * @vw;
            height: 85 * @vw;
            background: url('~assets/images/guide/m/doll2_part6.png') no-repeat;
            background-size: contain;
            &.active,
            &:hover {
              width: 180 * @vw;
              height: 85 * @vw;
              background: url('~assets/images/guide/m/doll2_part6_1.png') no-repeat;
              background-size: contain;
              .item-title {
                margin-left: 46 * @vw;
                margin-top: 24 * @vw;
              }
            }
          }
          &:nth-of-type(3) {
            width: 90 * @vw;
            height: 95 * @vw;
            background: url('~assets/images/guide/m/doll3_part6.png') no-repeat;
            background-size: contain;
            &.active,
            &:hover {
              width: 187 * @vw;
              height: 95 * @vw;
              background: url('~assets/images/guide/m/doll3_part6_1.png') no-repeat;
              background-size: contain;
              .item-title {
                margin-left: 72 * @vw;
                margin-top: 32 * @vw;
              }
            }
          }
          &:nth-of-type(4) {
            width: 70 * @vw;
            height: 90 * @vw;
            background-image: url('~assets/images/guide/m/doll4_part6.png');
            background-size: contain;
            &.active,
            &:hover {
              width: 189 * @vw;
              height: 90 * @vw;
              background: url('~assets/images/guide/m/doll4_part6_1.png') no-repeat;
              background-size: contain;
              .item-title {
                margin-left: 62 * @vw;
                margin-top: 32 * @vw;
              }
            }
          }
          &:nth-of-type(5) {
            width: 64 * @vw;
            height: 65 * @vw;
            background-image: url('~assets/images/guide/m/doll5_part6.png');
            background-size: contain;
            &.active,
            &:hover {
              width: 187 * @vw;
              height: 65 * @vw;
              background: url('~assets/images/guide/m/doll5_part6_1.png') no-repeat;
              background-size: contain;
              .item-title {
                margin-left: 38 * @vw;
                margin-top: 10 * @vw;
              }
            }
          }
        }
      }
    }
    .introduct-wrapper {
      z-index: 2;
      position: relative;
      box-sizing: content-box;
      width: 654 * @vw;
      left: 44 * @vw;
      top: -15 * @vw;
      .hot-heart {
        position: absolute;
        left: 190 * @vw;
        top: 10 * @vw;
      }
    }
    .pic-doll {
      position: absolute;
      right: -26 * @vw;
      pointer-events: none;
      &.doll1 {
        top: -132 * @vw;
        width: 243 * @vw;
        height: 225 * @vw;
        background: url('~assets/images/guide/doll1_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll2 {
        top: -208 * @vw;
        width: 224 * @vw;
        height: 298 * @vw;
        background: url('~assets/images/guide/doll2_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll3 {
        top: -208 * @vw;
        width: 193 * @vw;
        height: 303 * @vw;
        background: url('~assets/images/guide/doll3_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll4 {
        top: -208 * @vw;
        width: 256 * @vw;
        height: 298 * @vw;
        background: url('~assets/images/guide/doll4_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll5 {
        top: -192 * @vw;
        width: 221 * @vw;
        height: 285 * @vw;
        background: url('~assets/images/guide/doll5_part6.png') no-repeat;
        background-size: contain;
      }
    }
  }
  .pic-pop {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    .pop-body {
      width: 1300 * @vw;
      position: relative;
      .close-icon {
        position: absolute;
        right: -49 * @vw;
        top: 0;
        width: 33 * @vw;
        height: 33 * @vw;
        background: url('~assets/images/guide/close_pop.png') no-repeat;
        background-size: contain;
      }
      .pop-pic-box {
        width: 1300 * @vw;
        height: 677 * @vw;
        img {
          width: 1300 * @vw;
          height: 677 * @vw;
        }
      }
      .pop-introduct-box {
        width: 100%;
        padding: 30 * @vw 45 * @vw;
        background-color: #1c3899;
        border-radius: 0 0 10 * @vw 10 * @vw;
        .introduct-box-top {
          display: flex;
          .introduct-title {
            margin-right: 23 * @vw;
          }
          .hot-heart {
            margin-top: 16 * @vw;
          }
        }
      }
    }
  }
}
</style>
