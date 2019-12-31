<template>
  <div class="part-container">
    <div id="part4" class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">游戏特色</span>
      </p>
    </div>
    <div class="content">
      <div v-swiper="swiperOption" class="swiper-container feature-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swipwr-pic" src="@/assets/images/pc/guide/pic_part4.png" />
            <div class="swiper-title title2 left"></div>
            <div class="swiper-doll doll2 right"></div>
            <div class="swiper-role role2 left"></div>
          </div>
          <div class="swiper-slide">
            <img class="swipwr-pic" src="@/assets/images/pc/guide/pic_part4.png" />
            <div class="swiper-title title3 left"></div>
            <div class="swiper-doll doll3 left"></div>
            <div class="swiper-role role3 right"></div>
          </div>
          <div class="swiper-slide">
            <img class="swipwr-pic" src="@/assets/images/pc/guide/pic_part4.png" />
            <div class="swiper-title title1 left"></div>
            <div class="swiper-doll doll1 left"></div>
            <div class="swiper-role role1 right"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const _this = this
    return {
      swiperOption: {
        effect: 'coverflow',
        navigation: {
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next'
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
          renderBullet(index, className) {
            if (index === 2) {
              return (
                '<div class="' +
                className +
                '">' +
                '<div class="bullet-pic"><p class="bullet-text">' +
                _this.getBulletText(index) +
                '</p></div>' +
                '</div>'
              )
            }
            return (
              '<div class="' +
              className +
              '">' +
              '<div class="bullet-pic"><p class="bullet-text">' +
              _this.getBulletText(index) +
              '</p></div><div class="bullet-dot"></div>' +
              '</div>'
            )
          }
        },

        loop: true,
        loopedSlides: 2,
        grabCursor: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 520,
          depth: 400,
          modifier: 1,
          slideShadows: true
        }
      }
    }
  },
  methods: {
    getBulletText(index) {
      switch (index) {
        case 0:
          return '重塑经典'
        case 1:
          return '团队交战'
        case 2:
          return '休闲竞技'
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
@keyframes move_in {
  to {
    visibility: visible;
    transform: translateX(0);
  }
}
.part-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 145 * @vw;
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/pc/guide/part04.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    margin-top: 60 * @vw;
    .feature-swiper {
      width: 1290 * @vw;
      height: 500 * @vw;
      overflow: unset;
      .swiper-slide {
        width: 850 * @vw !important;
        height: 500 * @vw !important;
        position: relative;
        .swipwr-pic {
          width: 850 * @vw;
          height: 500 * @vw;
          position: relative;
        }
        .swiper-title {
          position: absolute;
          display: none;
          top: -20 * @vw;
          left: -50 * @vw;
          &.title1 {
            width: 360 * @vw;
            height: 176 * @vw;
            background: url('~assets/images/pc/guide/title1_part4.png') no-repeat;
            background-size: contain;
          }
          &.title2 {
            width: 363 * @vw;
            height: 179 * @vw;
            background: url('~assets/images/pc/guide/title2_part4.png') no-repeat;
            background-size: contain;
          }
          &.title3 {
            width: 346 * @vw;
            height: 175 * @vw;
            background: url('~assets/images/pc/guide/title3_part4.png') no-repeat;
            background-size: contain;
          }
        }
        .left {
          visibility: hidden;
          transform: translateX(-300 * @vw);
          animation: move_in 1s;
          animation-fill-mode: forwards;
        }
        .right {
          visibility: hidden;
          transform: translateX(300 * @vw);
          animation: move_in 1s;
          animation-fill-mode: forwards;
        }
        .swiper-doll {
          position: absolute;
          display: none;
          animation-delay: 0.5s;
          &.doll1 {
            left: -260 * @vw;
            bottom: -60 * @vw;
            width: 164 * @vw;
            height: 254 * @vw;
            background: url('~assets/images/pc/guide/doll1_part4.png') no-repeat;
            background-size: contain;
          }
          &.doll2 {
            right: -132 * @vw;
            bottom: -72 * @vw;
            width: 271 * @vw;
            height: 267 * @vw;
            background: url('~assets/images/pc/guide/doll2_part4.png') no-repeat;
            background-size: contain;
          }
          &.doll3 {
            left: -232 * @vw;
            bottom: -61 * @vw;
            width: 215 * @vw;
            height: 205 * @vw;
            background: url('~assets/images/pc/guide/doll3_part4.png') no-repeat;
            background-size: contain;
          }
        }
        .swiper-role {
          position: absolute;
          display: none;
          animation-delay: 0.1s;
          &.role1 {
            right: -160 * @vw;
            bottom: -120 * @vw;
            width: 272 * @vw;
            height: 329 * @vw;
            background: url('~assets/images/pc/guide/role1_part4.png') no-repeat;
            background-size: contain;
          }
          &.role2 {
            left: -180 * @vw;
            bottom: -116 * @vw;
            width: 290 * @vw;
            height: 388 * @vw;
            background: url('~assets/images/pc/guide/role2_part4.png') no-repeat;
            background-size: contain;
          }
          &.role3 {
            right: -203 * @vw;
            bottom: -112 * @vw;
            width: 327 * @vw;
            height: 313 * @vw;
            background: url('~assets/images/pc/guide/role3_part4.png') no-repeat;
            background-size: contain;
          }
        }
        &.swiper-slide-active {
          .swiper-title {
            display: block;
          }
          .swiper-doll {
            display: block;
          }
          .swiper-role {
            display: block;
          }
        }
      }
      .swiper-button-prev {
        left: -63 * @vw;
        width: 46 * @vw;
        height: 70 * @vw;
        background: url('~assets/images/pc/guide/swiper_left.png') no-repeat;
        background-size: contain;
      }
      .swiper-button-next {
        right: -63 * @vw;
        width: 46 * @vw;
        height: 70 * @vw;
        background: url('~assets/images/pc/guide/swiper_right.png') no-repeat;
        background-size: contain;
      }
      .swiper-pagination {
        bottom: -100 * @vw;
        display: flex;
        justify-content: center;
      }
    }
  }
}
</style>
