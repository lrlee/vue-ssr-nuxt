<template>
  <div class="download">
    <div class="download-doll"></div>
    <div class="btn-bg">
      <div class="btn ios-btn" data-link="<%=downloadLink.ios_pc_link%>"></div>
      <div class="btn android-btn" data-link="<%=downloadLink.android_link%>"></div>
      <div class="btn share-btn">
        <div class="share-box">
          <div class="btn-item">
            <a target="_blank" class="qq_icon btn-icon"></a>
            <p class="btn-name">QQ好友</p>
          </div>
          <div class="btn-item">
            <a target="_blank" class="sina_icon btn-icon"></a>
            <p class="btn-name">新浪微博</p>
          </div>
          <div class="btn-item">
            <a target="_blank" class="qzone_icon btn-icon"></a>
            <p class="btn-name">QQ空间</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
<style lang="less" scoped>
@r: 1vw/19.2;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.download {
  margin-left: 90 * @r;
  .download-doll {
    position: relative;
    width: 164 * @r;
    height: 166 * @r;
    background: url('~assets/images/event/download/doll.png') no-repeat;
    background-size: contain;
    z-index: 10;
  }
  .btn-bg {
    position: relative;
    z-index: 8;
    margin-top: -22 * @r;
    width: 159 * @r;
    height: 240 * @r;
    background: url('~assets/images/event/download/btn_bg.png') no-repeat;
    background-size: contain;
    .btn {
      display: block;
      width: 168 * @r;
      height: 61 * @r;
      position: absolute;
      transition: all 0.25s linear;
      &.ios-btn {
        background: url('~assets/images/event/download/ios_down_normal.png') no-repeat;
        background-size: contain;
        top: 28 * @r;
        left: -5 * @r;
        // 提前加载好图片
        &::after {
          content: '';
          background-image: url('~assets/images/event/download/ios_down_hover.png'),
            url('~assets/images/event/download/ios_down_click.png');
        }
        &:hover {
          background-image: url('~assets/images/event/download/ios_down_hover.png');
        }
        &:active {
          background-image: url('~assets/images/event/download/ios_down_click.png');
        }
      }
      &.android-btn {
        background: url('~assets/images/event/download/android_down_normal.png') no-repeat;
        background-size: contain;
        top: 95 * @r;
        left: -5 * @r;
        // 提前加载好图片
        &::after {
          content: '';
          background-image: url('~assets/images/event/download/android_down_hover.png'),
            url('~assets/images/event/download/android_down_click.png');
        }
        &:hover {
          background-image: url('~assets/images/event/download/android_down_hover.png');
        }
        &:active {
          background-image: url('~assets/images/event/download/android_down_click.png');
        }
      }
      &.share-btn {
        width: 140 * @r;
        height: 54 * @r;
        background: url('~assets/images/event/download/share_normal.png') no-repeat;
        background-size: contain;
        bottom: 20 * @r;
        left: 10 * @r;
        &::after {
          content: '';
          background-image: url('~assets/images/event/download/share_hover.png');
        }
        &:hover {
          background-image: url('~assets/images/event/download/share_hover.png');
          .share-box {
            opacity: 1;
          }
        }
        .share-box {
          opacity: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          position: absolute;
          transition: all 0.3s linear;
          top: -20 * @r;
          left: -305 * @r;
          width: 271 * @r;
          height: 98 * @r;
          background-color: #fefefe;
          border-left: 10 * @r solid #58cc26;
          border-radius: 10 * @r;
          // box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.32), inset 0px 0px 21px 0px rgba(0, 0, 0, 0.17);
          &::after {
            content: '';
            width: 0;
            height: 0;
            border-left: 13 * @r solid #fefefe;
            border-top: 13 * @r solid transparent;
            border-bottom: 13 * @r solid transparent;
            position: absolute;
            right: -12 * @r;
            z-index: -1;
          }
          .btn-item {
            .flex-column-center;
            padding: 0 10 * @r;
            cursor: pointer;
            .btn-name {
              font-size: 12 * @r;
              color: #a4a4a4;
              margin-top: 5 * @r;
            }
            .btn-icon {
              width: 46 * @r;
              height: 46 * @r;
              &.qq_icon {
                background: url('~assets/images/event/download/qq_icon.png') no-repeat;
                background-size: contain;
              }
              &.qzone_icon {
                background: url('~assets/images/event/download/weibo_icon.png') no-repeat;
                background-size: contain;
              }
              &.sina_icon {
                background: url('~assets/images/event/download/qqkj_icon.png') no-repeat;
                background-size: contain;
              }
            }
          }
        }
      }
    }
  }
}
</style>
