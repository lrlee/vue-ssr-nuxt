<template>
  <div class="container">
    <div class="main_index">
      <div class="top">
        <div class="logo_icon"></div>
        <div class="title_img"></div>
      </div>
      <div class="middle">
        <div class="txt_img"></div>
        <div class="date_img"></div>
      </div>
      <nuxt-link to="/event/1" class="btn_img"></nuxt-link>
    </div>
    <Foot />
  </div>
</template>

<script>
import Foot from '@/components/pc/Foot'
export default {
  layout: 'oneScreen',
  components: {
    Foot
  }
}
</script>

<style lang="less" scoped>
@r: 1vw/19.2;
.container {
  width: 100%;
  height: 100%;
  min-width: 1200px;
  min-height: 780px;
  background: url('~assets/images/event/index_bg.jpg') center no-repeat;
  background-size: cover;
}
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_index {
  width: 100%;
  .flex-column-center;
  box-sizing: border-box;
  height: 100%;
  .top {
    margin-top: 40 * @r;
    .flex-column-center;
    .logo_icon {
      width: 280 * @r;
      height: 110 * @r;
      background: url('~assets/images/event/logo.png') center no-repeat;
      background-size: contain;
    }
    .title_img {
      width: 245 * @r;
      height: 22 * @r;
      margin-top: 13 * @r;
      background: url('~assets/images/event/index_title.png') center no-repeat;
      background-size: contain;
    }
  }
  .middle {
    margin-top: 55 * @r;
    .flex-column-center;
    .txt_img {
      width: 770 * @r;
      height: 280 * @r;
      background: url('~assets/images/event/index_txt.png') center no-repeat;
      background-size: contain;
    }
    .date_img {
      width: 400 * @r;
      height: 100 * @r;
      background: url('~assets/images/event/index_date.png') center no-repeat;
      background-size: contain;
    }
  }
  .btn_img {
    margin-top: 100 * @r;
    width: 307 * @r;
    height: 70 * @r;
    background: url('~assets/images/event/index_btn_normal.png') center no-repeat;
    background-size: contain;
    transition: all 0.25s linear;
    // 提前加载好图片
    &::after {
      content: '';
      background-image: url('~assets/images/event/index_btn_hover.png'), url('~assets/images/event/index_btn_click.png');
    }
    &:hover {
      background-image: url('~assets/images/event/index_btn_hover.png');
    }
    &:active {
      background-image: url('~assets/images/event/index_btn_click.png');
    }
  }
}
</style>
