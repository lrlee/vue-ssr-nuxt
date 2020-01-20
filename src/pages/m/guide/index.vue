<template>
  <div class="container">
    <Book-pop
      v-if="showBookPop"
      :bookStatus="bookStatus"
      @closePop="closePop"
      @changeBookStatus="changeBookStatus"
      @toGetInviteDCount="toGetInviteDCount"
    ></Book-pop>
    <Pop-Gift
      v-if="showGiftPop"
      :bookedTotal="bookedTotal"
      :giftData="part2GiftData"
      @closeGiftPop="closeGiftPop"
    ></Pop-Gift>
    <Pop-Role v-if="showRolePop" :roleData="selectedRoleData" @closeRolepop="closeRolepop"></Pop-Role>
    <Pop-Map v-if="showMapPop" :mapData="mapData" @closeMapPop="closeMapPop"></Pop-Map>
    <Header></Header>
    <Nav :navTitle="navTitle" @openBookPop="openBookPop"></Nav>
    <div class="index-bg">
      <div class="header-space"></div>
      <div class="light-pic"></div>
      <i class="icon logo-icon"></i>
    </div>
    <div class="activity-bg">
      <div class="index-wrapper">
        <div class="paopao-pic">
          <div class="doll-cactus"></div>
          <div class="title-pic"></div>
          <div class="ribbon-pic-1"></div>
          <div class="ribbon-pic-2"></div>
          <div class="title-activity-pic">
            <div @click="showVideo = true" class="play-bg btn">
              <div class="play-icon"></div>
            </div>
          </div>
        </div>
        <div class="doll-rabbit"></div>
        <div class="doll-lili"></div>
      </div>
      <VideoDialog v-show="showVideo" @closeVideo="showVideo = false" :dialogVisible="showVideo"></VideoDialog>
      <div class="book-wrapper">
        <div @click="openBookPop" class="book-box btn">
          <div class="book-btn"></div>
          <p class="book-time">{{ beginTime }} - {{ endTime }}</p>
        </div>
        <div class="pipe pipe1"></div>
      </div>
      <Part1 :part1Data="part1Data" @openBookPop="openBookPop"></Part1>
      <Part2
        :bookedTotalArr="bookedTotal_arr"
        :bookedTotal="bookedTotal"
        :part2Data="part2Data"
        @openGiftPop="openGiftPop"
      ></Part2>
      <Part3 :invitedNum="invitedNum" :part3Data="part3Data" @openBookPop="openBookPop"></Part3>
    </div>
    <div class="introduct-bg">
      <Part4></Part4>
      <Part5 :roleInfo="roleInfo" @openRolePop="openRolePop"></Part5>
      <Part6 @openMapPop="openMapPop"></Part6>
      <Part7></Part7>
      <Rules :contactsInfo="contactsInfo"></Rules>
    </div>
    <div class="bottom-segment"></div>
  </div>
