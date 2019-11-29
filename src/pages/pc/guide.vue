<template>
  <div>
    guid
    <div>
      <!-- <swiper :options="swiperOption">
        <swiper-slide>
          <img src="@/assets/images/event/content_bg.png" />
        </swiper-slide>
        <swiper-slide>
          <img src="@/assets/images/event/content_bg.png" />
        </swiper-slide>
        <div slot="pagination" class="swiper-pagination"></div>
      </swiper> -->
      <div v-swiper="swiperOption" class="banner">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="img" src="@/assets/images/event/content_bg.png" />
          </div>
          <div class="swiper-slide">
            <img class="img" src="@/assets/images/event/content_bg.png" />
          </div>
        </div>
        <div class="swiper-pagination swiper-pagination-bullets"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        autoplay: true, // 是否自动播放
        loop: true, // 是否自动轮播
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }, // 轮播图中下标点显示
        paginationClickable: true // 轮播图中下标点显示
      }
    }
  },
  head() {
    return {
      title: '这是SEOTitle',
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content: '这是SEO,keywords'
        },
        {
          hid: 'description',
          name: 'description',
          content: '这是SEO,description'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped></style>
