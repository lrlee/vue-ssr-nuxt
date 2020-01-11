<template>
  <div @wheel.prevent class="pop">
    <div :class="{ 'paopao-animation': bookStatus == 'success' }" class="pop-box">
      <i @click="closePop" class="close-icon icon btn"></i>
      <div v-if="bookStatus == 'booking'" class="pop-content">
        <div class="form-box">
          <div class="platform-select">
            <div
              @click="selectPlatform('ios')"
              :class="{ selected: form.platforms == 1 }"
              class="platform-item left btn"
            >
              <i class="ios-icon icon"></i>
            </div>
            <div
              @click="selectPlatform('android')"
              :class="{ selected: form.platforms == 2 }"
              class="platform-item right btn"
            >
              <i class="android-icon icon"></i>
            </div>
          </div>
          <div class="phone-edit">
            <input
              @blur="checkPhone"
              v-model="form.mobile"
              type="text"
              placeholder="请填写手机号码即可参与活动"
              class="phone-input"
            />
            <div v-show="phoneErr" class="input-err"><i class="err-icon icon"></i>请输入正确的手机号码</div>
          </div>
          <div class="code-edit">
            <div>
              <input
                @blur="checkCode"
                v-model="form.sms_captcha"
                type="text"
                placeholder="请输入验证码"
                class="code-input"
              />
            </div>
            <div v-if="startCount" class="code-btn btn">{{ countDown }}s</div>
            <div @click="getCode" v-else class="code-btn btn">获取验证码</div>
            <div v-show="codeErr" class="input-err"><i class="err-icon icon"></i>请输入正确的短信验证码</div>
          </div>
          <div @click="submitForm" class="submit-btn btn">立即预约</div>
        </div>
      </div>
      <div v-else class="pop-content">
        <div class="ribbon-animation"></div>
        <div class="colorpaper-animation"></div>
        <div class="book-success-box">
          <p class="success-title">恭喜您预约成功!</p>
          <div class="invite-QR">
            <div class="qr-box">
              <div class="qr-sticker"></div>
              <div id="qrcode" ref="qrcode" class="qr-pic"></div>
            </div>
            <p class="invite-des">截图保存二维码或复制邀请链接，发给小伙伴抱团一起来玩吧，抱团人数越多，奖励越大。</p>
          </div>
          <div class="invite-link">
            <p class="title">专属邀请链接：</p>
            <div class="link-box">
              <div class="input-box">
                <input id="inviteLink" v-model="inviteLink" type="text" readonly />
              </div>
              <div @click="toCopyLink" class="copy-btn btn">复制链接</div>
            </div>
          </div>
        </div>
        <p class="change-account"><span @click="changeAuth" class="btn">切换绑定手机</span></p>
      </div>
    </div>
  </div>