</template>
<script>
import Header from './components/Header'
import VideoDialog from './components/VideoDialog'
import BookPop from './components/BookPop'
import PopGift from './components/GiftPop'
import PopRole from './components/RolePop'
import PopMap from './components/MapPop'
import Nav from './components/Nav'
import Part1 from './components/Part1'
import Part2 from './components/Part2'
import Part3 from './components/Part3'
import Part4 from './components/Part4'
import Part5 from './components/Part5'
import Part6 from './components/Part6'
import Part7 from './components/Part7'
import Rules from './components/Rules'
import { parseTime } from '@/utils/common'
import * as local from '@/utils/local'
import {
  bookingOnOrOff,
  getBookTotal,
  getBookingRole,
  getBookingData,
  getInvitedCount,
  getContactsWeb
} from '@/api/index'
export default {
  components: {
    Header,
    VideoDialog,
    BookPop,
    PopGift,
    PopRole,
    PopMap,
    Nav,
    Part1,
    Part2,
    Part3,
    Part4,
    Part5,
    Part6,
    Part7,
    Rules
  },
  head() {
    return {
      meta: [{ name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=0' }]
    }
  },
  data() {
    return {
      showVideo: false,
      showBookPop: false,
      showGiftPop: false,
      showRolePop: false,
      showMapPop: false,
      bookStatus: 'booking', // 预约状态： success 预约成功 | booking 预约中
      invite_id_self: '', // 本用户的邀请码 也是本用户的guid
      invitedNum: 0, // 邀请人数
      navTitle: '超人预约见面礼',
      part2GiftData: null,
      selectedRoleData: null
    }
  },
  asyncData({ store }) {
    return Promise.all([bookingOnOrOff(), getBookingData(), getBookingRole(), getContactsWeb()]).then(arr => {
      let bookInfo = {}
      console.log('on_off', arr[0])
      console.log('role', arr[2])
      if (arr[0].code === 0) {
        // 预定总数设置7位 不足前面补‘-1’
        const totalArr = arr[0].data.total.toString().split('')
        const cTotalArr = []
        const cLength = 7 - totalArr.length > 0 ? 7 - totalArr.length : 0
        for (let i = 0; i < cLength; i++) {
          cTotalArr.push('-1')
        }
        const rTotalArr = [...cTotalArr, ...totalArr]
        bookInfo = {
          beginTime: arr[0].data.begin_time ? parseTime(arr[0].data.begin_time, '{y}.{m}.{d}') : '',
          endTime: arr[0].data.end_time ? parseTime(arr[0].data.end_time, '{y}.{m}.{d}') : '',
          on_off: arr[0].data.on_off,
          bookedTotal: arr[0].data.total,
          bookedTotal_arr: rTotalArr
        }
      }
      console.log('activity', arr[1].data)
      console.log('contact', arr[3].data)
      const activityData = arr[1].data ? arr[1].data : null
      return {
        ...bookInfo,
        roleInfo: arr[2].data,
        part1Data: activityData ? activityData.part1 : null,
        part2Data: activityData ? activityData.part2 : null,
        part3Data: activityData ? activityData.part3 : null,
        contactsInfo: arr[3].data
      }
    })
  },
  created() {
    this.toGetInviteDCount()
    this.setBookTotalPolling()
  },
  mounted() {
    this.observePartScroll()
  },
  methods: {
    openGiftPop(data) {
      this.showGiftPop = true
      this.part2GiftData = data
    },
    openRolePop(data) {
      this.showRolePop = true
      this.selectedRoleData = data
      console.log('okok', this.selectedRoleData)
    },
    openMapPop(data) {
      this.showMapPop = true
      this.mapData = data
    },
    observePartScroll() {
      const _this = this
      const io = new IntersectionObserver(
        function(entry) {
          entry.forEach(e => {
            if (e.isIntersecting) {
              _this.navTitle = e.target.textContent.trim()
            }
          })
        },
        { threshold: [1] }
      )
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
    },
    openBookPop() {
      this.invite_id_self = local.getGuid()
      if (this.invite_id_self) {
        this.bookStatus = 'success'
      }
      this.showBookPop = true
    },
    closePop() {
      this.showBookPop = false
    },
    closeGiftPop() {
      this.showGiftPop = false
    },
    closeRolepop() {
      this.showRolePop = false
    },
    closeMapPop() {
      this.showMapPop = false
    },
    changeBookStatus(status) {
      this.bookStatus = status
    },
    setBookTotalPolling() {
      this.totalPolling = setInterval(() => {
        getBookTotal().then(res => {
          if (res.code === 0) {
            // 预定总数设置7位 不足前面补‘-1
            const totalArr = res.data.toString().split('')
            const cTotalArr = []
            const cLength = 7 - totalArr.length > 0 ? 7 - totalArr.length : 0
            for (let i = 0; i < cLength; i++) {
              cTotalArr.push('-1')
            }
            const rTotalArr = [...cTotalArr, ...totalArr]
            this.bookedTotal = res.data
            this.bookedTotal_arr = rTotalArr
          }
        })
      }, 30000)
    },
    toGetInviteDCount() {
      if (process.client) {
        this.invite_id_self = local.getGuid() || ''
        if (this.invite_id_self) {
          getInvitedCount(this.invite_id_self).then(res => {
            if (res.code === 0) {
              this.invitedNum = res.data
            }
          })
        }
      }
    }
  }
}
</script>
<style lang="less" scoped>
@import url('~assets/css/guide_m.less');
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes paopao {
  0% {
    background-position: 0;
  }
  100% {
    background-position: -29412 * @vw;
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
@keyframes move_updown {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10 * @vw);
  }
  100% {
    transform: translateY(0);
  }
}
.container {
  width: 750 * @vw;
  overflow-x: hidden;
}
.header-space {
  width: 750 * @vw;
  height: 104 * @vw;
}
.index-bg {
  position: relative;
  z-index: 1;
  width: 750 * @vw;
  height: 746 * @vw;
  background: url('~assets/images/guide/m_bg/index_bg.png') no-repeat;
  background-size: 100%;
  .logo-icon {
    position: absolute;
    right: 31 * @vw;
    top: 145 * @vw;
    width: 138 * @vw;
    height: 60 * @vw;
    background: url('~assets/images/guide/logo.png') no-repeat;
    background-size: contain;
  }
  .light-pic {
    position: absolute;
    top: 0 * @vw;
    left: -125 * @vw;
    width: 1000 * @vw;
    height: 1000 * @vw;
    background: url('~assets/images/guide/light_index.png') no-repeat;
    background-size: 100%;
    animation: rotate 15s linear infinite;
  }
}
.activity-bg {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  margin-top: -566 * @vw;
  width: 750 * @vw;
  height: 4771 * @vw;
  background: url('~assets/images/guide/m_bg/bg_activity.png') center center no-repeat;
  background-size: 100%;
  .index-wrapper {
    position: relative;
    width: 750 * @vw;
    height: 740 * @vw;
    display: flex;
    justify-content: center;
    .paopao-pic {
      margin-top: 30 * @vw;
      transform: scale(0.95);
      width: 774 * @vw;
      height: 748 * @vw;
      background: url('~assets/images/guide/index/big_paopao.png');
      background-size: cover;
      background-position: 0;
      animation: paopao 2.5s infinite steps(38, end);
      .doll-cactus {
        position: absolute;
        top: 0;
        left: 210 * @vw;
        width: 200 * @vw;
        height: 190 * @vw;
        background: url('~assets/images/guide/index/cactus_0.png') no-repeat;
        background-size: contain;
        animation: move_updown 1.2s ease infinite;
      }
      .ribbon-pic-1 {
        position: absolute;
        left: 20 * @vw;
        bottom: 80 * @vw;
        width: 695 * @vw;
        height: 193 * @vw;
        background: url('~assets/images/guide/index/ribbon1_index.png') no-repeat;
        background-size: contain;
        z-index: 2;
      }
      .ribbon-pic-2 {
        position: absolute;
        bottom: 50 * @vw;
        right: -200 * @vw;
        width: 270 * @vw;
        height: 193 * @vw;
        background: url('~assets/images/guide/index/ribbon2_index.png') no-repeat;
        background-size: contain;
        z-index: 1;
      }
      .title-pic {
        position: absolute;
        top: 270 * @vw;
        left: 20 * @vw;
        width: 713 * @vw;
        height: 271 * @vw;
        background: url('~assets/images/guide/index/title.png') no-repeat;
        background-size: contain;
        z-index: 3;
      }
      .title-activity-pic {
        position: absolute;
        z-index: 3;
        left: 60 * @vw;
        bottom: 120 * @vw;
        width: 630 * @vw;
        height: 69 * @vw;
        background: url('~assets/images/guide/index/title_activity.png') no-repeat;
        background-size: contain;
        display: flex;
        justify-content: center;
        .play-bg {
          position: absolute;
          top: -22 * @vw;
          margin-left: -4 * @vw;
          width: 108 * @vw;
          height: 108 * @vw;
          background: url('~assets/images/guide/index/play_bg_index.png') no-repeat;
          background-size: contain;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: scale_play 3s infinite;
        }
        .play-icon {
          width: 44 * @vw;
          height: 49 * @vw;
          background: url('~assets/images/guide/index/play_index.png') no-repeat;
          background-size: contain;
          animation: scale_play 3s infinite;
          animation-delay: 0.8s;
        }
      }
    }
    .doll-rabbit {
      position: absolute;
      z-index: 2;
      left: -10 * @vw;
      bottom: -310 * @vw;
      width: 176 * @vw;
      height: 411 * @vw;
      background: url('~assets/images/guide/index/rabbit_m.png') no-repeat;
      background-size: contain;
    }
    .doll-lili {
      position: absolute;
      z-index: 2;
      right: 0 * @vw;
      bottom: -480 * @vw;
      width: 151 * @vw;
      height: 454 * @vw;
      background: url('~assets/images/guide/index/lili_m.png') no-repeat;
      background-size: contain;
    }
  }
  .book-wrapper {
    position: relative;
    width: 750 * @vw;
    display: flex;
    justify-content: center;
    z-index: 1;
    .pipe1 {
      position: absolute;
      top: 46 * @vw;
      left: 0 * @vw;
      width: 273 * @vw;
      height: 754 * @vw;
      background: url('~assets/images/guide/m/pipe1.png') no-repeat;
      background-size: contain;
      z-index: 1;
    }
    .book-box {
      margin-left: 20 * @vw;
      width: 391 * @vw;
      height: 166 * @vw;
      background: url('~assets/images/guide/invite_btn_bg.png') no-repeat;
      background-size: contain;
      display: flex;
      align-items: center;
      justify-content: center;
      .book-btn {
        width: 352 * @vw;
        height: 147 * @vw;
        background: url('~assets/images/guide/btn_book_big_normal.png') center bottom no-repeat;
        background-size: contain;
        z-index: 2;
      }
      &::after {
        content: '';
        background-image: url('~assets/images/guide/btn_book_big_click.png');
      }
      &:active {
        .book-btn {
          width: 352 * @vw;
          height: 141 * @vw;
          background: url('~assets/images/guide/btn_book_big_click.png') center bottom no-repeat;
          background-size: contain;
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
  }
}
.introduct-bg {
  position: relative;
  z-index: 1;
  margin-top: 170 * @vw;
  padding-top: 584 * @vw;
  width: 750 * @vw;
  height: 5021 * @vw;
  background: url('~assets/images/guide/m_bg/bg_content.png') center center no-repeat;
  background-size: 100%;
}
.bottom-segment {
  width: 750 * @vw;
  height: 100 * @vw;
  background-color: #0037ac;
}
</style>
