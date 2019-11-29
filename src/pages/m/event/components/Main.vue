<template>
  <div class="event-content">
    <component :is="currentContent" @toDownload="toDownload" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Event1 from './Event1'
import Event2 from './Event2'
import Event3 from './Event3'
import Event4 from './Event4'
import Event5 from './Event5'
import Event6 from './Event6'
import { downloadMicrospot } from '@/api'
export default {
  name: 'Content',
  components: {
    Event1,
    Event2,
    Event3,
    Event4,
    Event5,
    Event6
  },
  props: {
    select: {
      type: String,
      default: '1'
    },
    isIOS: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    ...mapState(['downloadLinks']),
    currentContent() {
      return `Event` + this.select
    },
    downloadLink() {
      if (this.isIOS) {
        return this.downloadLinks.ios_phone_link
      } else {
        return this.downloadLinks.android_link
      }
    }
  },
  methods: {
    toDownload() {
      downloadMicrospot().then(res => {
        if (this.isIOS) {
          window.open(this.downloadLink, '_blank')
        } else {
          window.open(this.downloadLink, '_self')
        }
      })
    }
  }
}
</script>

<style lang="less">
@r: 1vw/7.5;
.flex-column-center {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.event-content {
  color: #fff;
  font-size: 22 * @r;
  line-height: 34 * @r;
  .download-btn {
    position: relative;
    display: inline-block;
    width: 315 * @r;
    height: 72 * @r;
    background: url('~assets/images/event/down_btn_normal.png') center no-repeat;
    background-size: contain;
    transition: all 0.25s linear;
    // 提前加载好图片
    &::after {
      content: '';
      background-image: url('~assets/images/event/down_btn_click.png');
    }
    &:active {
      background-image: url('~assets/images/event/down_btn_click.png');
    }
  }
  .download-btn2 {
    position: relative;
    display: inline-block;
    width: 155 * @r;
    height: 185 * @r;
    background: url('~assets/images/event/down2m_btn_normal.png') center no-repeat;
    background-size: contain;
    transition: all 0.25s linear;
    // 提前加载好图片
    &::after {
      content: '';
      background-image: url('~assets/images/event/down2m_btn_tap.png');
    }
    &:active {
      background-image: url('~assets/images/event/down2m_btn_tap.png');
    }
  }
  .event-txt {
    margin-top: 38 * @r;
  }
  .event-time {
    display: flex;
    align-items: center;
    height: 33 * @r;
    width: 318 * @r;
    background: url('~assets/images/event/event3/time_bg.png') top left no-repeat;
    background-size: contain;
    padding: 0 10 * @r;
    margin-top: 18 * @r;
  }
  .note {
    display: flex;
    margin-top: 18 * @r;
    .text-dot {
      width: 8 * @r;
      height: 8 * @r;
      background-color: #fcc723;
      border-radius: 50%;
      margin-right: 6 * @r;
      margin-bottom: 2 * @r;
      flex: none;
      margin-top: 13 * @r;
    }
  }
  .event1 {
    .title-img {
      width: 419 * @r;
      height: 94 * @r;
      background: url('~assets/images/event/event1/m_title.png') no-repeat;
      background-size: contain;
    }
    .event-prize {
      .flex-column-center;
      margin-top: 38 * @r;
      .prize-img {
        width: 563 * @r;
        height: 407 * @r;
        background: url('~assets/images/event/event1/m_prize.png') no-repeat;
        background-size: contain;
      }
    }
    .event-download {
      margin-top: 90 * @r;
      .flex-column-center;
      position: relative;
      .download-doll {
        position: absolute;
        bottom: 50 * @r;
        width: 250 * @r;
        height: 213 * @r;
        background: url('~assets/images/event/event1/download_doll.png') no-repeat;
        background-size: contain;
      }
    }
  }
  .event2 {
    margin-bottom: 60 * @r;
    .part1 {
      .title-img {
        width: 453 * @r;
        height: 44 * @r;
        background: url('~assets/images/event/event2/title1.png') no-repeat;
        background-size: contain;
      }
      .event-prize {
        .flex-column-center;
        margin-top: 38 * @r;
        position: relative;
        .prize-img {
          width: 635 * @r;
          height: 320 * @r;
          background: url('~assets/images/event/event2/prize1.png') no-repeat;
          background-size: contain;
        }
        .download-btn2 {
          margin-top: -42 * @r;
        }
      }
    }
    .part2 {
      margin-top: 57 * @r;
      .title-img {
        width: 627 * @r;
        height: 47 * @r;
        background: url('~assets/images/event/event2/m_title2.png') no-repeat;
        background-size: contain;
      }
      .event-prize {
        .flex-column-center;
        margin-top: 38 * @r;
        position: relative;
        .prize-img {
          width: 635 * @r;
          height: 320 * @r;
          background: url('~assets/images/event/event2/prize2_m.png') no-repeat;
          background-size: contain;
        }
        .download-btn2 {
          margin-top: -42 * @r;
        }
      }
    }
  }
  .event3 {
    margin-bottom: 60 * @r;
    .title-img {
      width: 447 * @r;
      height: 44 * @r;
      background: url('~assets/images/event/event3/title.png') no-repeat;
      background-size: contain;
    }
    .event-prize {
      .flex-column-center;
      margin-top: 38 * @r;
      .prize-img {
        width: 654 * @r;
        height: 1369 * @r;
        background: url('~assets/images/event/event3/prize_m.png') no-repeat;
        background-size: contain;
      }
    }
    .event-download {
      margin-top: 90 * @r;
      .flex-column-center;
    }
  }
  .event4 {
    margin-bottom: 60 * @r;
    .part1 {
      .title-img {
        width: 417 * @r;
        height: 94 * @r;
        background: url('~assets/images/event/event4/m_title1.png') no-repeat;
        background-size: contain;
      }
      .event-prize {
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 38 * @r;
        position: relative;
        .prize-img {
          width: 288 * @r;
          height: 180 * @r;
          background: url('~assets/images/event/event4/prize1-1.png') no-repeat;
          background-size: contain;
        }
        .prize-img2 {
          width: 288 * @r;
          height: 180 * @r;
          background: url('~assets/images/event/event4/prize1-2.png') no-repeat;
          background-size: contain;
        }
      }
      .event-download {
        margin-top: 37 * @r;
        .flex-column-center;
      }
    }
    .part2 {
      margin-top: 69 * @r;
      .title-img {
        width: 512 * @r;
        height: 94 * @r;
        background: url('~assets/images/event/event4/title2.png') no-repeat;
        background-size: contain;
      }
      .event-focus {
        display: flex;
        justify-content: space-around;
        margin-top: 45 * @r;
        .btn {
          // width: 196*@r;
          height: 64 * @r;
          padding: 0 10 * @r;
          display: flex;
          align-items: center;
          justify-items: center;
          border-radius: 10 * @r;
          color: #fff;
          font-size: 18 * @r;
        }
        .wechat-btn {
          background-color: #3db135;
          .icon {
            width: 40 * @r;
            height: 33 * @r;
            background: url('~assets/images/event/event4/wechat_icon_white.png') no-repeat;
            background-size: contain;
          }
        }
        .weibo-btn {
          background-color: #dd4644;
          .icon {
            width: 42 * @r;
            height: 34 * @r;
            background: url('~assets/images/event/event4/weibo_icon_white.png') no-repeat;
            background-size: contain;
          }
        }
        .qq-btn {
          background-color: #188bd0;
          .icon {
            width: 31 * @r;
            height: 34 * @r;
            background: url('~assets/images/event/event4/qq_icon_white.png') no-repeat;
            background-size: contain;
          }
        }
      }
    }
  }
  .event5 {
    .title-img {
      width: 546 * @r;
      height: 94 * @r;
      background: url('~assets/images/event/event5/m_title.png') no-repeat;
      background-size: contain;
    }
    .event-prize {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 32 * @r;
      position: relative;
      .prize-img {
        width: 280 * @r;
        height: 380 * @r;
        background: url('~assets/images/event/event5/m_prize1.png') no-repeat;
        background-size: contain;
      }
      .prize-img2 {
        width: 280 * @r;
        height: 380 * @r;
        background: url('~assets/images/event/event5/m_prize2.png') no-repeat;
        background-size: contain;
      }
    }
    .event-download {
      margin-top: 78 * @r;
      .flex-column-center;
    }
  }
  .event6 {
    .title-img {
      width: 488 * @r;
      height: 44 * @r;
      background: url('~assets/images/event/event6/title.png') no-repeat;
      background-size: contain;
    }
    .event-prize {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 32 * @r;
      position: relative;
      .prize-img {
        width: 301 * @r;
        height: 459 * @r;
        background: url('~assets/images/event/event6/m_prize1.png') no-repeat;
        background-size: contain;
      }
      .prize-img2 {
        width: 301 * @r;
        height: 459 * @r;
        background: url('~assets/images/event/event6/m_prize2.png') no-repeat;
        background-size: contain;
      }
    }
    .event-download {
      margin-top: 64 * @r;
      .flex-column-center;
    }
  }
}
</style>
