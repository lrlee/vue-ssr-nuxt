<template>
  <div class="part-container">
    <div id="part6" class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">高能赛场</span>
      </p>
    </div>
    <div class="content">
      <div class="pic-wraper">
        <div
          v-for="(item, index) in selectLists"
          :key="index"
          :class="{ active: selectedIndex === index }"
          @click="handleSelectPic(index)"
          class="select-item btn"
        >
          <span class="item-title">{{ item.title }}</span>
          <div class="item-doll"></div>
        </div>
        <div class="pic-mask">
          <span @click="showpop = true" class="zoom-icon icon btn"></span>
        </div>
        <ul class="pic-list">
          <li class="pic-item">
            <img :src="selectLists[selectedIndex].pic" class="item-image" />
          </li>
        </ul>
      </div>
      <template v-for="(item, index) in selectLists">
        <div :key="index" v-if="selectedIndex === index" class="introduct-wrapper">
          <div class="hot-heart">
            <span class="hot-title">推荐:</span>
            <ul class="heart-list">
              <li v-for="heart in item.heartNum" :key="heart" class="heart-item"></li>
            </ul>
          </div>
          <p class="introduct-title">{{ item.title }}</p>
          <p class="introduct-content">{{ item.content }}</p>
          <div :class="'doll' + (index + 1)" class="pic-doll"></div>
        </div>
      </template>
    </div>
    <div @wheel.prevent v-if="showpop" class="pic-pop">
      <template v-for="(item, index) in selectLists">
        <div :key="index" v-if="selectedIndex === index" class="pop-body">
          <i @click="showpop = false" class="close-icon icon btn"></i>
          <div class="pop-pic-box">
            <img :src="item.pic_big" />
          </div>
          <div class="pop-introduct-box">
            <div class="introduct-box-top">
              <p class="introduct-title">{{ item.title }}</p>
              <div class="hot-heart">
                <span class="hot-title">推荐:</span>
                <ul class="heart-list">
                  <li v-for="heart in item.heartNum" :key="heart" class="heart-item"></li>
                </ul>
              </div>
            </div>
            <p class="introduct-content">{{ item.content }}</p>
          </div>
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
          pic: require('~/assets/images/pc/guide/map/map_conglin.jpg'),
          pic_big: require('~/assets/images/pc/guide/map/map_big_conglin.jpg'),
          content:
            '古老的启星系部落，保留着宇宙最久远的智慧与文明。这里树木相伴，花草相依，远离喧嚣，是朴质的净土，探索的乐园。远古的人们热爱自由，热爱学问，拥有对宇宙最悠久的探索历史，成为宇宙历史和文明的见证者。'
        },
        {
          title: '沙漠遗迹',
          heartNum: 3,
          pic: require('~/assets/images/pc/guide/map/map_shamo.jpg'),
          pic_big: require('~/assets/images/pc/guide/map/map_big_shamo.jpg'),
          content:
            '当风雨不来，日月同辉，被风沙掩埋着的拉玛遗迹将重现于世。传说这所神秘的沙漠遗迹之下埋藏了大量宝藏，然而，所有进去过的人都无法寻找到出路，最终成为这座遗迹的一部分。你，能离开这里吗？'
        },
        {
          title: '风暴海船',
          heartNum: 3,
          pic: require('~/assets/images/pc/guide/map/map_haidao.jpg'),
          pic_big: require('~/assets/images/pc/guide/map/map_big_haidao.jpg'),
          content:
            '耳边是大海的呼啸，飓风的怒嚎，眼前是破旧的甲板，沉重的货箱。章鱼海盗听着船上传来的哭声，无比愤怒瞪向惊恐的人们。一边是可怜的章鱼宝宝，一边是无辜的人们，千钧一发，应该先帮谁呢？'
        },
        {
          title: '乐高乐园',
          heartNum: 3,
          pic: require('~/assets/images/pc/guide/map/map_legao.jpg'),
          pic_big: require('~/assets/images/pc/guide/map/map_big_legao.jpg'),
          content:
            '刺激的过山车轰轰而过，温馨的旋转木马缓缓转动，惊险的海盗船来回摇摆……欢迎来到欢乐的乐高乐园，和好朋友追逐，和喜欢的人打闹，唤醒内心的童真，成为一个快乐的孩子。'
        },
        {
          title: '梦幻城堡',
          heartNum: 3,
          pic: require('~/assets/images/pc/guide/map/map_chengbao.jpg'),
          pic_big: require('~/assets/images/pc/guide/map/map_big_chengbao.jpg'),
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
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
.introduct-title {
  font-weight: bold;
  font-size: 30 * @vw;
  color: #fff;
}
.introduct-content {
  margin-top: 20 * @vw;
  font-size: 16 * @vw;
  color: #fff;
  line-height: 1.5;
}
.hot-heart {
  display: flex;
  .hot-title {
    color: #2df6f4;
    font-size: 14 * @vw;
    line-height: 18 * @vw;
    margin-right: 15 * @vw;
  }
  .heart-list {
    display: flex;
    .heart-item {
      margin-right: 10 * @vw;
      width: 21 * @vw;
      height: 18 * @vw;
      background: url('~assets/images/pc/guide/heart.png') no-repeat;
      background-size: contain;
    }
  }
}
.part-container {
  margin-top: 150 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/pc/guide/part06.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    margin-top: 111 * @vw;
    width: 1005 * @vw;
    height: 530 * @vw;
    background: url('~assets/images/pc/guide/part6_bg.png') no-repeat;
    background-size: contain;
    .pic-wraper {
      width: 859 * @vw;
      height: 480 * @vw;
      margin-left: 71 * @vw;
      margin-top: -40 * @vw;
      position: relative;
      z-index: 1;
      .pic-mask {
        position: absolute;
        left: -14 * @vw;
        top: -31 * @vw;
        width: 890 * @vw;
        height: 532 * @vw;
        background: url('~assets/images/pc/guide/pic_mask_part6.png') no-repeat;
        background-size: contain;
        z-index: 3;
        .zoom-icon {
          position: absolute;
          bottom: 38 * @vw;
          right: 36 * @vw;
          width: 46 * @vw;
          height: 46 * @vw;
          background: url('~assets/images/pc/guide/zoom_part6.png') no-repeat;
          background-size: contain;
        }
      }
      .pic-list {
        position: relative;
        z-index: 2;
        width: 859 * @vw;
        height: 480 * @vw;
        overflow: hidden;
        .pic-item {
          .item-image {
            width: 859 * @vw;
            height: 480 * @vw;
          }
        }
      }
      .select-item {
        position: absolute;
        left: -140 * @vw;
        z-index: 1;
        .item-title {
          margin-left: 30 * @vw;
          font-size: 22 * @vw;
          color: #007cd7;
          line-height: 70 * @vw;
        }
        .item-doll {
          display: none;
          position: absolute;
        }
        &.active,
        &:hover {
          z-index: 4;
          margin-left: -4 * @vw;
          .item-title {
            font-size: 24 * @vw;
            font-weight: bold;
            color: #04419e;
            margin-left: 55 * @vw;
          }
          .item-doll {
            display: block;
          }
        }
        &:nth-of-type(1) {
          top: 10 * @vw;
          width: 188 * @vw;
          height: 68 * @vw;
          background: url('~assets/images/pc/guide/select_btn1_part6.png') no-repeat;
          background-size: contain;
          .item-doll {
            left: -30 * @vw;
            top: -21 * @vw;
            width: 85 * @vw;
            height: 85 * @vw;
            background: url('~assets/images/pc/guide/select_btn1_doll_part6.png') no-repeat;
            background-size: contain;
          }
          &.active,
          &:hover {
            background-image: url('~assets/images/pc/guide/select_btn1_hover_part6.png');
          }
        }
        &:nth-of-type(2) {
          top: (78+18) * @vw;
          width: 181 * @vw;
          height: 69 * @vw;
          background: url('~assets/images/pc/guide/select_btn2_part6.png') no-repeat;
          background-size: contain;
          .item-doll {
            left: -28 * @vw;
            top: -22 * @vw;
            width: 83 * @vw;
            height: 98 * @vw;
            background: url('~assets/images/pc/guide/select_btn2_doll_part6.png') no-repeat;
            background-size: contain;
          }
          &.active,
          &:hover {
            background-image: url('~assets/images/pc/guide/select_btn2_hover_part6.png');
            &::after {
              width: 181 * @vw;
              height: 69 * @vw;
              background: url('~assets/images/pc/guide/select_btn2_part6.png') no-repeat;
              background-size: contain;
            }
          }
        }
        &:nth-of-type(3) {
          top: (78+18+69+18) * @vw;
          width: 184 * @vw;
          height: 71 * @vw;
          background: url('~assets/images/pc/guide/select_btn3_part6.png') no-repeat;
          background-size: contain;
          .item-doll {
            left: -42 * @vw;
            top: -21 * @vw;
            width: 104 * @vw;
            height: 109 * @vw;
            background: url('~assets/images/pc/guide/select_btn3_doll_part6.png') no-repeat;
            background-size: contain;
          }
          &.active,
          &:hover {
            background-image: url('~assets/images/pc/guide/select_btn3_hover_part6.png');
          }
        }
        &:nth-of-type(4) {
          top: (78+18+69+18+71+18) * @vw;
          width: 181 * @vw;
          height: 70 * @vw;
          background: url('~assets/images/pc/guide/select_btn4_part6.png') no-repeat;
          background-size: contain;
          .item-doll {
            left: -35 * @vw;
            top: -21 * @vw;
            width: 81 * @vw;
            height: 102 * @vw;
            background: url('~assets/images/pc/guide/select_btn4_doll_part6.png') no-repeat;
            background-size: contain;
          }
          &.active,
          &:hover {
            background-image: url('~assets/images/pc/guide/select_btn4_hover_part6.png');
          }
        }
        &:nth-of-type(5) {
          top: (78+18+69+18+71+18+70+18) * @vw;
          width: 184 * @vw;
          height: 71 * @vw;
          background: url('~assets/images/pc/guide/select_btn5_part6.png') no-repeat;
          background-size: contain;
          .item-doll {
            left: -20 * @vw;
            top: 0 * @vw;
            width: 74 * @vw;
            height: 75 * @vw;
            background: url('~assets/images/pc/guide/select_btn5_doll_part6.png') no-repeat;
            background-size: contain;
          }
          &.active,
          &:hover {
            background-image: url('~assets/images/pc/guide/select_btn5_hover_part6.png');
          }
        }
      }
    }
    .introduct-wrapper {
      z-index: 2;
      position: relative;
      box-sizing: content-box;
      width: 630 * @vw;
      padding-left: 271 * @vw;
      margin-top: 30 * @vw;
      .hot-heart {
        position: absolute;
        right: 0;
        top: 10 * @vw;
      }
    }
    .pic-doll {
      position: absolute;
      &.doll1 {
        left: 10 * @vw;
        top: -68 * @vw;
        width: 243 * @vw;
        height: 225 * @vw;
        background: url('~assets/images/pc/guide/doll1_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll2 {
        left: 10 * @vw;
        top: -120 * @vw;
        width: 224 * @vw;
        height: 298 * @vw;
        background: url('~assets/images/pc/guide/doll2_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll3 {
        left: 30 * @vw;
        top: -100 * @vw;
        width: 193 * @vw;
        height: 303 * @vw;
        background: url('~assets/images/pc/guide/doll3_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll4 {
        left: 10 * @vw;
        top: -110 * @vw;
        width: 256 * @vw;
        height: 298 * @vw;
        background: url('~assets/images/pc/guide/doll4_part6.png') no-repeat;
        background-size: contain;
      }
      &.doll5 {
        left: 30 * @vw;
        top: -90 * @vw;
        width: 221 * @vw;
        height: 285 * @vw;
        background: url('~assets/images/pc/guide/doll5_part6.png') no-repeat;
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
        background: url('~assets/images/pc/guide/close_pop.png') no-repeat;
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
