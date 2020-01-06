<template>
  <div class="part-container">
    <div class="pipe3"></div>
    <div class="title part-title-type1">
      <div class="title-order"></div>
      <p class="title-text">
        <span class="part-title-white">超人预约</span><span class="part-title-yellow">加码礼</span>
      </p>
    </div>
    <div class="content">
      <div class="content-wrapper">
        <div class="achieve-box box-10w active">
          <div class="book-count">
            <div class="count-doll"></div>
            <div class="count-board">
              <p class="board-title">当前预约人数</p>
              <ul class="board-num-list">
                <li v-for="(num, index) in 7" :key="index" class="board-num-item">
                  <Count-number :number="bookedTotalArr[index]"></Count-number>
                </li>
              </ul>
            </div>
          </div>
          <div class="achieve-content">
            <div class="bult-pic double"></div>
            <div class="achieve-num">
              <div class="num-pic num-10w">
                <span class="num-note">预约人数</span>
              </div>
            </div>
            <div class="view-gift btn">
              <div class="achieved-seal"></div>
              <span class="text">查看奖励</span>
            </div>
          </div>
        </div>
        <div class="achieve-box box-30w">
          <div class="bult-pic left"></div>
          <div class="bult-pic right"></div>
          <div class="view-gift btn">
            <div class="achieved-seal"></div>
            <span class="text">查看奖励</span>
          </div>
          <div class="achieve-num">
            <div class="num-pic num-30w">
              <span class="num-note">预约人数</span>
            </div>
          </div>
        </div>
        <div class="achieve-box box-50w">
          <div class="bult-pic left"></div>
          <div class="bult-pic right"></div>
          <div class="achieve-num">
            <div class="num-pic num-50w">
              <span class="num-note">预约人数</span>
            </div>
          </div>
          <div class="view-gift btn">
            <div class="achieved-seal"></div>
            <span class="text">查看奖励</span>
          </div>
        </div>
        <div class="achieve-box box-80w">
          <div class="bult-pic left"></div>
          <div class="bult-pic right"></div>
          <div class="view-gift btn">
            <div class="achieved-seal"></div>
            <span class="text">查看奖励</span>
          </div>
          <div class="achieve-num">
            <div class="num-pic num-80w">
              <span class="num-note">预约人数</span>
            </div>
          </div>
        </div>
        <div class="achieve-box box-100w">
          <div class="bult-pic left"></div>
          <div class="bult-pic right"></div>
          <div class="achieve-num">
            <div class="num-pic num-100w">
              <span class="num-note">预约人数</span>
            </div>
          </div>
          <div class="view-gift btn">
            <div class="achieved-seal"></div>
            <span class="text">查看奖励</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CountNumber from './CountNumber'
