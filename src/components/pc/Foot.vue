<template>
  <footer class="content_box">
    <div class="left_part">
      <img class="small_logo" src="~assets/images/pc/footer/small_logo.png" alt="SNQU" />
      <span class="line"></span>
      <span class="copyright">
        Copyright ©2019 SNQU All Rights Reserved.
        <a class="copyright-link" href="http://www.beian.miit.gov.cn" target="_blank">蜀ICP备17014620号-6</a>
      </span>
    </div>
    <div class="right_part">
      <ul class="contact_list">
        <li class="contact_item">
          <img src="~assets/images/pc/footer/Instagram.png" alt="Instagram" />
        </li>
        <li class="contact_item">
          <img src="~assets/images/pc/footer/facebook.png" alt="facebook" />
        </li>
        <li class="contact_item">
          <img src="~assets/images/pc/footer/twitter.png" alt="twitter" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.content_box {
  background: #282828;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .left_part {
    display: flex;
    align-items: center;
    .small_logo {
      display: inline-block;
      width: 78px;
      height: 24px;
    }
    .line {
      width: 1px;
      height: 14px;
      background: rgba(255, 255, 255, 0.2);
      margin: 0 20px;
    }
    .copyright {
      font-size: 12px;
      color: rgba(255, 255, 255, 0.25);
      .copyright-link {
        color: rgba(255, 255, 255, 0.25);
        text-decoration: underline;
      }
    }
  }
  .right_part {
    .contact_list {
      display: flex;
      align-items: center;
      .contact_item {
        width: 46px;
        height: 46px;
      }
    }
  }
}
</style>
