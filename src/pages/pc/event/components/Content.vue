<template>
  <div>
    <component :is="currentContent" />
  </div>
</template>

<script>
import Event1 from './Event1'
import Event2 from './Event2'
import Event3 from './Event3'
import Event4 from './Event4'
import Event5 from './Event5'
import Event6 from './Event6'
export default {
  components: {
    Event1,
    Event2,
    Event3,
    Event4,
    Event5,
    Event6
  },
  props: {
    selectedType: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {}
  },
  computed: {
    currentContent() {
      return `Event` + this.selectedType
    }
  }
}
</script>
<style lang="less">
@r: 1vw/19.2;
.event_content {
  color: #fff;
  font-size: 15 * @r;
  margin-top: 30 * @r;
  line-height: 1.5;
  .text-dot {
    display: inline-block;
    width: 8 * @r;
    height: 8 * @r;
    background-color: #fcc723;
    border-radius: 50%;
    margin-right: 6 * @r;
    margin-bottom: 2 * @r;
  }
  .dot-space {
    margin-left: 14 * @r;
  }
  .event-time {
    line-height: 25 * @r;
    width: 220 * @r;
    min-width: 168px;
    min-height: 19px;
    background: url('~assets/images/event/event3/time_bg.png') top left no-repeat;
    background-size: contain;
    display: inline-block;
    padding: 0 10 * @r;
    margin: 20 * @r 0 10 * @r 0;
  }
  .download-btn {
    position: relative;
    display: inline-block;
    width: 315 * @r;
    height: 66 * @r;
    background: url('~assets/images/event/down_btn_normal.png') center no-repeat;
    background-size: contain;
    transition: all 0.25s linear;
    // 提前加载好图片
    &::after {
      content: '';
      background-image: url('~assets/images/event/down_btn_hover.png'), url('~assets/images/event/down_btn_click.png');
    }
    &:hover {
      background-image: url('~assets/images/event/down_btn_hover.png');
    }
    &:active {
      background-image: url('~assets/images/event/down_btn_click.png');
    }
  }
  .download-btn2 {
    position: relative;
    display: inline-block;
    width: 375 * @r;
    height: 66 * @r;
    background: url('~assets/images/event/down2_btn_normal.png') center no-repeat;
    background-size: contain;
    transition: all 0.25s linear;
    // 提前加载好图片
    &::after {
      content: '';
      background-image: url('~assets/images/event/down2_btn_hover.png'), url('~assets/images/event/down2_btn_click.png');
    }
    &:hover {
      background-image: url('~assets/images/event/down2_btn_hover.png');
    }
    &:active {
      background-image: url('~assets/images/event/down2_btn_click.png');
    }
  }
  &.normal-event {
    .event-txt {
      .note {
        margin-top: 15 * @r;
      }
    }
    .event-prize {
      display: flex;
      justify-content: space-around;
      margin-top: 50 * @r;
    }
    .download-box {
      margin-top: 55 * @r;
      display: flex;
      justify-content: center;
    }
  }
  &.event1 {
    .event-text {
      .title-img {
        width: 638 * @r;
        height: 42 * @r;
        background: url('~assets/images/event/event1/title.png') top left no-repeat;
        background-size: contain;
      }
      .note {
        line-height: 45 * @r;
      }
    }
    .event-prize {
      width: 100%;
      height: 370 * @r;
      background: url('~assets/images/event/event1/prize_bg.png') center no-repeat;
      background-size: contain;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      padding: 0 75 * @r;
      margin-top: 15 * @r;
      .prize-img {
        width: 100%;
        height: 200 * @r;
        margin-bottom: 35 * @r;
        background: url('~assets/images/event/event1/prize.png') center no-repeat;
        background-size: contain;
      }
    }
    .event-bottom {
      position: absolute;
      bottom: 50 * @r;
      left: 50%;
      transform: translateX(-50%);
      .download-btn {
        z-index: 99;
      }
      .download-img1 {
        width: 120 * @r;
        height: 115 * @r;
        background: url('~assets/images/event/event1/download_img1.png') center no-repeat;
        background-size: contain;
        position: absolute;
        z-index: 11;
        bottom: 40 * @r;
        left: 2 * @r;
      }
      .download-img2 {
        width: 240 * @r;
        height: 280 * @r;
        background: url('~assets/images/event/event1/download_doll.png') center no-repeat;
        background-size: contain;
        position: absolute;
        z-index: 10;
        bottom: 20 * @r;
        left: 15 * @r;
      }
    }
  }
  &.event2 {
    .event-main {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      position: relative;
      .line_icon {
        width: 25 * @r;
        height: 550 * @r;
        background: url('~assets/images/event/line.png') top left no-repeat;
        background-size: contain;
        margin-top: -60 * @r;
      }
      .event-part {
        width: 460 * @r;
        .event-txt {
          .note {
            margin-top: 10 * @r;
          }
        }
        .event-prize {
          margin-top: 35 * @r;
        }
        &.first {
          .title-img {
            width: 380 * @r;
            height: 42 * @r;
            background: url('~assets/images/event/event2/title1.png') top left no-repeat;
            background-size: contain;
          }
          .event-prize {
            width: 100%;
            height: 236 * @r;
            background: url('~assets/images/event/event2/prize1.png') center no-repeat;
            background-size: contain;
          }
        }
        &.second {
          .title-img {
            width: 300 * @r;
            height: 88 * @r;
            background: url('~assets/images/event/event2/title2.png') top left no-repeat;
            background-size: contain;
          }
          .event-prize {
            width: 100%;
            height: 236 * @r;
            background: url('~assets/images/event/event2/prize2.png') center no-repeat;
            background-size: contain;
          }
        }
      }
    }
    .event-download {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      margin-top: -25 * @r;
      .download-btn2 {
        z-index: 5;
      }
      .download-doll {
        width: 150 * @r;
        height: 120 * @r;
        background: url('~assets/images/event/event2/download-doll.png') top left no-repeat;
        background-size: contain;
        z-index: 6;
        margin-left: -50 * @r;
        margin-bottom: -9 * @r;
      }
    }
  }
  &.event3 {
    .even-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .event-txt {
        width: 600 * @r;
        .title-img {
          width: 385 * @r;
          height: 42 * @r;
          background: url('~assets/images/event/event3/title.png') top left no-repeat;
          background-size: contain;
        }
      }
      .download-btn {
        margin-top: 60 * @r;
      }
    }
    .event-prize {
      width: 100%;
      height: 415 * @r;
      background: url('~assets/images/event/event3/prize.png') top left no-repeat;
      background-size: contain;
      margin-top: 35 * @r;
    }
  }
  &.event4 {
    .event-part {
      &.first {
        .title-img {
          width: 550 * @r;
          height: 40 * @r;
          background: url('~assets/images/event/event4/title1.png') top left no-repeat;
          background-size: contain;
        }
        .event-prize {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-around;
          margin-top: 25 * @r;
          .prize-img {
            width: 250 * @r;
            height: 176 * @r;
            &.prize1 {
              background: url('~assets/images/event/event4/prize1-1.png') no-repeat;
              background-size: contain;
            }
            &.prize2 {
              background: url('~assets/images/event/event4/prize1-2.png') no-repeat;
              background-size: contain;
            }
          }
        }
      }
      &.second {
        margin-top: 35 * @r;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .event-txt {
          .title-img {
            width: 415 * @r;
            height: 90 * @r;
            background: url('~assets/images/event/event4/title2.png') top left no-repeat;
            background-size: contain;
          }
          .note {
            margin-top: 15 * @r;
          }
        }
        .event-QR {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          font-size: 13 * @r;
          .QR-box {
            margin-right: 25 * @r;
            display: flex;
            flex-direction: column;
            align-items: center;
            .OR-img {
              width: 100 * @r;
              height: 100 * @r;
              border: 3 * @r solid #fcc723;
              outline: 3 * @r solid #1e1f34;
              background-color: #fff;
              padding: 5 * @r;
              .QR-icon {
                width: 100%;
                height: 100%;
                background: url('~assets/images/event/event4/qr_icon.png') center no-repeat;
                background-size: contain;
              }
            }
            .QR-title {
              color: #fcc723;
              line-height: 1.5;
              margin-top: 5 * @r;
            }
            .QR-name {
              margin-top: 5 * @r;
              display: flex;
              align-items: center;
              .weibo-icon {
                width: 24 * @r;
                height: 18 * @r;
                display: inline-block;
                background: url('~assets/images/event/event4/weibo_icon.png') no-repeat;
                background-size: contain;
                margin-right: 3 * @r;
              }
              .wechat-icon {
                width: 22 * @r;
                height: 18 * @r;
                display: inline-block;
                background: url('~assets/images/event/event4/wechat_icon.png') no-repeat;
                background-size: contain;
                margin-right: 3 * @r;
              }
            }
            .QR-link {
              margin-top: 10 * @r;
              &.weibo {
                width: 100 * @r;
                height: 35 * @r;
                background: url('~assets/images/event/event4/weibo_btn_normal.png') no-repeat;
                background-size: contain;
                transition: all 0.25s linear;
                // 提前加载好图片
                &::after {
                  content: '';
                  background-image: url('~assets/images/event/event4/weibo_btn_hover.png'),
                    url('~assets/images/event/event4/weibo_btn_click.png');
                }
                &:hover {
                  background-image: url('~assets/images/event/event4/weibo_btn_hover.png');
                }
                &:active {
                  background-image: url('~assets/images/event/event4/weibo_btn_click.png');
                }
              }
            }
          }
        }
      }
    }
  }
  &.event5 {
    .event-txt {
      .title-img {
        width: 695 * @r;
        height: 40 * @r;
        background: url('~assets/images/event/event5/title.png') no-repeat;
        background-size: contain;
      }
      .note {
        width: 660 * @r;
      }
    }
    .event-prize {
      padding: 0 35 * @r;
      .prize-img {
        width: 360 * @r;
        height: 250 * @r;
        &.prize1 {
          background: url('~assets/images/event/event5/prize1.png') no-repeat;
          background-size: contain;
        }
        &.prize2 {
          background: url('~assets/images/event/event5/prize2.png') no-repeat;
          background-size: contain;
        }
      }
    }
  }
  &.event6 {
    .event-txt {
      .title-img {
        width: 430 * @r;
        height: 40 * @r;
        background: url('~assets/images/event/event6/title.png') no-repeat;
        background-size: contain;
      }
    }
    .event-prize {
      height: 250 * @r;
      .prize-img {
        width: 443 * @r;
        height: 181 * @r;
        &.prize1 {
          background: url('~assets/images/event/event6/prize1.png') no-repeat;
          background-size: contain;
        }
        &.prize2 {
          background: url('~assets/images/event/event6/prize2.png') no-repeat;
          background-size: contain;
        }
      }
    }
  }
}
</style>
