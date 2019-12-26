<template>
  <div class="container">
    <Nav v-if="showNav" :title="title" :scrollCallback="scrollToPart"></Nav>
    <Pop v-if="showPop" :bookStatus="bookStatus" @closePop="closePop" @changeBookStatus="changeBookStatus"></Pop>
    <div class="top">
      <div class="index">
        <header id="header" class="header">
          <nuxt-link to="/home" class="btn btn-toHome"></nuxt-link>
          <ul class="focus-list">
            <li class="focus-item">
              <i class="icon wechat-icon"></i>
              <div class="qrCode-tip wechat">
                <div class="qrCode-box">
                  <img class="qrCode-pic" />
                </div>
                <p class="qrCode-title">官方微信公众号</p>
              </div>
            </li>
            <li class="focus-item">
              <a target="_blank" href="https://weibo.com/u/7054585490?is_hot=1">
                <i class="icon weibo-icon"></i>
              </a>
            </li>
            <li class="focus-item">
              <a
                target="_blank"
                href="//shang.qq.com/wpa/qunwpa?idkey=50569d2d089dfffdac32cf1adfdd5be82c9c953e5cfc78d80616551b63f2fe5e"
              >
                <i class="icon qq-icon"></i>
              </a>
            </li>
            <!-- <li class="focus-item">
              <i class="icon service-icon"></i>
            </li> -->
          </ul>
        </header>
        <div class="light">
          <div class="light-pic"></div>
        </div>
      </div>
      <div class="index-main">
        <i class="icon logo-icon"></i>
        <div class="flight-left-pic"></div>
        <div class="flight-right-pic"></div>
        <div class="paopao-pic">
          <div class="ribbon-pic"></div>
          <div id="titlePic" class="title-pic"></div>
          <div class="title-activity-pic">
            <div class="play-bg"></div>
            <div @click="scrollToPart('top')" class="play-icon"></div>
          </div>
          <div class="doll-lili"></div>
          <div class="doll-rabbit"></div>
          <div class="doll-cactus"></div>
        </div>
      </div>
      <div class="activity">
        <div class="book-wrapper">
          <div @click="openBookPop" class="book-box btn">
            <div class="book-btn"></div>
            <p class="book-time">活动时间：{{ beginTime }} - {{ endTime }}</p>
          </div>
          <div class="pipe pipe1"></div>
        </div>
        <div class="part1-box">
          <div class="pipe pipe2"></div>
          <div class="part1">
            <div id="part1" class="title part-title-type1">
              <div class="title-order"></div>
              <p class="title-text">
                <span class="part-title-white">超人预约</span><span class="part-title-yellow">见面礼</span>
              </p>
            </div>
            <div class="content">
              <p class="content-title"><span class="title-text">预约即得，人人有份</span></p>
              <ul class="gift-list">
                <li
                  v-for="(gift, index) in part1Data"
                  :key="index"
                  :class="'gift' + (index + 1)"
                  class="gift-item gift1"
                >
                  <div class="gift-pic-box">
                    <img :src="part1Data[index].pic" class="gift-pic" />
                  </div>
                  <p class="gift-name">{{ $t('game.' + part1Data[index].name.key) }}</p>
                  <div class="ribbon-icon">
                    <span>x{{ part1Data[index].amount }}</span>
                  </div>
                </li>
              </ul>
              <div class="book-btn-box">
                <div @click="openBookPop" class="book-btn btn"></div>
              </div>
              <div class="part-description">
                <i class="description-order-icon icon"></i>
                <p class="description-text">
                  活动期间，使用手机号码成功预约的玩家，进入游戏点击系统邮件可领取“预约见面礼包”x1，开启后可获得丰厚奖励，每个手机号码仅可预约1次。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="part2-box">
          <div class="pipe pipe3"></div>
          <div class="part2">
            <div id="part2" class="title part-title-type1">
              <div class="title-order"></div>
              <p class="title-text">
                <span class="part-title-white">超人预约</span><span class="part-title-yellow">加码礼</span>
              </p>
            </div>
            <div class="part-row row1">
              <div class="book-count">
                <div class="count-doll"></div>
                <div class="count-board">
                  <p class="board-title">当前预约人数</p>
                  <ul class="board-num-list">
                    <li v-for="(num, index) in 6" :key="index" class="board-num-item">
                      <Count-number :number="bookedTotal_arr[index]"></Count-number>
                    </li>
                  </ul>
                </div>
              </div>
              <div :class="{ light: bookedTotal >= 10 * 10000 }" class="achieve-box box-10w">
                <div class="bult-pic"></div>
                <div class="achieve-content">
                  <div class="achieve-num">
                    <div class="num-pic num-10w">
                      <span class="num-note">预约人数</span>
                    </div>
                    <div class="achieved-seal"></div>
                  </div>
                  <div class="achieve-gift">
                    <p class="gift-note">预约达成奖励</p>
                    <ul v-if="part2Data[0].awards" class="gift-list list-4">
                      <li v-for="(gift, index) in part2Data[0].awards" :key="index" class="gift-item">
                        <div class="gift-box">
                          <img :src="part2Data[0].awards[index].pic" class="gift-pic" />
                          <span class="gift-num">x{{ part2Data[0].awards[index].amount }}</span>
                        </div>
                        <p class="gift-name">{{ $t('game.' + part2Data[0].awards[index].name.key) }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div :class="{ light: bookedTotal >= 30 * 10000 }" class="achieve-box box-30w">
                <div class="bult-pic"></div>
                <div class="achieve-content">
                  <div class="achieve-num">
                    <div class="num-pic num-30w">
                      <span class="num-note">预约人数</span>
                    </div>
                    <div class="achieved-seal"></div>
                  </div>
                  <div class="achieve-gift">
                    <p class="gift-note">预约达成奖励</p>
                    <ul v-if="part2Data[1].awards" class="gift-list list-4">
                      <li v-for="(gift, index) in part2Data[1].awards" :key="index" class="gift-item">
                        <div class="gift-box">
                          <img :src="part2Data[1].awards[index].pic" class="gift-pic" />
                          <span class="gift-num">x{{ part2Data[1].awards[index].amount }}</span>
                        </div>
                        <p class="gift-name">{{ $t('game.' + part2Data[1].awards[index].name.key) }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="part-row row2">
              <div :class="{ light: bookedTotal >= 100 * 10000 }" class="achieve-box box-100w">
                <template v-if="part2Data[4]">
                  <div class="bult-pic"></div>
                  <div class="achieve-content">
                    <div class="achieve-num">
                      <div class="num-pic num-100w">
                        <span class="num-note">预约人数</span>
                      </div>
                      <div class="achieved-seal gift-5"></div>
                    </div>
                    <div class="achieve-gift">
                      <p class="gift-note">预约达成奖励</p>
                      <ul v-if="part2Data[4].awards" class="gift-list list-5">
                        <li v-for="(gift, index) in part2Data[4].awards" :key="index" class="gift-item">
                          <div class="gift-box">
                            <img :src="part2Data[4].awards[index].pic" class="gift-pic" />
                            <span class="gift-num">x{{ part2Data[4].awards[index].amount }}</span>
                          </div>
                          <p class="gift-name">{{ $t('game.' + part2Data[4].awards[index].name.key) }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
              <div :class="{ light: bookedTotal >= 80 * 10000 }" class="achieve-box box-80w">
                <template v-if="part2Data[3]">
                  <div class="bult-pic"></div>
                  <div class="achieve-content">
                    <div class="achieve-num">
                      <div class="num-pic num-80w">
                        <span class="num-note">预约人数</span>
                      </div>
                      <div class="achieved-seal gift-5"></div>
                    </div>
                    <div class="achieve-gift">
                      <p class="gift-note">预约达成奖励</p>
                      <ul v-if="part2Data[3].awards" class="gift-list list-5">
                        <li v-for="(gift, index) in part2Data[3].awards" :key="index" class="gift-item">
                          <div class="gift-box">
                            <img :src="part2Data[3].awards[index].pic" class="gift-pic" />
                            <span class="gift-num">x{{ part2Data[3].awards[index].amount }}</span>
                          </div>
                          <p class="gift-name">{{ $t('game.' + part2Data[3].awards[index].name.key) }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
              <div :class="{ light: bookedTotal >= 50 * 10000 }" class="achieve-box box-50w">
                <template v-if="part2Data[2]">
                  <div class="bult-pic"></div>
                  <div class="achieve-content">
                    <div class="achieve-num">
                      <div class="num-pic num-50w">
                        <span class="num-note">预约人数</span>
                      </div>
                      <div class="achieved-seal gift-5"></div>
                    </div>
                    <div class="achieve-gift">
                      <p class="gift-note">预约达成奖励</p>
                      <ul v-if="part2Data[2].awards" class="gift-list list-5">
                        <li v-for="(gift, index) in part2Data[2].awards" :key="index" class="gift-item">
                          <div class="gift-box">
                            <img :src="part2Data[2].awards[index].pic" class="gift-pic" />
                            <span class="gift-num">x{{ part2Data[2].awards[index].amount }}</span>
                          </div>
                          <p class="gift-name">{{ $t('game.' + part2Data[2].awards[index].name.key) }}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
            </div>
            <div class="part-description">
              <i class="description-order-icon icon"></i>
              <p class="description-text">
                从XX年XX月XX日-XX年XX月XX日内测服开启时截止，在本页面内测预约的人数达到对应档位时，所有预约玩家均可累计获得对应的加码预约礼包。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="introduct">
      <div class="part3-box">
        <div class="part3">
          <div class="top">
            <div id="part3" class="title part-title-type2">
              <div class="title-order"></div>
              <p class="title-text">
                <span class="part-title-white">呼朋唤友</span><span class="part-title-yellow">领福利</span>
              </p>
            </div>
            <p class="top-note">活动期间，成功邀请对应数量好友完成预约，可累计领取对应的邀请预约礼</p>
          </div>
          <div class="gift-content">
            <ul class="gift-list">
              <li :class="{ light: invitedNum > 0 }" class="gift-item">
                <div class="gift-box">
                  <div v-if="part3Data[0] && part3Data[0].awards" class="gift-wrapper">
                    <img :src="part3Data[0].awards[0].pic" class="gift-pic" />
                    <p class="gift-name">
                      {{ $t('game.' + part3Data[0].awards[0].name.key) }}x{{ part3Data[0].awards[0].amount }}
                    </p>
                    <div class="gift-label">邀请1位好友</div>
                    <div class="paopao-pic"></div>
                  </div>
                </div>
                <div class="wire wire1"></div>
              </li>
              <li :class="{ light: invitedNum > 2 }" class="gift-item">
                <div class="gift-box">
                  <div v-if="part3Data[1] && part3Data[1].awards" class="gift-wrapper">
                    <img :src="part3Data[1].awards[0].pic" class="gift-pic" />
                    <p class="gift-name">
                      {{ $t('game.' + part3Data[1].awards[0].name.key) }}x{{ part3Data[1].awards[0].amount }}
                    </p>
                    <div class="gift-label">邀请3位好友</div>
                    <div class="paopao-pic"></div>
                  </div>
                </div>
                <div class="wire wire2"></div>
              </li>
              <li :class="{ light: invitedNum > 4 }" class="gift-item">
                <div class="gift-box">
                  <div v-if="part3Data[2] && part3Data[2].awards" class="gift-wrapper">
                    <img :src="part3Data[2].awards[0].pic" class="gift-pic" />
                    <p class="gift-name">
                      {{ $t('game.' + part3Data[2].awards[0].name.key) }}x{{ part3Data[2].awards[0].amount }}
                    </p>
                    <div class="gift-label">邀请5位好友</div>
                    <div class="paopao-pic"></div>
                  </div>
                </div>
                <div class="wire wire3"></div>
              </li>
              <li :class="{ light: invitedNum > 7 }" class="gift-item">
                <div class="gift-box">
                  <div v-if="part3Data[3] && part3Data[3].awards" class="gift-wrapper">
                    <img :src="part3Data[3].awards[0].pic" class="gift-pic" />
                    <p class="gift-name">
                      {{ $t('game.' + part3Data[3].awards[0].name.key) }}x{{ part3Data[3].awards[0].amount }}
                    </p>
                    <div class="gift-label">邀请8位好友</div>
                    <div class="paopao-pic"></div>
                  </div>
                </div>
                <div class="wire wire4"></div>
              </li>
            </ul>
          </div>
          <div class="invite-count">
            <div class="invite-doll"></div>
            <div class="invite-board">
              <p class="invite-text">
                您已邀请
                <span class="invite-num">{{ invitedNum }}位</span>
                好友
              </p>
              <div class="invite-btn-box">
                <div @click="openBookPop" class="invite-btn btn"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Part4></Part4>
      <Part5 :roleInfo="roleInfo"></Part5>
      <Part6></Part6>
      <Part7></Part7>
      <Rules @openBookPop="openBookPop" :contactsInfo="contactsInfo"></Rules>
    </div>
  </div>
</template>
<script>
import Nav from './components/Nav'
import Pop from './components/Pop'
import CountNumber from './components/CountNumber'
import Part4 from './components/Part4'
import Part5 from './components/Part5'
import Part6 from './components/Part6'
import Part7 from './components/Part7'
import Rules from './components/Rules'
import * as local from '@/utils/auth'
import {
  bookingOnOrOff,
  getBookTotal,
  getBookingRole,
  getBookingData,
  getInvitedCount,
  getContactsWeb
} from '@/api/index'
import { parseTime } from '@/utils/common'
export default {
  components: {
    Nav,
    CountNumber,
    Pop,
    Part4,
    Part5,
    Part6,
    Part7,
    Rules
  },
  data() {
    return {
      defaultGiftUrl: require('~/assets/images/pc/guide/gift_gold.png'),
      showPop: false,
      invite_id_self: '', // 本用户的邀请码 也是本用户的guid
      bookStatus: 'booking', // 预约状态： success 预约成功 | booking 预约中
      showNav: false,
      title: '超人预约见面礼',
      invitedNum: 0 // 邀请人数
    }
  },
  asyncData({ store }) {
    return Promise.all([bookingOnOrOff(), getBookingData(), getBookingRole(), getContactsWeb()]).then(arr => {
      let bookInfo = {}
      console.log(111, arr[3])
      if (arr[0].code === 0) {
        if (!arr[0].data.on_off) {
          store.$router.replace({
            path: '/home'
          })
          bookInfo = {
            beginTime: '',
            endTime: '',
            on_off: arr[0].data.on_off,
            bookedTotal: 0,
            bookedTotal_arr: [0]
          }
        } else {
          bookInfo = {
            beginTime: arr[0].data.begin_time ? parseTime(arr[0].data.begin_time, '{y}.{m}.{d}') : '',
            endTime: arr[0].data.end_time ? parseTime(arr[0].data.end_time, '{y}.{m}.{d}') : '',
            on_off: arr[0].data.on_off,
            bookedTotal: arr[0].data.total,
            bookedTotal_arr: arr[0].data.total.toString().split('')
          }
        }
      }
      console.log('activity', arr[1].data)
      const activityData = arr[1].data
      return {
        ...bookInfo,
        roleInfo: arr[2].data,
        part1Data: activityData.part1,
        part2Data: activityData.part2,
        part3Data: activityData.part3,
        contactsInfo: arr[3].data
      }
    })
  },
  mounted() {
    this.observeTitlePic()
    this.observePartScroll()
  },
  created() {
    if (process.client) {
      this.invite_id_self = local.getGuid() || ''
      if (this.invite_id_self) {
        this.toGetInviteDCount()
      }
    }
    console.log('ok', this.roleInfo)
    this.setBookTotalPolling()
  },
  methods: {
    toGetInviteDCount() {
      getInvitedCount(this.invite_id_self).then(res => {
        if (res.code === 0) {
          this.invitedNum = res.data
        }
      })
    },
    setBookTotalPolling() {
      this.totalPolling = setInterval(() => {
        getBookTotal().then(res => {
          if (res.code === 0) {
            this.bookedTotal = res.data
            this.bookedTotal_arr = res.data.toString().split('')
          }
        })
      }, 30000)
    },
    openBookPop() {
      this.invite_id_self = local.getGuid()
      if (this.invite_id_self) {
        this.bookStatus = 'success'
      }
      this.showPop = true
    },
    closePop() {
      this.showPop = false
    },
    changeBookStatus(status) {
      this.bookStatus = status
    },
    scrollToPart(partName) {
      let element
      switch (partName) {
        case 'top':
          element = document.getElementById('header')
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          return
        case 'part1':
          element = document.getElementById('part1')
          break
        case 'part2':
          element = document.getElementById('part2')
          break
        case 'part3':
          element = document.getElementById('part3')
          break
        case 'part4':
          element = document.getElementById('part4')
          break
        case 'part5':
          element = document.getElementById('part5')
          break
        case 'part6':
          element = document.getElementById('part6')
          break
        case 'part7':
          element = document.getElementById('part7')
          break
        default:
          break
      }
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
    },
    observeTitlePic() {
      const _this = this
      const io = new IntersectionObserver(function(entry) {
        entry.forEach(e => {
          _this.showNav = !e.isIntersecting
        })
      })
      io.POLL_INTERVAL = 100
      const titlePic = document.getElementById('titlePic')
      titlePic && io.observe(titlePic)
    },
    observePartScroll() {
      const _this = this
      const io = new IntersectionObserver(function(entry) {
        entry.forEach(e => {
          if (e.isIntersecting) {
            _this.title = e.target.textContent.trim()
          }
        })
      })
      io.POLL_INTERVAL = 100
      const part1 = document.getElementById('part1')
      const part2 = document.getElementById('part2')
      const part3 = document.getElementById('part3')
      const part4 = document.getElementById('part4')
      const part5 = document.getElementById('part5')
      const part6 = document.getElementById('part6')
      const part7 = document.getElementById('part7')
      part1 && io.observe(part1)
      part2 && io.observe(part2)
      part3 && io.observe(part3)
      part4 && io.observe(part4)
      part5 && io.observe(part5)
      part6 && io.observe(part6)
      part7 && io.observe(part7)
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide.less');
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes flight_left_move {
  0% {
    left: 0 * @vw;
  }
  100% {
    left: 100%;
  }
}
@keyframes flight_right_move {
  0% {
    left: 68%;
  }
  100% {
    left: 100%;
  }
}
@keyframes move_updown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
@keyframes scale_play {
  0% {
    transform: scale(0.8);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(0.8);
  }
}
@keyframes rise_paopao {
  from {
    transform: translateY(120 * @vw);
  }
  to {
    transform: translateY(-120 * @vw);
  }
}
.part-description {
  display: flex;
  margin-top: 20 * @vw;
  padding: 0 50 * @vw;
  .description-order-icon {
    width: 10 * @vw;
    height: 10 * @vw;
    border: 2 * @vw solid #054594;
    border-radius: 50%;
    margin: 8 * @vw 5 * @vw 0 0;
  }
  .description-text {
    color: #054594;
    font-size: 16 * @vw;
    line-height: 24 * @vw;
  }
}
.container {
  width: 100%;
  min-width: 1280px;
  overflow: hidden;
  background: url('~assets/images/pc/guide/bg.png') top center no-repeat;
  background-size: cover;
}
.top {
  width: 100%;
  position: relative;
  .index {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 961 * @vw;
    background: url('~assets/images/pc/guide/bg_city.png') bottom center no-repeat;
    background-size: cover;
    .header {
      position: relative;
      z-index: 2;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 97 * @vw;
      padding-right: 60 * @vw;
      .btn-toHome {
        width: 134 * @vw;
        height: 38 * @vw;
        background: url('~assets/images/pc/guide/btn_toHome_normal.png') no-repeat;
        background-size: contain;
        margin-right: 37 * @vw;
        &:hover {
          background-image: url('~assets/images/pc/guide/btn_toHome_click.png');
        }
      }
      .focus-list {
        display: flex;
        .focus-item {
          position: relative;
          margin-right: 27 * @vw;
          .icon {
            cursor: pointer;
            &:hover {
              opacity: 0.8;
            }
          }
          .qrCode-tip {
            visibility: hidden;
            position: absolute;
            left: -57 * @vw;
            top: 50 * @vw;
            width: 139 * @vw;
            height: 160 * @vw;
            background-color: #0048a8;
            border-radius: 10 * @vw;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            &::after {
              position: absolute;
              top: -6 * @vw;
              content: '';
              width: 0;
              height: 0;
              border-bottom: 7 * @vw solid #0048a8;
              border-left: 8 * @vw solid transparent;
              border-right: 8 * @vw solid transparent;
            }
            .qrCode-box {
              width: 126 * @vw;
              height: 126 * @vw;
              border-radius: 10 * @vw;
              display: flex;
              align-items: center;
              justify-content: center;
              .qrCode-pic {
                width: 115 * @vw;
                height: 115 * @vw;
              }
            }
            .qrCode-title {
              font-size: 14 * @vw;
              color: #fff;
            }
          }
          &:hover {
            .qrCode-tip {
              visibility: visible;
            }
          }
        }
        .wechat-icon {
          width: 24 * @vw;
          height: 19 * @vw;
          background: url('~assets/images/pc/guide/wechat_icon.png') no-repeat;
          background-size: contain;
        }
        .weibo-icon {
          width: 25 * @vw;
          height: 19 * @vw;
          background: url('~assets/images/pc/guide/weibo_icon.png') no-repeat;
          background-size: contain;
        }
        .qq-icon {
          width: 22 * @vw;
          height: 19 * @vw;
          background: url('~assets/images/pc/guide/qq_icon.png') no-repeat;
          background-size: contain;
        }
        .service-icon {
          width: 23 * @vw;
          height: 17 * @vw;
          background: url('~assets/images/pc/guide/service_icon.png') no-repeat;
          background-size: contain;
        }
      }
    }
    .light {
      position: absolute;
      z-index: 1;
      width: 100%;
      top: -278 * @vw;
      display: flex;
      justify-content: center;
      .light-pic {
        width: 1461 * @vw;
        height: 1461 * @vw;
        background: url('~assets/images/pc/guide/light_index.png') no-repeat;
        background-size: contain;
        animation: rotate 7s linear infinite;
      }
    }
  }
  .index-main {
    position: absolute;
    top: 66 * @vw;
    z-index: 10;
    width: 100%;
    display: flex;
    justify-content: center;
    .logo-icon {
      position: absolute;
      top: 0 * @vw;
      left: 310 * @vw;
      width: 277 * @vw;
      height: 120 * @vw;
      background: url('~assets/images/pc/guide/logo.png') no-repeat;
      background-size: contain;
    }
    .flight-left-pic {
      position: absolute;
      left: 0 * @vw;
      top: 135 * @vw;
      width: 87 * @vw;
      height: 52 * @vw;
      background: url('~assets/images/pc/guide/flight_index.png') no-repeat;
      background-size: contain;
      animation: flight_left_move 25s linear infinite;
    }
    .flight-right-pic {
      position: absolute;
      top: 370 * @vw;
      width: 57 * @vw;
      height: 34 * @vw;
      background: url('~assets/images/pc/guide/flight_index.png') no-repeat;
      background-size: contain;
      animation: flight_right_move 15s linear infinite;
    }
    .paopao-pic {
      position: relative;
      display: flex;
      justify-content: center;
      width: 1113 * @vw;
      height: 726 * @vw;
      background: url('~assets/images/pc/guide/paopao_index.png') no-repeat;
      background-size: contain;
      margin-left: 45 * @vw;
    }
    .ribbon-pic {
      position: absolute;
      top: 110 * @vw;
      margin-left: 21 * @vw;
      width: 944 * @vw;
      height: 599 * @vw;
      background: url('~assets/images/pc/guide/ribbon_index.png') no-repeat;
      background-size: contain;
    }
    .title-pic {
      position: absolute;
      top: 242 * @vw;
      margin-left: -23 * @vw;
      width: 713 * @vw;
      height: 271 * @vw;
      background: url('~assets/images/pc/guide/title.png') no-repeat;
      background-size: contain;
    }
    .title-activity-pic {
      position: absolute;
      bottom: 110 * @vw;
      margin-left: -9 * @vw;
      width: 628 * @vw;
      height: 67 * @vw;
      background: url('~assets/images/pc/guide/title_activity.png') no-repeat;
      background-size: contain;
      display: flex;
      justify-content: center;
      .play-bg {
        position: absolute;
        top: -22 * @vw;
        margin-left: -4 * @vw;
        width: 108 * @vw;
        height: 108 * @vw;
        background: url('~assets/images/pc/guide/play_bg_index.png') no-repeat;
        background-size: contain;
        animation: scale_play 3s infinite;
      }
      .play-icon {
        position: absolute;
        top: 8 * @vw;
        margin-left: -3 * @vw;
        width: 44 * @vw;
        height: 49 * @vw;
        background: url('~assets/images/pc/guide/play_index.png') no-repeat;
        background-size: contain;
        animation: scale_play 3s infinite;
        animation-delay: 0.8s;
      }
    }
    .doll-lili {
      position: absolute;
      right: -190 * @vw;
      top: 328 * @vw;
      width: 324 * @vw;
      height: 569 * @vw;
      background: url('~assets/images/pc/guide/lili_doll_index.png') no-repeat;
      background-size: contain;
    }
    .doll-rabbit {
      position: absolute;
      left: -125 * @vw;
      top: 380 * @vw;
      width: 261 * @vw;
      height: 488 * @vw;
      background: url('~assets/images/pc/guide/rabbit_doll_index.png') no-repeat;
      background-size: contain;
    }
    .doll-cactus {
      position: absolute;
      right: 87 * @vw;
      top: 102 * @vw;
      width: 174 * @vw;
      height: 162 * @vw;
      background: url('~assets/images/pc/guide/cactus_doll_index.png') no-repeat;
      background-size: contain;
      animation: move_updown 2s ease infinite;
    }
  }
  .activity {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 3646 * @vw;
    background: url('~assets/images/pc/guide/bg_active.png') top center no-repeat;
    background-size: cover;
    margin-top: -423 * @vw;
    padding-top: 230 * @vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    .book-wrapper {
      position: relative;
      .pipe1 {
        position: absolute;
        top: 46 * @vw;
        left: -558 * @vw;
        width: 605 * @vw;
        height: 742 * @vw;
        background: url('~assets/images/pc/guide/pipe1.png') no-repeat;
        background-size: contain;
        z-index: 1;
      }
    }
    .book-box {
      width: 391 * @vw;
      height: 166 * @vw;
      background: url('~assets/images/pc/guide/invite_btn_bg.png') no-repeat;
      background-size: contain;
      // margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: center;
      .book-btn {
        width: 352 * @vw;
        height: 147 * @vw;
        background: url('~assets/images/pc/guide/btn_book_big_normal.png') no-repeat;
        background-size: contain;
        z-index: 2;
      }
      &:hover {
        .book-btn {
          background-image: url('~assets/images/pc/guide/btn_book_big_click.png');
        }
      }
      .book-time {
        position: absolute;
        bottom: 60 * @vw;
        color: #b36e11;
        font-size: 16 * @vw;
        font-weight: bold;
        z-index: 2;
      }
    }
    .part1-box {
      position: relative;
      margin-top: 251 * @vw;
      .pipe2 {
        position: absolute;
        right: -150 * @vw;
        top: 210 * @vw;
        width: 210 * @vw;
        height: 768 * @vw;
        background: url('~assets/images/pc/guide/pipe2.png') no-repeat;
        background-size: contain;
        z-index: 1;
      }
    }
    .part2-box {
      position: relative;
      margin-top: 187 * @vw;
      .pipe3 {
        position: absolute;
        top: 530 * @vw;
        left: -228 * @vw;
        width: 274 * @vw;
        height: 997 * @vw;
        background: url('~assets/images/pc/guide/pipe3.png') no-repeat;
        background-size: contain;
        z-index: 1;
      }
    }
    .part1 {
      position: relative;
      width: 1397 * @vw;
      height: 636 * @vw;
      background: url('~assets/images/pc/guide/part1_bg.png') no-repeat;
      background-size: contain;
      margin-left: -55 * @vw;
      z-index: 2;
      padding-top: 95 * @vw;
      .title {
        position: absolute;
        top: -85 * @vw;
        left: 452 * @vw;
        display: flex;
        justify-content: center;
        .title-order {
          position: absolute;
          width: 105 * @vw;
          height: 28 * @vw;
          background: url('~assets/images/pc/guide/part01.png') no-repeat;
          background-size: contain;
        }
        .title-text {
          line-height: 100 * @vw;
        }
      }
      .content {
        width: 1195 * @vw;
        height: 493 * @vw;
        margin-left: 150 * @vw;
        // background-color: #b36e11;
        .content-title {
          width: 100%;
          height: 30 * @vw;
          text-align: center;
          background: url('~assets/images/pc/guide/line_part1.png') center center no-repeat;
          .title-text {
            padding-right: 20 * @vw;
            font-size: 23 * @vw;
            font-weight: bold;
            color: #fefda4;
            line-height: 24 * @vw;
            // -webkit-text-stroke: 3px #012e65;
          }
        }
        .gift-list {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-top: 39 * @vw;
          .gift-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            position: relative;
            .gift-pic-box {
              display: flex;
              align-items: center;
              justify-content: center;
              .gift-pic {
                width: 82 * @vw;
                // height: 82 * @vw;
                // background-color: #fff947;
              }
            }
            .gift-name {
              color: #0065aa;
              font-size: 16 * @vw;
              font-weight: bold;
              line-height: 35 * @vw;
            }
            .ribbon-icon {
              width: 114 * @vw;
              height: 33 * @vw;
              background: url('~assets/images/pc/guide/ribbon_part1.png') no-repeat;
              background-size: contain;
              position: absolute;
              bottom: 0;
              text-align: center;
              font-size: 16 * @vw;
              color: #ffffff;
              font-weight: bolder;
              // -webkit-text-stroke: 1px #28a001;
            }
            &.gift1 {
              width: 213 * @vw;
              height: 197 * @vw;
              background: url('~assets/images/pc/guide/gift1_bg_part1.png') no-repeat;
              background-size: contain;
              .gift-pic-box {
                align-self: flex-start;
                height: 143 * @vw;
                width: 175 * @vw;
              }
              .gift-name {
                align-self: flex-start;
                width: 175 * @vw;
                text-align: center;
              }
              .ribbon-icon {
                margin-left: -20 * @vw;
                bottom: -10 * @vw;
              }
            }
            &.gift2 {
              width: 196 * @vw;
              height: 221 * @vw;
              background: url('~assets/images/pc/guide/gift2_bg_part1.png') no-repeat;
              background-size: contain;
              .gift-pic-box {
                align-self: flex-start;
                height: 154 * @vw;
                width: 178 * @vw;
              }
              .gift-name {
                align-self: flex-start;
                width: 178 * @vw;
                text-align: center;
              }
              .ribbon-icon {
                margin-left: -8 * @vw;
              }
            }
            &.gift3 {
              width: 179 * @vw;
              height: 226 * @vw;
              background: url('~assets/images/pc/guide/gift3_bg_part1.png') no-repeat;
              background-size: contain;
              .gift-pic-box {
                align-self: flex-start;
                height: 155 * @vw;
                width: 178 * @vw;
              }
              .gift-name {
                align-self: flex-start;
                width: 178 * @vw;
                text-align: center;
              }
            }
            &.gift4 {
              width: 198 * @vw;
              height: 220 * @vw;
              background: url('~assets/images/pc/guide/gift4_bg_part1.png') no-repeat;
              background-size: contain;
              .gift-pic-box {
                align-self: flex-end;
                height: 154 * @vw;
                width: 178 * @vw;
              }
              .gift-name {
                align-self: flex-end;
                width: 178 * @vw;
                text-align: center;
              }
              .ribbon-icon {
                margin-left: 8 * @vw;
              }
            }
            &.gift5 {
              width: 212 * @vw;
              height: 197 * @vw;
              background: url('~assets/images/pc/guide/gift5_bg_part1.png') no-repeat;
              background-size: contain;
              .gift-pic-box {
                align-self: flex-end;
                height: 143 * @vw;
                width: 175 * @vw;
              }
              .gift-name {
                align-self: flex-end;
                width: 175 * @vw;
                text-align: center;
              }
              .ribbon-icon {
                margin-left: 20 * @vw;
                bottom: -10 * @vw;
              }
            }
          }
        }
        .book-btn-box {
          width: 100%;
          display: flex;
          justify-content: center;
          margin-top: 25 * @vw;
          .book-btn {
            width: 232 * @vw;
            height: 85 * @vw;
            background: url('~assets/images/pc/guide/btn_book_normal.png') no-repeat;
            background-size: contain;
            cursor: pointer;
            &:hover {
              background-image: url('~assets/images/pc/guide/btn_book_click.png');
            }
          }
        }
      }
    }
    .part2 {
      position: relative;
      width: 1300 * @vw;
      height: 821 * @vw;
      background: url('~assets/images/pc/guide/part2_bg.png') no-repeat;
      background-size: contain;
      margin-left: 40 * @vw;
      z-index: 2;
      padding-top: 57 * @vw;
      .title {
        position: absolute;
        top: -85 * @vw;
        left: 370 * @vw;
        display: flex;
        justify-content: center;
        .title-order {
          position: absolute;
          width: 105 * @vw;
          height: 28 * @vw;
          background: url('~assets/images/pc/guide/part02.png') no-repeat;
          background-size: contain;
        }
        .title-text {
          line-height: 100 * @vw;
        }
      }
      .part-row {
        display: flex;
        .achieve-box {
          position: relative;
          width: 364 * @vw;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          &.box-10w {
            margin-left: 10 * @vw;
            margin-right: 37 * @vw;
          }
          &.box-30w {
            margin-left: 37 * @vw;
          }
          &.box-100w {
            margin-left: 35 * @vw;
            margin-right: 27 * @vw;
            padding-top: 40 * @vw;
          }
          &.box-80w {
            margin-left: 25 * @vw;
            margin-right: 25 * @vw;
            padding-top: 40 * @vw;
          }
          &.box-50w {
            margin-left: 40 * @vw;
          }
          .bult-pic {
            position: absolute;
            width: 315 * @vw;
            height: 8 * @vw;
            background: url('~assets/images/pc/guide/bulb.png') no-repeat;
            background-size: contain;
          }
          .achieve-content {
            width: 364 * @vw;
            height: 229 * @vw;
            position: absolute;
            bottom: 30 * @vw;
            .achieve-num {
              width: 100%;
              position: relative;
              .num-pic {
                position: relative;
                &.num-10w {
                  width: 108 * @vw;
                  height: 67 * @vw;
                  background: url('~assets/images/pc/guide/10W.png') no-repeat;
                  background-size: contain;
                }
                &.num-30w {
                  width: 111 * @vw;
                  height: 67 * @vw;
                  background: url('~assets/images/pc/guide/30W.png') no-repeat;
                  background-size: contain;
                }
                &.num-100w {
                  width: 151 * @vw;
                  height: 67 * @vw;
                  background: url('~assets/images/pc/guide/100W.png') no-repeat;
                  background-size: contain;
                }
                &.num-80w {
                  width: 111 * @vw;
                  height: 67 * @vw;
                  background: url('~assets/images/pc/guide/80W.png') no-repeat;
                  background-size: contain;
                }
                &.num-50w {
                  width: 111 * @vw;
                  height: 67 * @vw;
                  background: url('~assets/images/pc/guide/50W.png') no-repeat;
                  background-size: contain;
                }
              }
              .num-note {
                color: #30a3f6;
                font-size: 16 * @vw;
                position: absolute;
                right: -35 * @vw;
              }
              .achieved-seal {
                width: 104 * @vw;
                height: 93 * @vw;
                background: url('~assets/images/pc/guide/achieved_seal.png') no-repeat;
                background-size: contain;
                position: absolute;
                right: 40 * @vw;
                top: 0 * @vw;
                display: none;
                &.gift-5 {
                  right: 110 * @vw;
                }
              }
            }
            .achieve-gift {
              width: 100%;
              margin-top: 10 * @vw;
              .gift-note {
                font-size: 14 * @vw;
                color: #30a3f6;
                font-weight: bold;
              }
              .gift-list {
                width: 100%;
                margin-top: 10 * @vw;
                display: flex;
                align-items: center;
                flex-wrap: wrap-reverse;
                &.list-4 {
                  width: 100%;
                  height: 113 * @vw;
                  border-radius: 10 * @vw;
                  background-color: #0b2e66;
                }
                &.list-5 {
                  width: 364 * @vw;
                  height: 229 * @vw;
                  position: absolute;
                  bottom: 0;
                  background: url('~assets/images/pc/guide/gift_bg_part2.png') no-repeat;
                  background-size: contain;
                  justify-content: flex-end;
                }
                .gift-item {
                  text-align: center;
                  padding-top: 5 * @vw;
                  opacity: 0.6;
                  margin: 0 10 * @vw;
                  &:nth-of-type(1) {
                    margin-left: 16 * @vw;
                  }
                  &:nth-of-type(4) {
                    margin-right: 16 * @vw;
                  }
                  &:nth-of-type(5) {
                    margin-right: 16 * @vw;
                  }
                  .gift-box {
                    width: 68 * @vw;
                    height: 71 * @vw;
                    background: url('~assets/images/pc/guide/gift_box_part2.png') no-repeat;
                    background-size: contain;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    .gift-pic {
                      width: 44 * @vw;
                      // height: 38 * @vw;
                    }
                    .gift-num {
                      font-size: 13 * @vw;
                      color: #fff;
                      position: absolute;
                      right: 5 * @vw;
                      bottom: 5 * @vw;
                    }
                  }
                  .gift-name {
                    color: #fff;
                    font-size: 14 * @vw;
                    margin-top: 3 * @vw;
                  }
                }
              }
            }
          }
          &.light {
            .bult-pic {
              width: 403 * @vw;
              height: 142 * @vw;
              background: url('~assets/images/pc/guide/bulb_light.png') no-repeat;
              background-size: contain;
            }
            .achieve-content {
              .achieve-num {
                .num-pic {
                  &.num-10w {
                    width: 108 * @vw;
                    height: 72 * @vw;
                    background: url('~assets/images/pc/guide/10W_light.png') no-repeat;
                    background-size: contain;
                  }
                  &.num-30w {
                    width: 111 * @vw;
                    height: 72 * @vw;
                    background: url('~assets/images/pc/guide/30W_light.png') no-repeat;
                    background-size: contain;
                  }
                  &.num-100w {
                    width: 151 * @vw;
                    height: 72 * @vw;
                    background: url('~assets/images/pc/guide/100W_light.png') no-repeat;
                    background-size: contain;
                  }
                  &.num-80w {
                    width: 111 * @vw;
                    height: 72 * @vw;
                    background: url('~assets/images/pc/guide/80W_light.png') no-repeat;
                    background-size: contain;
                  }
                  &.num-50w {
                    width: 111 * @vw;
                    height: 72 * @vw;
                    background: url('~assets/images/pc/guide/50W_light.png') no-repeat;
                    background-size: contain;
                  }
                }
                .num-note {
                  color: #fff;
                }
                .achieved-seal {
                  display: block;
                }
              }
              .achieve-gift {
                .gift-list {
                  .gift-item {
                    opacity: 1;
                  }
                  &.list-4 {
                    background-color: #30a3f6;
                  }
                  &.list-5 {
                    background-image: url('~assets/images/pc/guide/gift_bg_light_part2.png');
                  }
                }
              }
            }
          }
        }
        &.row1 {
          width: 100%;
          height: 291 * @vw;
          margin-top: -2 * @vw;
          .book-count {
            height: 100%;
            width: 427 * @vw;
            position: relative;
            .count-doll {
              position: absolute;
              bottom: -30 * @vw;
              left: 165 * @vw;
              width: 259 * @vw;
              height: 365 * @vw;
              background: url('~assets/images/pc/guide/pirate_doll_part2.png') no-repeat;
              background-size: contain;
            }
            .count-board {
              position: absolute;
              bottom: -45 * @vw;
              left: 45 * @vw;
              width: 262 * @vw;
              height: 150 * @vw;
              background: url('~assets/images/pc/guide/count_bg.png') no-repeat;
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
                margin-top: 10 * @vw;
                margin-left: 42 * @vw;
                .board-num-item {
                  width: 33 * @vw;
                  height: 56 * @vw;
                  overflow: hidden;
                }
              }
            }
          }
        }
        &.row2 {
          width: 100%;
          height: 325 * @vw;
        }
      }
      .part-description {
        margin-left: 40 * @vw;
        margin-top: 40 * @vw;
      }
    }
  }
}
.introduct {
  position: relative;
  width: 100%;
  height: 5259 * @vw;
  background: url('~assets/images/pc/guide/bg_content.png') top center no-repeat;
  background-size: cover;
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -700 * @vw;
  .part3-box {
    position: relative;
    top: -85 * @vw;
    left: 22 * @vw;
  }
  .part3 {
    width: 1422 * @vw;
    height: 317 * @vw;
    background: url('~assets/images/pc/guide/part3_bg.png') no-repeat;
    background-size: contain;
    .top {
      position: absolute;
      top: -472 * @vw;
      width: 1422 * @vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      .title {
        display: flex;
        justify-content: center;
        .title-order {
          width: 108 * @vw;
          height: 28 * @vw;
          background: url('~assets/images/pc/guide/part03.png') no-repeat;
          background-size: contain;
          position: absolute;
        }
        .title-text {
          line-height: 100 * @vw;
        }
      }
      .top-note {
        font-size: 16 * @vw;
        color: #fff;
        margin-top: 33 * @vw;
      }
    }
    .invite-count {
      width: 1422 * @vw;
      display: flex;
      justify-content: center;
      position: absolute;
      z-index: 2;
      bottom: -75 * @vw;
      .invite-doll {
        position: relative;
        width: 268 * @vw;
        height: 280 * @vw;
        background: url('~assets/images/pc/guide/robot_doll_part3.png') no-repeat;
        background-size: contain;
        z-index: 2;
      }
      .invite-board {
        position: relative;
        bottom: -40 * @vw;
        left: -40 * @vw;
        width: 250 * @vw;
        height: 202 * @vw;
        background: url('~assets/images/pc/guide/invite_bg.png') no-repeat;
        background-size: contain;
        z-index: 1;
        .invite-text {
          width: 100%;
          text-align: center;
          margin-top: 50 * @vw;
          font-size: 18 * @vw;
          color: #fff;
          .invite-num {
            color: #fde436;
            font-weight: bold;
          }
        }
        .invite-btn-box {
          width: 100%;
          padding-left: 2 * @vw;
        }
        .invite-btn {
          margin: 10 * @vw auto 0 auto;
          width: 195 * @vw;
          height: 70 * @vw;
          background: url('~assets/images/pc/guide/btn_invite_normal.png') no-repeat;
          background-size: contain;
          &:hover {
            background-image: url('~assets/images/pc/guide/btn_invite_click.png');
          }
        }
      }
    }
    .gift-content {
      width: 1422 * @vw;
      position: absolute;
      z-index: 1;
      bottom: 150 * @vw;
      padding: 0 60 * @vw;
      .gift-list {
        width: 100%;
        display: flex;
        align-items: flex-end;
        .gift-item {
          position: relative;
          z-index: 1;
          .gift-box {
            width: 308 * @vw;
            height: 355 * @vw;
            background: url('~assets/images/pc/guide/gift_part3_bg.png') no-repeat;
            background-size: contain;
            overflow: hidden;
            .gift-wrapper {
              width: 100%;
              height: 100%;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-end;
              padding-bottom: 65 * @vw;
              overflow: hidden;
              .gift-pic {
                width: 100 * @vw;
              }
              .gift-name {
                margin-top: 5 * @vw;
                color: #1c3899;
                font-size: 16 * @vw;
                // -webkit-text-stroke: 1px #fff;
                text-shadow: #fff 1px 0 0, #fff 0 1px 0, #fff -1px 0 0, #fff 0 -1px 0;
              }
              .gift-label {
                margin-top: 11 * @vw;
                width: 144 * @vw;
                height: 41 * @vw;
                background: url('~assets/images/pc/guide/gift_label_part3.png') no-repeat;
                background-size: contain;
                text-align: center;
                line-height: 41 * @vw;
                color: #054392;
                font-weight: bold;
                font-size: 16 * @vw;
              }
              .paopao-pic {
                width: 177 * @vw;
                height: 166 * @vw;
                background: url('~assets/images/pc/guide/paopao_part3.png') no-repeat;
                background-size: contain;
                position: absolute;
                z-index: -1;
                animation: rise_paopao 10s linear infinite;
                display: none;
              }
            }
          }
          &:nth-of-type(2) {
            top: -76 * @vw;
            left: 22 * @vw;
            z-index: 2;
          }
          &:nth-of-type(3) {
            top: -75 * @vw;
            left: 45 * @vw;
            z-index: 3;
          }
          &:nth-of-type(4) {
            top: 3 * @vw;
            left: 68 * @vw;
            z-index: 4;
          }
          .wire {
            position: absolute;
          }
          .wire1 {
            bottom: -100 * @vw;
            left: 77 * @vw;
            width: 582 * @vw;
            height: 119 * @vw;
            background: url('~assets/images/pc/guide/wire1.png') no-repeat;
            background-size: contain;
          }
          .wire2 {
            bottom: -71 * @vw;
            right: 182 * @vw;
            width: 274 * @vw;
            height: 86 * @vw;
            background: url('~assets/images/pc/guide/wire2.png') no-repeat;
            background-size: contain;
          }
          .wire3 {
            bottom: -10 * @vw;
            right: 180 * @vw;
            width: 278 * @vw;
            height: 26 * @vw;
            background: url('~assets/images/pc/guide/wire3.png') no-repeat;
            background-size: contain;
          }
          .wire4 {
            bottom: 5 * @vw;
            right: 180 * @vw;
            width: 279 * @vw;
            height: 90 * @vw;
            background: url('~assets/images/pc/guide/wire4.png') no-repeat;
            background-size: contain;
          }
          &.light {
            .gift-box {
              width: 308 * @vw;
              height: 440 * @vw;
              background: url('~assets/images/pc/guide/gift_part3_bg_light.png') no-repeat;
              background-size: contain;
            }
            .wire1 {
              background-image: url('~assets/images/pc/guide/wire1_light.png');
            }
            .wire2 {
              background-image: url('~assets/images/pc/guide/wire2_light.png');
            }
            .wire3 {
              background-image: url('~assets/images/pc/guide/wire3_light.png');
            }
            .wire4 {
              background-image: url('~assets/images/pc/guide/wire4_light.png');
            }
            .gift-wrapper {
              .gift-pic {
                animation: move_updown 3.5s ease infinite;
              }
              .paopao-pic {
                display: block;
              }
            }
          }
        }
      }
    }
  }
}
</style>
