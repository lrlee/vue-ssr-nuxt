<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">游戏特色</span>
      </p>
    </div>
    <div class="content">
      <div v-swiper="swiperOption" class="swiper-container feature-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="swipwr-pic" src="~/assets/images/guide/pic_part4.png" />
            <div class="swiper-title title2 left"></div>
          </div>
          <div class="swiper-slide">
            <img class="swipwr-pic" src="~/assets/images/guide/pic_part4.png" />
            <div class="swiper-title title3 left"></div>
          </div>
          <div class="swiper-slide">
            <img class="swipwr-pic" src="~/assets/images/guide/pic_part4.png" />
            <div class="swiper-title title1 left"></div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
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
        loop: true,
        loopedSlides: 2,
        slidesPerView: 'auto',
        centeredSlides: true,
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
        coverflowEffect: {
          rotate: 30,
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
          return '团队交锋'
        case 2:
          return '休闲竞技'
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
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
  .title {
    display: flex;
    justify-content: center;
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part04.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      line-height: 100 * @vw;
    }
  }
  .content {
    margin-top: 78 * @vw;
    .feature-swiper {
      width: 668 * @vw;
      height: 408 * @vw;
      overflow: unset;
      /deep/ .swiper-pagination-bullet {
        &:focus {
          outline: none;
        }
      }
      .swiper-slide {
        width: 668 * @vw !important;
        height: 408 * @vw !important;
        position: relative;
        .swipwr-pic {
          width: 668 * @vw;
          height: 408 * @vw;
          position: relative;
        }
        .swiper-title {
          position: absolute;
          display: none;
          top: -58 * @vw;
          left: 10 * @vw;
          &.title1 {
            width: 360 * @vw;
            height: 176 * @vw;
            background: url('~assets/images/guide/title1_part4.png') no-repeat;
            background-size: contain;
          }
          &.title2 {
            width: 363 * @vw;
            height: 179 * @vw;
            background: url('~assets/images/guide/title2_part4.png') no-repeat;
            background-size: contain;
          }
          &.title3 {
            width: 346 * @vw;
            height: 175 * @vw;
            background: url('~assets/images/guide/title3_part4.png') no-repeat;
            background-size: contain;
          }
        }
        &.swiper-slide-active {
          .swiper-title {
            display: block;
          }
        }
      }
    }
  }
  .swiper-pagination {
    bottom: -100 * @vw;
    display: flex;
    justify-content: center;
    /deep/ .swiper-pagination-bullet {
      width: auto !important;
      height: auto !important;
      opacity: 1 !important;
      display: flex !important;
      align-items: center !important;
      background-color: transparent !important;
      .bullet-pic {
        width: 57 * @vw;
        height: 64 * @vw;
        background: url('~assets/images/guide/swiper_pagina.png') no-repeat;
        background-size: contain;
        position: relative;
        .bullet-text {
          width: 104 * @vw;
          text-align: center;
          font-size: 26 * @vw;
          color: #fff;
          position: absolute;
          bottom: -24 * @vw;
          left: -18 * @vw;
        }
      }
      .bullet-dot {
        width: 122 * @vw;
        height: 5 * @vw;
        transform: translateX(6 * @vw);
        background: url('~assets/images/guide/swiper_pagina_dot.png') no-repeat;
        background-size: contain;
      }
      &.swiper-pagination-bullet-active {
        .bullet-pic {
          width: 76 * @vw;
          height: 76 * @vw;
          background: url('~assets/images/guide/swiper_pagina_hover.png') no-repeat;
          background-size: contain;
        }
        .bullet-text {
          color: #ffe14d;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