export default {
  components: {
    CountNumber
  },
  props: {
    bookedTotalArr: {
      type: Array,
      default: () => ['0', '0', '0', '0', '0', '0', '0']
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
.part-container {
  position: relative;
  z-index: 2;
  margin-top: 80 * @vw;
  width: 750 * @vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pipe3 {
    position: absolute;
    top: 1300 * @vw;
    left: 0;
    width: 137 * @vw;
    height: 1019 * @vw;
    background: url('~assets/images/guide/m/pipe3.png') no-repeat;
    background-size: contain;
  }
  .title {
    display: flex;
    justify-content: center;
    transform: translateY(28 * @vw);
    .title-order {
      width: 108 * @vw;
      height: 28 * @vw;
      background: url('~assets/images/guide/part02.png') no-repeat;
      background-size: contain;
      position: absolute;
    }
    .title-text {
      font-size: 38 * @vw;
      line-height: 100 * @vw;
    }
  }
}
.content {
  width: 716 * @vw;
  height: 1549 * @vw;
  background: url('~assets/images/guide/m/part2_bg.png') no-repeat;
  background-size: contain;
  display: flex;
  justify-content: center;
}
.content-wrapper {
  width: 559 * @vw;
  margin-top: 40 * @vw;
  .achieve-box {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding-bottom: 40 * @vw;
    .bult-pic {
      position: absolute;
      &.double {
        width: 315 * @vw;
        height: 8 * @vw;
        background: url('~assets/images/guide/bulb.png') no-repeat;
        background-size: contain;
      }
    }
    .achieve-num {
      position: relative;
      margin-top: 30 * @vw;
      .num-pic {
        position: relative;
        margin-right: 60 * @vw;
        &.num-10w {
          width: 177 * @vw;
          height: 112 * @vw;
          background: url('~assets/images/guide/m/10W.png') no-repeat;
          background-size: contain;
        }
        &.num-30w {
          width: 181 * @vw;
          height: 112 * @vw;
          background: url('~assets/images/guide/m/30W.png') no-repeat;
          background-size: contain;
        }
        &.num-50w {
          width: 181 * @vw;
          height: 112 * @vw;
          background: url('~assets/images/guide/m/50W.png') no-repeat;
          background-size: contain;
        }
        &.num-80w {
          width: 182 * @vw;
          height: 112 * @vw;
          background: url('~assets/images/guide/m/80W.png') no-repeat;
          background-size: contain;
        }
        &.num-100w {
          width: 247 * @vw;
          height: 112 * @vw;
          background: url('~assets/images/guide/m/100W.png') no-repeat;
          background-size: contain;
        }
      }
      .num-note {
        color: #30a3f6;
        font-size: 24 * @vw;
        position: absolute;
        right: -45 * @vw;
        top: 10 * @vw;
      }
    }
    .view-gift {
      width: 252 * @vw;
      height: 100 * @vw;
      background: url('~assets/images/guide/m/gift_bg_part2.png') no-repeat;
      background-size: contain;
      margin-top: 30 * @vw;
      text-align: center;
      position: relative;
      .text {
        color: #02277f;
        margin-left: 100 * @vw;
        line-height: 100 * @vw;
        font-size: 24 * @vw;
      }
      .achieved-seal {
        position: absolute;
        right: -20 * @vw;
        top: -60 * @vw;
        width: 104 * @vw;
        height: 93 * @vw;
        background: url('~assets/images/guide/achieved_seal.png') no-repeat;
        background-size: contain;
        display: none;
      }
    }
    &.box-10w {
      height: 296 * @vw;
      .book-count {
        height: 100%;
        width: 280 * @vw;
        position: relative;
        z-index: 2;
        .count-doll {
          position: absolute;
          bottom: -60 * @vw;
          width: 259 * @vw;
          height: 365 * @vw;
          background: url('~assets/images/guide/pirate_doll_part2.png') no-repeat;
          background-size: contain;
        }
        .count-board {
          position: absolute;
          bottom: -65 * @vw;
          left: -70 * @vw;
          width: 262 * @vw;
          height: 150 * @vw;
          background: url('~assets/images/guide/count_bg.png') no-repeat;
          background-size: contain;
          .board-title {
            width: 100%;
            text-align: center;
            font-size: 20 * @vw;
            font-weight: bold;
            color: #936101;
            line-height: 48 * @vw;
          }
          .board-num-list {
            display: flex;
            margin-top: 8 * @vw;
            margin-left: 8 * @vw;
            .board-num-item {
              width: 33 * @vw;
              height: 50 * @vw;
              overflow: hidden;
            }
          }
        }
      }
      .achieve-content {
        position: relative;
        z-index: 1;
        width: 279 * @vw;
        height: 100%;
        .bult-pic {
          left: -100 * @vw;
        }
      }
    }
    &.box-30w {
      height: 265 * @vw;
    }
    &.box-50w {
      height: 248 * @vw;
    }
    &.box-80w {
      height: 252 * @vw;
    }
    &.box-100w {
      height: 235 * @vw;
    }
    &.active {
      .bult-pic {
        &.double {
          width: 403 * @vw;
          height: 142 * @vw;
          background: url('~assets/images/guide/bulb_light.png') no-repeat;
          background-size: contain;
        }
      }
      .achieve-num {
        .num-pic {
          &.num-10w {
            background-image: url('~assets/images/guide/m/10W_light.png');
          }
          &.num-30w {
            background-image: url('~assets/images/guide/m/30W_light.png');
          }
          &.num-50w {
            background-image: url('~assets/images/guide/m/50W_light.png');
          }
          &.num-80w {
            background-image: url('~assets/images/guide/m/80W_light.png');
          }
          &.num-100w {
            background-image: url('~assets/images/guide/m/100W_light.png');
          }
        }
        .num-note {
          color: #fff;
        }
      }
      .view-gift {
        width: 252 * @vw;
        height: 125 * @vw;
        background: url('~assets/images/guide/m/gift_bg_active_part2.png') no-repeat;
        background-size: contain;
        margin-top: 0;
        .text {
          color: #c15912;
          margin-left: 100 * @vw;
          line-height: 150 * @vw;
        }
        .achieved-seal {
          display: block;
        }
      }
    }
  }
}
</style>