</template>
<script>
import qs from 'qs'
// import QRCode from 'qrcodejs2'
import { getBookVeriCode, toBook } from '@/api/index'
import * as local from '@/utils/auth'
export default {
  props: {
    bookStatus: {
      type: String,
      default: 'booking'
    }
  },
  data() {
    return {
      qrCode: null,
      codeErr: false,
      phoneErr: false,
      codeBtnText: '请输入验证码',
      countDown: 61, // 验证码倒计时
      startCount: false, // 倒计时开始
      form: {
        country_num: '86',
        platforms: 1, // 1 ios; 2 android
        mobile: '',
        sms_captcha: '',
        inviter_id: ''
      },
      invite_id_self: '', // 本用户的邀请码 也是本用户的guid
      inviteLink: ''
    }
  },
  watch: {
    bookStatus() {
      this.form.inviter_id = this.$route.query.invite_code || ''
    }
  },
  mounted() {
    if (this.bookStatus === 'success') {
      this.invite_id_self = local.getGuid()
      this.inviteLink = location.origin + '?invite_code=' + this.invite_id_self
      this.$nextTick(() => {
        this.crateQrcode()
      })
    } else {
      this.form.inviter_id = this.$route.query.invite_code
    }
  },
  methods: {
    toCopyLink() {
      const inviteLink = document.getElementById('inviteLink')
      inviteLink.select()
      document.execCommand('copy')
    },
    crateQrcode() {
      if (process.client) {
        const QRCode = require('qrcodejs2')
        this.qrCode = new QRCode('qrcode', {
          width: 80,
          height: 80,
          text: this.inviteLink
          // render: 'canvas' // 设置渲染方式（有两种方式 table和canvas，默认是canvas）
          // background: '#f0f'
          // foreground: '#ff0'
        })
      }
    },
    closePop() {
      this.$emit('closePop')
    },
    selectPlatform(type) {
      if (type === 'ios') {
        this.form.platforms = 1
      } else {
        this.form.platforms = 2
      }
    },
    checkPhone() {
      const pattern = /^[0-9]{6,16}$/
      console.log(this.form.mobile)
      if (!pattern.test(this.form.mobile)) {
        this.phoneErr = true
      } else {
        this.phoneErr = false
      }
    },
    checkCode() {
      const pattern = /^[0-9]{6}$/
      if (!pattern.test(this.form.sms_captcha)) {
        this.codeErr = true
      } else {
        this.codeErr = false
      }
    },
    // 获取验证码
    getCode() {
      this.checkPhone()
      if (this.phoneErr) return
      const param = {
        country_num: '86',
        mobile: this.form.mobile
      }
      getBookVeriCode(qs.stringify(param)).then(res => {
        if (res.code === 0) {
          this.startCount = true
          this.toCountDown()
        } else {
          this.phoneErr = true
        }
      })
    },
    // 倒计时
    toCountDown() {
      this.countDown--
      setTimeout(() => {
        if (this.countDown > 1) {
          this.toCountDown()
        } else {
          this.startCount = false
          this.countDown = 61
        }
      }, 1000)
    },
    changeBookStatus(status) {
      this.$emit('changeBookStatus', status)
    },
    changeAuth() {
      local.removeGuid()
      this.$emit('changeBookStatus', 'booking')
    },
    submitForm() {
      this.checkPhone()
      this.checkCode()
      if (!this.phoneErr && !this.codeErr) {
        toBook(qs.stringify(this.form)).then(res => {
          if (res.code === 0) {
            // this.bookStatus = 'success'
            this.changeBookStatus('success')
            this.invite_id_self = res.data.invite_id
            this.inviteLink = location.origin + '?invite_code=' + this.invite_id_self
            this.$nextTick(() => {
              this.crateQrcode()
            })
            local.setGuid(this.invite_id_self)
            this.$emit('toGetInviteDCount')
          } else {
            this.codeErr = true
          }
        })
      }
    }
  }
}
</script>
<style lang="less" scoped>
@vw: 1vw/7.5;
@keyframes scale_ribbon {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes scale_colorpaper {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1.3);
  }
}
.paopao-animation {
  animation: scale_ribbon 0.4s ease;
  animation-fill-mode: forwards;
}
.pop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
}
.pop-box {
  margin-left: 35 * @vw;
  width: 690 * @vw;
  height: 921 * @vw;
  background: url('~assets/images/guide/m/pop_book/pop_bg.png') no-repeat;
  background-size: contain;
  position: relative;
  .close-icon {
    width: 93 * @vw;
    height: 93 * @vw;
    background: url('~assets/images/guide/close_circle_pop.png') no-repeat;
    background-size: contain;
    position: absolute;
    right: 29 * @vw;
    top: 123 * @vw;
    z-index: 3;
    &::after {
      content: '';
      background-image: url('~assets/images/guide/close_circle_hover_pop.png');
    }
    &:active {
      background-image: url('~assets/images/guide/close_circle_hover_pop.png');
    }
  }
}
.pop-content {
  width: 100%;
  padding-right: 45 * @vw;
  position: relative;
  .ribbon-animation {
    position: absolute;
    left: -20 * @vw;
    bottom: -50 * @vw;
    width: 249 * @vw;
    height: 104 * @vw;
    background: url('~assets/images/guide/ribbon_pop.png') no-repeat;
    background-size: contain;
    transform: scale(0);
    animation: scale_ribbon 0.4s cubic-bezier(0.36, 0.35, 0.29, 1.32);
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    transform-origin: left bottom;
    z-index: 1;
  }
  .colorpaper-animation {
    pointer-events: none;
    position: absolute;
    bottom: -58 * @vw;
    left: -18 * @vw;
    width: 522 * @vw;
    height: 629 * @vw;
    background: url('~assets/images/guide/m/pop_book/colorpaper_pop.png') no-repeat;
    background-size: contain;
    transform: scale(0);
    animation: scale_colorpaper 1s cubic-bezier(0.66, 0.22, 0.1, 1.35);
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
    transform-origin: left bottom;
    z-index: 1;
  }
}
.form-box {
  width: 440 * @vw;
  margin: 366 * @vw auto 0 auto;
  input {
    height: 80 * @vw;
    padding: 0 30 * @vw;
    background-color: #c1e4ff;
    color: #0079d0;
    font-size: 28 * @vw;
    font-weight: bold;
    &:focus {
      background-color: #fff;
      // border: 1 * @vw solid rgba(0, 121, 208, 0.8);
      box-shadow: inset 0 0 9 * @vw 0 rgba(0, 121, 208, 1);
    }
  }
  .input-err {
    position: absolute;
    left: 21 * @vw;
    top: 100%;
    color: #fff;
    font-size: 24 * @vw;
    padding-top: 5 * @vw;
    .err-icon {
      width: 24 * @vw;
      height: 24 * @vw;
      background: url('~assets/images/guide/input_err_icon.png') no-repeat;
      background-size: contain;
      margin-right: 10 * @vw;
      position: relative;
      top: 4 * @vw;
    }
  }
  ::-webkit-input-placeholder {
    /* WebKit browsers */
    color: #4999d7;
    font-size: 28 * @vw;
    font-weight: 400;
  }
  :-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    color: #4999d7;
    font-size: 28 * @vw;
    font-weight: 400;
  }
  ::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    color: #4999d7;
    font-size: 28 * @vw;
    font-weight: 400;
  }
  :-ms-input-placeholder {
    /* Internet Explorer 10+ */
    color: #4999d7;
    font-size: 28 * @vw;
    font-weight: 400;
  }
  .platform-select {
    display: flex;
    margin-bottom: 30 * @vw;
    .platform-item {
      width: 220 * @vw;
      height: 80 * @vw;
      background-color: #c1e4ff;
      display: flex;
      align-items: center;
      justify-content: center;
      &.left {
        border-radius: 40 * @vw 0 0 40 * @vw;
      }
      &.right {
        border-radius: 0 40 * @vw 40 * @vw 0;
      }
      .ios-icon {
        width: 67.4 * @vw;
        height: 26 * @vw;
        background: url('~assets/images/guide/platform_ios_pop.png') no-repeat;
        background-size: contain;
      }
      .android-icon {
        width: 148 * @vw;
        height: 26 * @vw;
        background: url('~assets/images/guide/platform_android_pop.png') no-repeat;
        background-size: contain;
      }
      &.selected {
        background-color: #0079d0;
        .ios-icon {
          width: 72 * @vw;
          height: 30 * @vw;
          background-image: url('~assets/images/guide/platform_ios_selected_pop.png');
        }
        .android-icon {
          width: 150 * @vw;
          height: 30 * @vw;
          background-image: url('~assets/images/guide/platform_android_selected_pop.png');
        }
      }
    }
  }
  .phone-edit {
    position: relative;
    width: 100%;
    margin-bottom: 57 * @vw;
    .phone-input {
      width: 100%;
      height: 80 * @vw;
      border-radius: 40 * @vw;
    }
  }
  .code-edit {
    position: relative;
    width: 100%;
    display: flex;
    margin-bottom: 69 * @vw;
    .code-input {
      width: 277 * @vw;
      height: 80 * @vw;
      border-radius: 40 * @vw 0 0 40 * @vw;
    }
    .code-btn {
      width: 163 * @vw;
      height: 80 * @vw;
      background-color: #0079d0;
      border-radius: 0 40 * @vw 40 * @vw 0;
      text-align: center;
      line-height: 80 * @vw;
      color: #fff;
      font-size: 24 * @vw;
    }
  }
  .submit-btn {
    width: 100%;
    height: 88 * @vw;
    background: linear-gradient(0deg, rgba(53, 246, 255, 1), rgba(0, 143, 246, 1));
    border-radius: 44 * @vw;
    box-shadow: 0 0 21 * @vw 0 rgba(5, 101, 170, 1), inset 0 5 * @vw 0 0 rgba(196, 254, 255, 0.43);
    font-size: 34 * @vw;
    color: #fff;
    font-weight: bold;
    text-align: center;
    line-height: 88 * @vw;
    &:active {
      background: linear-gradient(0deg, rgba(0, 143, 246, 1), rgba(53, 246, 255, 1));
    }
  }
}
.book-success-box {
  width: 508 * @vw;
  padding-top: 355 * @vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .success-title {
    font-size: 42 * @vw;
    text-align: center;
    font-weight: bold;
    color: #fff;
    text-shadow: #0d1d4e 1 * @vw 0 0, #0d1d4e 0 1 * @vw 0, #0d1d4e -1 * @vw 0 0, #0d1d4e 0 -1 * @vw 0;
    margin-bottom: 10 * @vw;
  }
  .invite-QR {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 20 * @vw;
    .qr-box {
      background-color: #fff;
      width: 199 * @vw;
      height: 199 * @vw;
      border-radius: 13 * @vw;
      border: 8 * @vw solid #0062a5;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      .qr-sticker {
        position: absolute;
        width: 261 * @vw;
        height: 258 * @vw;
        background: url('~assets/images/guide/qr_sticker_pop.png') bottom center no-repeat;
        background-size: contain;
      }
      .qr-pic {
        width: 159 * @vw;
        height: 159 * @vw;
        background-color: #fff;
        /deep/ img {
          width: 159 * @vw;
          height: 159 * @vw;
        }
        /deep/ canvas {
          width: 159 * @vw;
          height: 159 * @vw;
        }
      }
    }
    .invite-des {
      width: 284 * @vw;
      font-size: 24 * @vw;
      color: #fff;
      line-height: 1.5;
    }
  }
  .invite-link {
    width: 100%;
    margin-top: 40 * @vw;
    .title {
      font-size: 24 * @vw;
      color: #fff;
      margin-bottom: 15 * @vw;
    }
    .link-box {
      display: flex;
      align-items: center;
      .input-box {
        width: 352 * @vw;
        height: 60 * @vw;
        box-shadow: inset 0 3 * @vw 0 0 rgba(6, 154, 247, 0.25);
        background-color: #fff;
        border-radius: 30 * @vw 0 0 30 * @vw;
        input {
          margin: 0 20 * @vw;
          background-color: transparent;
          height: 60 * @vw;
          width: 312 * @vw;
          font-size: 24 * @vw;
          color: #585858;
        }
      }
      .copy-btn {
        width: 156 * @vw;
        height: 60 * @vw;
        background: linear-gradient(0deg, rgba(53, 246, 255, 1), rgba(0, 143, 246, 1));
        box-shadow: inset 0 3 * @vw 0 0 rgba(196, 254, 255, 0.43);
        border-radius: 0 30 * @vw 30 * @vw 0;
        text-align: center;
        line-height: 60 * @vw;
        color: #fff;
        font-size: 24 * @vw;
      }
    }
  }
}
.change-account {
  margin: 0 auto;
  font-size: 24 * @vw;
  color: #fff;
  text-decoration: underline;
  text-align: center;
  margin-top: 60 * @vw;
}
</style>
