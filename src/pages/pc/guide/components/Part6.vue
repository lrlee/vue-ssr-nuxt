<template>
  <div class="part-container">
    <div class="title part-title-type2">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">高能赛场</span>
      </p>
    </div>
    <div class="content">
      <div class="pic-wraper">
        <div class="pic-mask"></div>
        <ul class="pic-list">
          <li class="list-item">
            <img class="item-image" src="~/assets/images/pc/guide/pic_part6.png" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
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
      position: relative;
      .pic-mask {
        position: absolute;
        left: -14 * @vw;
        top: 31 * @vw;
        width: 890 * @vw;
        height: 532 * @vw;
        background: url('~assets/images/pc/guide/pic_mask_part6.png') no-repeat;
        background-size: contain;
      }
      .pic-list {
        .list-item {
          .item-image {
            width: 859 * @vw;
            height: 480 * @vw;
          }
        }
      }
    }
  }
}
</style>
